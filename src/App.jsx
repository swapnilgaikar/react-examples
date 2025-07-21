import React from 'react';
import HomePage from './pages/home';
import { Routes, Route } from "react-router";
import CustomHooks from './pages/hooks/CustomHooks';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
        <Route path="custom-hooks/*" element={<CustomHooks />}>
      </Route>
  </Routes>
  );
}

export default App;