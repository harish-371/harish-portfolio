import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import CategoryGallery from './pages/CategoryGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/category/:categoryId" element={<CategoryGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;