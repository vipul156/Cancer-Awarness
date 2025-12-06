import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quoteData, setQuoteData] = useState({ text: 'Loading inspiration...', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Using Advice Slip API (reliable & free, no key needed)
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        setQuoteData({ 
            text: data.slip.advice, 
            author: "Daily Inspiration" 
        });
      } catch (error) {
        setQuoteData({ 
            text: "Hope is the thing with feathers that perches in the soul.", 
            author: "Emily Dickinson" 
        });
      }
    };

    fetchQuote();
  }, []);

  return (
    <section className="py-24 bg-primary-light text-center">
      <div className="w-[90%] max-w-4xl mx-auto">
        <div className="bg-white/5 p-10 rounded-2xl border border-white/5 relative hover:border-accent/30 transition-colors duration-300">
          <p className="text-2xl md:text-3xl font-heading font-medium italic mb-6">
            "{quoteData.text}"
          </p>
          <p className="text-accent font-bold tracking-wider uppercase text-sm">
            — {quoteData.author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;