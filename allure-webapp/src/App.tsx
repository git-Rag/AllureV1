import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import LandingPage from '@/pages/LandingPage';
import EthicsPage from '@/pages/EthicsPage';
import WaitlistModal from '@/components/common/WaitlistModal';
import { UIProvider, useUI } from '@/context/UIContext';

const AppContent = () => {
  const { isWaitlistOpen, closeWaitlist } = useUI();

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ethics" element={<EthicsPage />} />
        </Routes>
      </MainLayout>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={closeWaitlist} 
      />
    </Router>
  );
};

function App() {
  return (
    <UIProvider>
      <AppContent />
    </UIProvider>
  );
}

export default App;
