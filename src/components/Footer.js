import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center py-4 mt-10 w-full">
      <p className="text-sm md:text-base">
        Designed by{' '}
        <span className="font-bold tracking-wide drop-shadow-md bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
          D Yashawantha Reddy
        </span>
        {' '}| © {new Date().getFullYear()} KPT Sports
      </p>
    </footer>
  );
}
