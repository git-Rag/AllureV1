import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Architecture from '@/components/landing/Architecture';
import Scenarios from '@/components/landing/Scenarios';
import Conversation from '@/components/landing/Conversation';
import Timeline from '@/components/landing/Timeline';
import Privacy from '@/components/landing/Privacy';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import { useUI } from '@/context/UIContext';

const LandingPage: React.FC = () => {
  useAnimateOnScroll();
  const { openWaitlist } = useUI();

  return (
    <>
      <Hero onWaitlistClick={openWaitlist} />
      <Features />
      <Architecture />
      <Scenarios />
      <Conversation />
      <Timeline />
      <Privacy />
    </>
  );
};

export default LandingPage;
