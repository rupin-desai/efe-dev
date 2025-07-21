import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-300 to-green-900 text-white font-sans">
      <h1 className="text-5xl font-bold mb-4">EFE-India</h1>
      <h2 className="text-2xl mb-8">Sustainable Green Clothing Brand</h2>
      <p className="text-lg max-w-xl text-center mb-8">
        Discover eco-friendly fashion made with love for the planet. Join us in making a difference—one outfit at a time.
      </p>
      <button className="mt-4 px-8 py-4 text-lg font-bold bg-green-300 text-green-900 rounded-lg hover:bg-green-400 transition">
        Shop Now
      </button>
    </div>
  );
};

export default LandingPage;