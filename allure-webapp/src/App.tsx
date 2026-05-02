import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tweaks from './components/Tweaks';
import LandingPage from './pages/LandingPage';
import EthicsPage from './pages/EthicsPage';

function App() {
  return (
    <Router>
      <div className="app-root">
        <Tweaks />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ethics" element={<EthicsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
