import React from "react";
import { NavLink, Route, Routes} from "react-router";
import styles from './customhook.module.css'; 
import UseFetch from './useFetch';

function CustomHooks() {
   return  <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="fetch" className={({ isActive }) => isActive ? styles.activelink : ''}>Fetch URL Example</NavLink></li>
        </ul>
        <Routes>
            <Route path="fetch" element={<UseFetch/>} />
        </Routes>
    </>
}
export default CustomHooks;