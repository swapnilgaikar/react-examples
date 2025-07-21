import React from 'react';
import { NavLink } from "react-router";
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      
      <NavLink to="/custom-hooks">Custom Hooks</NavLink>
    </div>
  );
}

export default HomePage;