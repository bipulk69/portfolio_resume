import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default App;