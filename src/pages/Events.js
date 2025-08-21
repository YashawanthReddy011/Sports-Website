import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config';

export default function Events() {
  const navigate = useNavigate(); // ✅ used correctly

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/events`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-cyan-100 p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-700 via-yellow-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
        🏆 Sports Events & Highlights
      </h2>

      {/* Past Event Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-4">📜 Past Events Highlight</h3>
        <div className="bg-gradient-to-br from-white via-yellow-50 to-green-50 p-6 rounded-2xl shadow-lg space-y-3 text-gray-800 border-l-8 border-yellow-300">
          <h4 className="text-xl font-bold text-green-700 mb-2">44th State-level Inter-Polytechnic Sports Meet – Mysuru</h4>
          <p>📅 <strong>Date:</strong> March 2025 (Chamundi Vihar Stadium, Mysuru)</p>
          <p>🏅 <strong>Overall Champion:</strong> <span className="font-semibold text-green-800">KPT Mangaluru</span> with <strong className="text-yellow-700">52 points</strong></p>
          <p>🥈 <strong>Runner-up:</strong> <span className="text-orange-700">KVG Polytechnic, Sulya</span> with <strong>21 points</strong></p>
          <p>🏃‍♂️ <strong>Men's Individual Champion:</strong> <span className="text-cyan-700">Ankit Karvi (Karwar Government Polytechnic)</span></p>
          <p>🏃‍♀️ <strong>Women's Individual Champion:</strong> <span className="text-pink-700">Nidhi (Nitte Rukmini Adkantaaya Memorial Polytechnic)</span></p>
          <p>📸 <span className="italic text-gray-600">A photograph of the KPT Mangaluru team celebrating with the trophy was featured in the news.</span></p>
        </div>
      </div>

      {/* Boys vs Girls Events Table */}
      <div className="overflow-x-auto mb-12">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">👦 Boys vs 👧 Girls Sports Events</h3>
        <table className="min-w-full table-auto bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 shadow-lg rounded-2xl overflow-hidden">
          <thead className="bg-gradient-to-r from-green-700 via-yellow-400 to-cyan-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-md font-semibold uppercase">Boys Events</th>
              <th className="px-6 py-3 text-left text-md font-semibold uppercase">Girls Events</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">100 M Race</td><td className="px-6 py-3">101 M Race</td></tr>
            <tr className="hover:bg-yellow-100 transition"><td className="px-6 py-3">200 M Race</td><td className="px-6 py-3">200 M Race</td></tr>
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">400 M Race</td><td className="px-6 py-3">400 M Race</td></tr>
            <tr className="hover:bg-yellow-100 transition"><td className="px-6 py-3">800 M Race</td><td className="px-6 py-3">800 M Race</td></tr>
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">3 KM Race</td><td className="px-6 py-3">1 KM Race</td></tr>
            <tr className="hover:bg-yellow-100 transition"><td className="px-6 py-3">4 × 100 M Relay</td><td className="px-6 py-3">1500 M Race</td></tr>
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">Chess</td><td className="px-6 py-3">4 × 400 M Relay</td></tr>
            <tr className="hover:bg-yellow-100 transition"><td className="px-6 py-3">Long Jump</td><td className="px-6 py-3">4 × 100 M Relay</td></tr>
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">High Jump</td><td className="px-6 py-3">Discus</td></tr>
            <tr className="hover:bg-yellow-100 transition"><td className="px-6 py-3">Yoga</td><td className="px-6 py-3">Long Jump</td></tr>
            <tr className="hover:bg-green-100 transition"><td className="px-6 py-3">—</td><td className="px-6 py-3">High Jump</td></tr>
          </tbody>
        </table>
      </div>

      {/* Upcoming Events from API */}
      <div>
        <h3 className="text-3xl font-bold mb-4">📅 Upcoming Events</h3>
        {loading ? (
          <div>Loading events...</div>
        ) : events.length === 0 ? (
          <div>No upcoming events found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map(ev => (
              <div key={ev._id} className="p-4 border rounded shadow-sm bg-white">
                <h3 className="text-xl font-semibold">{ev.title}</h3>
                <p className="text-sm text-gray-600">{new Date(ev.date).toLocaleString()}</p>
                <p className="mt-2">{ev.description}</p>
                <p className="mt-2 text-sm">Venue: {ev.venue} • Capacity: {ev.capacity}</p>
                <button 
                  onClick={() => navigate(`/book/${ev._id}`)}
                  className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
