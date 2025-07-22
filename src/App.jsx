import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import LandingPage from "./pages/LandingPage";
import { PreloadProvider, usePreload } from "./context/PreloadContext";
import Preloader from "./components/common/Preloader";

const AppContent = () => {
  const { loaded } = usePreload();
  if (!loaded) return <Preloader />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <PreloadProvider>
    <AppContent />
  </PreloadProvider>
);

export default App;
