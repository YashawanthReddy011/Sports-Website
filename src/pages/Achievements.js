import React from 'react';

export default function Achievements() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8 overflow-x-auto"
      style={{ 
        backgroundImage: "url('/images/bg-achievements.jpg')",
        backgroundColor: '#6bc062ff' // fallback color
       }}
    >
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">Achievements</h2>

      <ul className="space-y-4 mb-8">
        <li className="bg-green-100 p-4 rounded shadow">
          🏃‍♂️ A total of 18 events were conducted for boys and 17 for girls in the state-level sports meet.
        </li>
        <li className="bg-green-100 p-4 rounded shadow">
          🏅 District-level selected students participated in 8 different events representing both boys and girls.
        </li>
        <li className="bg-green-100 p-4 rounded shadow">
          🎓 Our institution sent 21 students — 14 boys and 7 girls — to the 45th state-level sports competition.
        </li>
        <li className="bg-green-100 p-4 rounded shadow">
          🏟️ These competitions covered 31 sports disciplines, including track, field, and indoor events.
        </li>
        <li className="bg-green-100 p-4 rounded shadow">
          🏆 In the 45th state-level sports meet, our students participated in 21 events and won 25 prizes.
        </li>
        <li className="bg-green-100 p-4 rounded shadow">
          🥇 Out of those, our team brought home 4 Gold medals and 1 Bronze medal 🥉.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-600 mb-4">🏆 45th State-Level Sports Notable Achievements</h3>

      <div className="bg-yellow-100 p-4 rounded shadow space-y-3 text-gray-800 mb-6">
        <h4 className="text-xl font-semibold text-blue-700">✅ Individual Championship Awards</h4>
        <ul className="list-disc ml-6">
          <li><strong>Boys Category:</strong> Rakshit R Devadiga, Final Year Electrical Branch</li>
          <li><strong>Girls Category:</strong> Anitha, Final Year Computer Science Branch</li>
        </ul>

        <h4 className="text-xl font-semibold text-blue-700 mt-4">🩺 Medical Bandian Award</h4>
        <ul className="list-disc ml-6">
          <li><strong>Boys Category:</strong> K. Kiran Shetty, Final Year Mechanical Branch</li>
          <li><strong>Girls Category:</strong> Anitha, Final Year Computer Science Branch</li>
        </ul>

        <h4 className="text-xl font-semibold text-blue-700 mt-4">🏅 Group Championship</h4>
        <ul className="list-disc ml-6">
          <li>12 boys from our college won 49 individual prizes</li>
          <li>Girls secured 61 individual prizes</li>
          <li><strong>Total:</strong> 110 individual prizes</li>
          <li>🏆 Our college team won the <strong>General Championship Trophy</strong></li>
        </ul>
      </div>
    </div>
  );
}
