import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Skills from './pages/skills/skills';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
)

export default App;
