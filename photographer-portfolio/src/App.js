import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import CategoryGallery from './pages/CategoryGallery';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <BackgroundAnimation />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Portfolio />
                <Services />
                <Experience />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/category/:categoryId" element={<CategoryGallery />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;