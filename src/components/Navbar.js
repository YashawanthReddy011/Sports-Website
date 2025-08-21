import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-red-700 font-bold underline drop-shadow-sm"
      : "text-red-600 hover:text-red-800 transition-colors font-semibold";

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-yellow-900 p-4 shadow-lg sticky top-0 z-50 border-b-2 border-yellow-400">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Group */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <img
              src="/images/l1.jpg"
              alt="Logo 1"
              className="h-12 w-12 object-contain rounded-full border-2 border-yellow-400 shadow-lg bg-white"
              style={{ boxShadow: '0 4px 16px 0 rgba(255,215,0,0.25)' }}
            />
            <img
              src="/images/l2.png"
              alt="Logo 2"
              className="h-8 w-8 object-contain absolute -bottom-2 -right-3 rounded-full border-2 border-red-400 bg-white shadow"
              style={{ boxShadow: '0 2px 8px 0 rgba(255,0,0,0.15)' }}
            />
          </div>
          <h1 className="text-2xl font-extrabold whitespace-nowrap drop-shadow-lg tracking-wider text-yellow-900 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100 px-3 py-1 rounded-xl border-2 border-yellow-300 shadow">
            KPT <span className="text-red-700">Sports</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4">
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
