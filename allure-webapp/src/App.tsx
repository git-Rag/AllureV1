import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tweaks from './components/Tweaks';
import LandingPage from './pages/LandingPage';
import EthicsPage from './pages/EthicsPage';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <Router>
      <div className="app-root">
        <Tweaks />
        <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<LandingPage onWaitlistClick={() => setIsWaitlistOpen(true)} />} />
            <Route path="/ethics" element={<EthicsPage />} />
          </Routes>
        </main>

        <Footer />

        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
