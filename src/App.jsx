import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardContainer from './pages/DashboardContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<DashboardContainer />} />
        {/* Fallback for existing users who might have bookmarked registration/dashboard */}
        <Route path="/login" element={<DashboardContainer />} />
        <Route path="/register" element={<DashboardContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
