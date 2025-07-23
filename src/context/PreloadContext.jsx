import React, { createContext, useContext, useEffect, useState } from "react";

// PreloadContext to provide loading state
const PreloadContext = createContext({ loaded: false });

export const usePreload = () => useContext(PreloadContext);

export const PreloadProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload logo, illustration, and fonts
    const logo = new Image();
    logo.src = "/logos/Efelogo1.png";
    const illus = new Image();
    illus.src = "/graphics/landing_illus.png";

    // Preload fonts using FontFace API
    const loadFonts = async () => {
      try {
        const dream = new FontFace(
          "Dream Avenue",
          "url(/fonts/Dream_Avenue.ttf)",
          { style: "normal", weight: "400" }
        );
        const outfit = new FontFace(
          "Outfit",
          "url(/fonts/Outfit-Variable.ttf)",
          { style: "normal", weight: "100 900" }
        );
        await dream.load();
        await outfit.load();
        document.fonts.add(dream);
        document.fonts.add(outfit);
      } catch (e) {
        // Ignore font errors
      }
    };

    // Wait for all assets and at least 3 seconds
    Promise.all([
      new Promise((res) => (logo.onload = res)),
      new Promise((res) => (illus.onload = res)),
      loadFonts(),
      new Promise((res) => setTimeout(res, 3000)),
    ]).then(() => setLoaded(true));
  }, []);

  return (
    <PreloadContext.Provider value={{ loaded }}>
      {children}
    </PreloadContext.Provider>
  );
};
