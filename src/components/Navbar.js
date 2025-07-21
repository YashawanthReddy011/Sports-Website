import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold underline"
      : "hover:text-yellow-200";

  return (
    <nav className="bg-pink-800 text-white p-4 shadow">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-bold">KPT Sports</h1>
        <div className="space-x-4 mt-2 sm:mt-0">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/history" className={navItemClass}>History</NavLink>
          <NavLink to="/events" className={navItemClass}>Events</NavLink>
          <NavLink to="/gallery" className={navItemClass}>Gallery</NavLink>
          <NavLink to="/achievements" className={navItemClass}>Achievements</NavLink>
          <NavLink to="/results" className={navItemClass}>Results</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
