import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import Conversation from '../components/Conversation';
import Timeline from '../components/Timeline';
import Privacy from '../components/Privacy';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const LandingPage: React.FC = () => {
  useAnimateOnScroll();

  return (
    <>
      <Hero />
      <Features />
      <Architecture />
      <Conversation />
      <Timeline />
      <Privacy />
    </>
  );
};

export default LandingPage;
