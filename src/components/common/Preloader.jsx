import React from "react";
import { PuffLoader } from "react-spinners";

const Preloader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EDE9DE]">
    <img
      src="/logos/logo.svg"
      alt="EFE Logo"
      className="w-42 h-42 md:w-64 md:h-64 mb-6 animate-pulse"
      style={{ filter: "drop-shadow(0 2px 8px #1e563133)" }}
      draggable={false}
    />
    <PuffLoader color="#14532d" size={48} speedMultiplier={0.9} />
    <div
      className="mt-6 text-green-900 text-lg font-medium tracking-wide"
      style={{ fontFamily: "var(--font-family-dream)" }}
    >
      Brewing up your experience...
    </div>
  </div>
);

export default Preloader;
