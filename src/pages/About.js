import React from 'react';

export default function About() {
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

      {/* Stats/Highlight Section */}
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
            <div className="text-lg font-medium text-blue-900 mt-16">State-level Inter-Polytechnic</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto bg-[#fdf6e3] p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Story</h2>
        <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
          <p>
            Over the last <span className="font-semibold text-blue-700">11 years</span>, <span className="font-semibold text-blue-700">KPT Mangaluru</span> has established itself as a powerhouse in inter-polytechnic sports across Karnataka. Our journey is one of <span className="text-pink-600 font-semibold">perseverance</span>, <span className="text-cyan-700 font-semibold">discipline</span>, and sustained excellence in both athletics and team sports.
          </p>
          <p>
            The institute's sports department has consistently groomed athletes who have excelled individually and contributed to the team’s collective glory. Every year, KPT Mangaluru fields strong teams in major tournaments including <span className="text-blue-700 font-semibold">athletics</span>, <span className="text-pink-600 font-semibold">football</span>, <span className="text-cyan-700 font-semibold">volleyball</span>, and <span className="text-yellow-600 font-semibold">kabaddi</span>.
          </p>
          <p>
            Our dominance is particularly evident in the <span className="text-blue-700 font-semibold">State-level Inter-Polytechnic Sports Meet</span>, held annually across Karnataka. For 11 consecutive years, KPT Mangaluru has either won the championship or secured top positions, proving our consistency.
          </p>
          <p>
            Athletes are selected through rigorous trials and trained year-round under expert coaches, focusing on <span className="text-cyan-700 font-semibold">physical conditioning</span>, <span className="text-pink-600 font-semibold">strategic planning</span>, and <span className="text-yellow-600 font-semibold">teamwork</span>. Daily practice sessions instill discipline and build stamina, while mental toughness and emotional resilience are emphasized.
          </p>
          <p>
            KPT Mangaluru ensures equal attention to both boys' and girls' teams, with several female athletes representing the institution at state and national levels. Our alumni, many of whom have become coaches, PE teachers, or professional players, often return to inspire current students.
          </p>
          <p>
            The latest highlight: KPT Mangaluru emerged as <span className="font-semibold text-pink-600">Overall Champion</span> with a remarkable <span className="text-blue-700 font-bold">52 points</span> at the 44th State-level Inter-Polytechnic Meet, held at Chamundi Vihar Stadium, Mysuru.
          </p>
          <p>
            Our success is built on a foundation of excellent infrastructure, expert coaching, and a strong support system from the college administration, faculty, and parents. We believe that success in sports teaches lifelong values such as <span className="text-cyan-700 font-semibold">leadership</span>, <span className="text-pink-600 font-semibold">humility</span>, and <span className="text-yellow-600 font-semibold">perseverance</span>.
          </p>
          <p>
            With every victory, KPT Mangaluru continues to inspire, proving that discipline and passion always yield results. We are proud to be champions — not just in medals, but in spirit.
          </p>
        </div>
      </section>
    </div>
  );
}
