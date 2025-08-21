import React from 'react';

export default function Achievements() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8 overflow-x-auto"
      style={{
        backgroundImage: "url('/images/bg-achievements.jpg')",
        backgroundColor: '#FFFDE6', // Cream / Light Ivory
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-2xl tracking-wide rounded-2xl py-6 shadow-lg"
      >
        <span
          className="inline-block px-6 py-2 rounded-xl 
                     bg-gradient-to-r from-[#fff7d6] via-[#ffe599] to-[#ffd699] 
                     shadow-md border border-yellow-300 text-blue-700 font-bold"
        >
          🏅 Achievements
        </span>
      </h2>

      {/* Achievements List */}
      <ul className="space-y-4 mb-10 max-w-3xl mx-auto">
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🏃‍♂️ <span>A total of 18 events were conducted for boys and 17 for girls in the state-level sports meet.</span>
        </li>
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🏅 <span>District-level selected students participated in 8 different events representing both boys and girls.</span>
        </li>
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🎓 <span>Our institution sent 21 students — 14 boys and 7 girls — to the 45th state-level sports competition.</span>
        </li>
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🏟️ <span>These competitions covered 31 sports disciplines, including track, field, and indoor events.</span>
        </li>
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🏆 <span>In the 45th state-level sports meet, our students participated in 21 events and won 25 prizes.</span>
        </li>
        <li className="bg-gradient-to-r from-green-100 via-yellow-50 to-cyan-50 p-4 rounded-2xl shadow flex items-center gap-3 text-lg text-green-900">
          🥇 <span>Out of those, our team brought home 4 Gold medals and 1 Bronze medal 🥉.</span>
        </li>
      </ul>

      {/* Subheading */}
      <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🏆 45th State-Level Sports Notable Achievements
      </h3>

      {/* Detailed Achievements */}
      <div className="bg-gradient-to-br from-yellow-100 via-white to-green-50 p-8 rounded-3xl shadow-xl space-y-6 text-gray-800 max-w-3xl mx-auto">
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            ✅ Individual Championship Awards
          </h4>
          <ul className="list-disc ml-8 text-base">
            <li><strong>Boys Category:</strong> Rakshit R Devadiga, Final Year Electrical Branch</li>
            <li><strong>Girls Category:</strong> Anitha, Final Year Computer Science Branch</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            🩺 Medical Bandian Award
          </h4>
          <ul className="list-disc ml-8 text-base">
            <li><strong>Boys Category:</strong> K. Kishan Sheety, Final Year Mechanical Branch</li>
            <li><strong>Girls Category:</strong> Anitha, Final Year Computer Science Branch</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            🏅 Group Championship
          </h4>
          <ul className="list-disc ml-8 text-base">
            <li>12 boys from our college won 49 individual prizes</li>
            <li>Girls secured 61 individual prizes</li>
            <li><strong>Total:</strong> 110 individual prizes</li>
            <li className="mt-2 text-green-800 font-bold">
              🏆 Our college team won the <span className="text-yellow-700">General Championship Trophy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
