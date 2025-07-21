import React from 'react';
import NavBar from './pages/NavBar';
import { Routes, Route } from "react-router";
import UseFetch from './pages/hooks/useFetch';
import ConterExample from './pages/hooks/CounterExample';
import './App.css'; // Assuming you have some styles in App.css
function App() {
  return (
    <Routes>
      <Route path='/*' element={<NavBar />} >
        <Route path="custom-hooks/fetch" element={<UseFetch/>} />
        <Route path="custom-hooks/counter" element={<ConterExample/>} />
      </Route>
  </Routes>
  );
}

export default App;