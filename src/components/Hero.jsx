import React from 'react';

const Hero = () => {
  return (
    <header className="relative flex items-center min-h-[600px] h-[90vh] bg-cover bg-center bg-fixed bg-no-repeat bg-[linear-gradient(to_right,rgba(26,26,46,0.85),rgba(22,33,62,0.85)),url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1950&q=80')]">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="max-w-2xl p-8 md:p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">
            Finding Light in the Darkness, <span className="text-highlight">Together.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Dedicated to raising awareness, providing support, and fostering a community of hope for everyone affected by cancer. You are not alone on this journey.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;