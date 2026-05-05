import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ghulam Mujtaba. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
