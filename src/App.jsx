import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import LandingPage from './pages/LandingPage';

const App = () => {
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

export default App;