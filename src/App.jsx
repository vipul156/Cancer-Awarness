import React from 'react';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;