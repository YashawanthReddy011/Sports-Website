import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Results from './pages/Results';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[80vh] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<Results />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
