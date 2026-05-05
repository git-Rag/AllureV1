import React, { useEffect, useRef } from 'react';

const Presence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const accentColorRef = useRef('#df5858');

  useEffect(() => {
    const handleAccentChange = (e: any) => {
      accentColorRef.current = e.detail;
    };
    window.addEventListener('accent-change', handleAccentChange);
    return () => window.removeEventListener('accent-change', handleAccentChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let time = 0;
    let animationFrameId: number;

    const particles: Particle[] = [];
    const particleCount = 120;

    class Particle {
      x: number;
      y: number;
      r: number;
      angle: number;
      distance: number;
      speed: number;
      opacity: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = 100 + Math.random() * 200;
        this.x = Math.cos(this.angle) * this.distance;
        this.y = Math.sin(this.angle) * this.distance;
        this.r = 0.5 + Math.random() * 1.8;
        this.speed = (0.001 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1);
        this.opacity = 0.1 + Math.random() * 0.4;
      }

      update() {
        this.angle += this.speed;
        this.x = Math.cos(this.angle) * this.distance;
        this.y = Math.sin(this.angle) * this.distance;
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, color: string) {
        ctx.fillStyle = color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(centerX + this.x, centerY + this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.offsetWidth * window.devicePixelRatio;
      height = canvas.height = parent.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    resize();

    const draw = () => {
      const drawWidth = width / window.devicePixelRatio;
      const drawHeight = height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      
      const accentColor = accentColorRef.current;
      const centerX = drawWidth / 2;
      const centerY = drawHeight / 2;

      // Helper for alpha colors
      const withAlpha = (hex: string, alpha: number) => {
        const a = Math.floor(alpha * 255).toString(16).padStart(2, '0');
        return hex.startsWith('#') ? `${hex}${a}` : hex;
      };

      // Mouse following with easing
      let targetX = centerX;
      let targetY = centerY;
      if (mouseRef.current.active) {
        targetX += (mouseRef.current.x - centerX) * 0.1;
        targetY += (mouseRef.current.y - centerY) * 0.1;
      }

      time += 0.01;

      // Draw Background Glow
      const bgGlow = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, 200);
      bgGlow.addColorStop(0, withAlpha(accentColor, 0.13));
      bgGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, drawWidth, drawHeight);

      // Draw Particles
      particles.forEach(p => {
        p.update();
        p.draw(ctx, targetX, targetY, accentColor);
      });

      // Draw Organic Core
      ctx.globalCompositeOperation = 'screen';
      
      const drawShell = (radius: number, opacity: number, noiseScale: number, speedMult: number) => {
        ctx.beginPath();
        const segments = 80;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          
          const noise = 
            Math.sin(angle * 3 + time * speedMult) * (noiseScale * 0.5) + 
            Math.sin(angle * 5 - time * 0.7 * speedMult) * (noiseScale * 0.3) +
            Math.cos(angle * 2 + time * 1.2 * speedMult) * (noiseScale * 0.2);
          
          const r = radius + noise + Math.sin(time * 0.5) * 10; // Base radius + noise + breathing
          const x = targetX + Math.cos(angle) * r;
          const y = targetY + Math.sin(angle) * r;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        const grad = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, radius + noiseScale);
        grad.addColorStop(0, withAlpha(accentColor, opacity));
        grad.addColorStop(1, 'transparent');
        
        ctx.fillStyle = grad;
        ctx.fill();
      };

      // Layered shells for depth
      drawShell(80, 0.4, 30, 1.0);
      drawShell(60, 0.6, 20, 1.5);
      drawShell(30, 0.8, 10, 2.0);

      // Inner Core
      ctx.beginPath();
      ctx.arc(targetX, targetY, 5 + Math.sin(time * 2) * 2, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 20;
      ctx.shadowColor = accentColor;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="presence-container" data-animate>
      <canvas id="presence" ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default Presence;
