import React, { useEffect, useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

// Utility to split text into animated letter spans (hover only), preserving spaces naturally
const AnimatedTitle = ({ text }) => (
  <span className="inline-block whitespace-pre">
    {Array.from(text).map((char, idx) =>
      char === '_' ? (
        // Render invisible span for underscore
        <span key={idx} className="inline-block" style={{ visibility: 'hidden' }}>_</span>
      ) : char === ' ' ? (
        // Render space as normal
        <span key={idx} className="inline-block">&nbsp;</span>
      ) : (
        <motion.span
          key={idx}
          whileHover={{ scale: 1.3, color: 'var(--brand-primary-light)' }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 16,
            duration: 0.8,
          }}
          className="inline-block cursor-pointer"
          style={{
            display: 'inline-block',
            willChange: 'transform',
          }}
        >
          {char}
        </motion.span>
      )
    )}
  </span>
);

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
  // Responsive check
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      className={`flex flex-col w-full overflow-hidden min-h-screen md:h-screen ${isMobile ? 'justify-center' : ''}`}
      style={{ backgroundColor: 'var(--brand-primary-bg)' }}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Logo at the top */}
      <motion.div
        className={`flex flex-col ${isMobile ? 'items-center mt-8' : 'items-start md:pl-10 mt-8'}`}
        variants={fadeLeft}
      >
        <motion.img
          src="/logos/logo.svg"
          alt="EFE Logo"
          className="w-24 h-24 md:w-28 md:h-28 cursor-pointer"
          whileHover={{
            scale: 1.15,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>
      {/* Main content */}
      <div className={`flex flex-col md:flex-row ${isMobile ? 'items-center justify-center flex-1' : 'items-center justify-between'} px-6 md:px-10 gap-8`}>
        {/* Left: Illustration (hidden on mobile) */}
        <motion.div
          className="hidden md:flex flex-col items-center md:items-start gap-6 w-1/2 md:w-1/3 lg:w-1/3"
          variants={staggerContainer}
        >
          <motion.img
            src="/graphics/landing_illus.png"
            alt="Eco-friendly shopping"
            className="w-[450px] h-auto -mt-12 cursor-pointer"
            variants={fadeLeft}
            whileHover={{
              scale: 1.07,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </motion.div>
        {/* Right: Content */}
        <motion.div
          className={`w-full md:w-2/3 lg:w-2/3 flex flex-col ${isMobile ? 'items-center justify-center' : 'items-center md:items-start'}`}
          variants={staggerContainer}
          style={{ marginTop: '0' }}
        >
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-normal mb-6 leading-tight ${isMobile ? 'text-center' : 'text-center md:text-left'}`}
            style={{
              fontFamily: 'var(--font-family-dream)',
              color: 'var(--brand-font)',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            variants={fadeRight}
          >
            {isMobile ? (
              <>
                THE DROP’S BREWING.<br />
                DON’T BLINK.
              </>
            ) : (
              <>
                <AnimatedTitle text="THE_DROP’S_BREWING." />
                <br />
                <AnimatedTitle text="DON’T_BLINK." />
              </>
            )}
          </motion.h1>
          <motion.p
            className={`text-base sm:text-lg mb-8 ${isMobile ? 'text-center' : 'text-center md:text-left'}`}
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
            className={`flex flex-col ${isMobile ? 'items-center w-full' : 'md:flex-row items-center'} gap-4 mb-4 max-w-md`}
            variants={fadeUp}
          >
            <input
              type="email"
              placeholder="Please enter your e-mail adress"
              className={`px-4 py-2 rounded-full border outline-none bg-transparent ${isMobile ? 'w-full' : 'flex-1'}`}
              style={{
                fontFamily: 'var(--font-family-outfit)',
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-font)',
              }}
            />
            <button
              type="submit"
              className={`px-6 py-2 cursor-pointer rounded-full font-semibold relative overflow-hidden group ${isMobile ? 'w-full' : 'md:w-auto'}`}
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
          <motion.div className="flex gap-4 mt-2 justify-center md:justify-start" variants={fadeUp}>
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
              <style>{`
                .group:hover {
                  border-color: transparent !important;
                }
              `}</style>
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
              <style>{`
                .group:hover {
                  border-color: transparent !important;
                }
              `}</style>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;