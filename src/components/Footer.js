import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} KPT Mangalore Sports.</p>
    </footer>
  );
}
