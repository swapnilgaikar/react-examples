import React from 'react';
import { NavLink } from "react-router";
function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the About Me page.</p>
       
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default AboutPage;