import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, transform: 'translate3d(-60px,0,0)' },
  show: {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    transition: { type: 'tween', duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, transform: 'translate3d(60px,0,0)' },
  show: {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    transition: { type: 'tween', duration: 0.7 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, transform: 'translate3d(0,0,0)' },
  show: {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    transition: { type: 'tween', duration: 0.7 },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      className="flex flex-col w-full overflow-hidden"
      style={{ backgroundColor: 'var(--brand-primary-bg)', height: '100vh' }}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Logo at the top */}
      <motion.div
        className="flex flex-col items-start mt-2 pl-10"
        variants={fadeLeft}
      >
        <img
          src="/logos/logo.svg"
          alt="EFE Logo"
          className="w-28 h-28"
        />
      </motion.div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-8 flex-1 mt-[-40px]">
        {/* Left: Illustration */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-6 md:w-1/3"
          variants={staggerContainer}
          style={{ marginTop: '-32px' }}
        >
          <motion.img
            src="/graphics/landing_illus.png"
            alt="Eco-friendly shopping"
            className="w-[450px] h-auto -mt-12"
            variants={fadeLeft}
          />
        </motion.div>
        {/* Right: Content */}
        <motion.div
          className="md:w-3/4 flex flex-col items-center md:items-start"
          variants={staggerContainer}
          style={{ marginTop: '-32px' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-normal mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-family-dream)',
              color: 'var(--brand-font)',
            }}
            variants={fadeRight}
          >
            THE DROP’S BREWING.<br />DON’T BLINK.
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            style={{
              fontFamily: 'var(--font-family-outfit)',
              color: 'var(--brand-font)',
            }}
            variants={fadeRight}
          >
            You’re about to miss the comfiest, cleanest essentials on this side of the planet.
          </motion.p>
          {/* Email Subscription */}
          <motion.form
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-md"
            variants={fadeUp}
          >
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
              className="px-6 py-2 cursor-pointer rounded-full font-semibold relative overflow-hidden group"
              style={{
                fontFamily: 'var(--font-family-outfit)',
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--neutral-white)',
                border: 'none',
              }}
            >
              <span className="relative z-10">Subscribe</span>
              <span
                className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)',
                  zIndex: 1,
                  borderRadius: '9999px',
                  opacity: 0.7,
                }}
              ></span>
            </button>
          </motion.form>
          {/* Social Icons */}
          <motion.div className="flex gap-4 mt-2" variants={fadeUp}>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition relative overflow-hidden group"
              style={{
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
              }}
              aria-label="Facebook"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                <Facebook className="w-5 h-5" />
              </span>
              <span
                className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, #14532d 0%, #1e5631 100%)',
                  zIndex: 1,
                  borderRadius: '9999px',
                  opacity: 0.9,
                }}
              ></span>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border transition relative overflow-hidden group"
              style={{
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
              }}
              aria-label="Instagram"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                <Instagram className="w-5 h-5" />
              </span>
              <span
                className="absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, #14532d 0%, #1e5631 100%)',
                  zIndex: 1,
                  borderRadius: '9999px',
                  opacity: 0.9,
                }}
              ></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;