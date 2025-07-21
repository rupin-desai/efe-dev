import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f6ea] flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-12">
        {/* Left: Logo & Illustration */}
        <div className="flex flex-col items-center md:items-start gap-8 md:w-1/2">
          {/* Logo */}
          <div className="mb-8">
            <span
              className="text-[64px] font-normal"
              style={{ fontFamily: 'var(--font-family-dream)', color: '#1e5631', lineHeight: 1 }}
            >
              efe
            </span>
            <div
              className="text-xs tracking-wide mt-2"
              style={{ fontFamily: 'var(--font-family-outfit)', color: '#1e5631' }}
            >
              E For Earth
            </div>
          </div>
          {/* Illustration */}
          <img
            src="/illustration.png"
            alt="Eco-friendly shopping"
            className="w-[320px] h-auto"
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h1
            className="text-5xl md:text-6xl font-normal mb-6 text-[#1e5631] leading-tight"
            style={{ fontFamily: 'var(--font-family-dream)' }}
          >
            THE DROP’S BREWING.<br />DON’T BLINK.
          </h1>
          <p
            className="text-lg mb-8 text-[#1e5631]"
            style={{ fontFamily: 'var(--font-family-outfit)' }}
          >
            You’re about to miss the comfiest, cleanest essentials on this side of the planet.
          </p>
          {/* Email Subscription */}
          <form className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-md">
            <input
              type="email"
              placeholder="Please enter your e-mail adress"
              className="flex-1 px-4 py-2 rounded-full border border-[#1e5631] bg-transparent text-[#1e5631] outline-none"
              style={{ fontFamily: 'var(--font-family-outfit)' }}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#1e5631] text-white font-semibold"
              style={{ fontFamily: 'var(--font-family-outfit)' }}
            >
              Subscribe
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1e5631] text-[#1e5631] hover:bg-[#1e5631] hover:text-white transition"
              aria-label="Facebook"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1e5631] text-[#1e5631] hover:bg-[#1e5631] hover:text-white transition"
              aria-label="Instagram"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272 1.281.059 1.69.072 4.946.072s3.665-.013 4.946-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;