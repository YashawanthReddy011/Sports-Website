import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation

export default function About() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="bg-gradient-to-br from-blue-100 via-cyan-100 via-60% to-pink-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundColor: '#763a73ff'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-cyan-700/60 to-pink-700/60 rounded-b-3xl" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 bg-clip-text text-transparent">
              KPT Mangalore Sports
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 font-medium drop-shadow">
            Champions in Spirit, Champions in Action
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto -mt-16 mb-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full">
            <div className="text-4xl font-bold text-blue-700 mb-2 mt-16">11+</div>
            <div className="text-lg font-medium text-blue-800">Years of Excellence</div>
          </div>
          <div className="bg-gradient-to-br from-pink-100 via-white to-yellow-100 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full">
            <div className="text-4xl font-bold text-pink-600 mb-2 mt-16">52</div>
            <div className="text-lg font-medium text-pink-700">Points in 44th State Meet</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-200 via-blue-100 to-blue-400 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full">
            <div className="text-lg font-medium text-blue-900 mt-16">
              State-level Inter-Polytechnic
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto bg-[#fdf6e3] p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Story</h2>
        <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
          <p>
            Over the last <span className="font-semibold text-blue-700">11 years</span>,{' '}
            <span className="font-semibold text-blue-700">KPT Mangaluru</span> has established
            itself as a powerhouse in inter-polytechnic sports across Karnataka...
          </p>
          {/* [ ... keep the rest of your story content unchanged ... ] */}
          <p>
            With every victory, KPT Mangaluru continues to inspire, proving that discipline and
            passion always yield results. We are proud to be champions — not just in medals, but
            in spirit.
          </p>
        </div>

        
      </section>
    </div>
  );
}
