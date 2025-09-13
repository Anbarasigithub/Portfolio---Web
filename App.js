import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar /> 
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
