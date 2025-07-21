import React from 'react';

export default function Events() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-green-100 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">🏆 Sports Events</h2>

      {/* Past Event Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-orange-700 mb-4">📜 Past Events Highlight</h3>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-3 text-gray-800">
          <h4 className="text-xl font-bold text-green-700">44th State-level Inter-Polytechnic Sports Meet – Mysuru</h4>
          <p>📅 <strong>Date:</strong> March 2025 (Chamundi Vihar Stadium, Mysuru)</p>
          <p>🏅 <strong>Overall Champion:</strong> <span className="font-semibold text-blue-800">KPT Mangaluru</span> with <strong>52 points</strong></p>
          <p>🥈 <strong>Runner-up:</strong> KVG Polytechnic, Sulya with <strong>21 points</strong></p>
          <p>🏃‍♂️ <strong>Men's Individual Champion:</strong> Ankit Karvi (Karwar Government Polytechnic)</p>
          <p>🏃‍♀️ <strong>Women's Individual Champion:</strong> Nidhi (Nitte Rukmini Adkantaaya Memorial Polytechnic)</p>
          <p>📸 A photograph of the KPT Mangaluru team celebrating with the trophy was featured in the news.</p>
        </div>
      </div>

      {/* Boys vs Girls Events Table */}
      <div className="overflow-x-auto">
        <h3 className="text-2xl font-semibold text-orange-700 mb-4">👦 Boys vs 👧 Girls Sports Events</h3>
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-md font-semibold uppercase">Boys Events</th>
              <th className="px-6 py-3 text-left text-md font-semibold uppercase">Girls Events</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="hover:bg-green-50"><td className="px-6 py-3">100 M Race</td><td className="px-6 py-3">101 M Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">200 M Race</td><td className="px-6 py-3">200 M Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">400 M Race</td><td className="px-6 py-3">400 M Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">800 M Race</td><td className="px-6 py-3">800 M Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">3 KM Race</td><td className="px-6 py-3">1 KM Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">4 × 100 M Relay</td><td className="px-6 py-3">1500 M Race</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">Chess</td><td className="px-6 py-3">4 × 400 M Relay</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">Long Jump</td><td className="px-6 py-3">4 × 100 M Relay</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">High Jump</td><td className="px-6 py-3">Discus</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">Yoga</td><td className="px-6 py-3">Long Jump</td></tr>
            <tr className="hover:bg-green-50"><td className="px-6 py-3">—</td><td className="px-6 py-3">High Jump</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
