import React from 'react';
import { NavLink, Routes, Route, Outlet} from "react-router";
// import styles from './home.module.css'; 
function NavBar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li><NavLink to="/custom-hooks/fetch" className={({ isActive }) => isActive ? 'active-link' : ''}>Fetch URL Example</NavLink></li>
        <li><NavLink to="/custom-hooks/counter" className={({ isActive }) => isActive ? 'active-link' : ''}>Counter Example</NavLink></li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default NavBar;