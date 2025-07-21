import React from 'react';
// Import Lucide icons
import { Facebook, Instagram } from 'lucide-react';

const LandingPage = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: 'var(--brand-primary-bg)', height: '120vh' }}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 gap-16">
        {/* Left: Logo & Illustration */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start mb-2">
            <img
              src="/logos/logo.svg"
              alt="EFE Logo"
              className="w-32 h-32"
            />
          </div>
          {/* Illustration */}
          <img
            src="/graphics/landing_illus.png"
            alt="Eco-friendly shopping"
            className="w-[500px] h-auto -mt-8"
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-3/4 flex flex-col items-center md:items-start">
          <h1
            className="text-5xl md:text-7xl font-normal mb-8 leading-tight"
            style={{
              fontFamily: 'var(--font-family-dream)',
              color: 'var(--brand-font)',
            }}
          >
            THE DROP’S BREWING.<br />DON’T BLINK.
          </h1>
          <p
            className="text-lg mb-10"
            style={{
              fontFamily: 'var(--font-family-outfit)',
              color: 'var(--brand-font)',
            }}
          >
            You’re about to miss the comfiest, cleanest essentials on this side of the planet.
          </p>
          {/* Email Subscription */}
          <form className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full max-w-md">
            <input
              type="email"
              placeholder="Please enter your e-mail adress"
              className="flex-1 px-4 py-2 rounded-full border outline-none bg-transparent"
              style={{
                fontFamily: 'var(--font-family-outfit)',
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-font)',
              }}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full font-semibold"
              style={{
                fontFamily: 'var(--font-family-outfit)',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--neutral-white)',
              }}
            >
              Subscribe
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition"
              style={{
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
              }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition"
              style={{
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;