import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GamesList from './pages/GamesList';
import PCConfig from './pages/PCConfig';
import Contact from './pages/Contact';
import './styles.css';

function App() {
  return ( 
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/pc-config" element={<PCConfig />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
