import React from 'react';

const Contact = () => {
  const inputClasses = "w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:border-accent focus:bg-white/10";

  return (
    <section className="py-24 bg-primary-dark">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Reach Out to Us</h2>
            <p className="text-lg text-white/70 mb-8">
              Whether you need resources, want to volunteer, or just need someone to listen, send us a message.
            </p>
          </div>

          <div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <input type="text" placeholder="Your Name" className={inputClasses} required />
              <input type="email" placeholder="Your Email" className={inputClasses} required />
              <textarea placeholder="How can we help?" rows="4" className={`${inputClasses} resize-y`} required></textarea>
              
              <button 
                type="submit" 
                className="w-full p-4 bg-gradient-to-br from-accent to-accent-secondary rounded-xl font-bold text-lg text-white shadow-lg hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;