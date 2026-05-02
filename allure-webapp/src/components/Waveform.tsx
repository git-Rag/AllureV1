import React, { useEffect, useRef } from 'react';

const Waveform: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let time = 0;
    let animationFrameId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.offsetWidth * window.devicePixelRatio;
      height = canvas.height = parent.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const dotSize = 2;
      const spacing = 8;
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');

      for (let x = 0; x < width; x += spacing) {
        const normX = x / width;
        const amplitude = Math.sin(normX * Math.PI) * (height / 2.5);
        const wave = Math.sin(normX * 8 + time * 0.04) * amplitude;
        const y = height / 2 + wave;

        ctx.fillStyle = accentColor;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // Trace line
        ctx.strokeStyle = accentColor;
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.moveTo(x, height / 2);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="waveform-container" data-animate>
      <canvas id="waveform" ref={canvasRef}></canvas>
    </div>
  );
};

export default Waveform;
