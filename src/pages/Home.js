import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleClick = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="text-center py-12 bg-green-800 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to KPT Mangalore Sports</h1>
        <p className="text-lg">Showcasing the spirit, strength, and sportsmanship of our students</p>
      </section>

      {/* Banner */}
      <section className="w-full overflow-hidden">
        <img
          src="/images/banner.jpg"
          alt="KPT Sports Banner"
          className="w-full h-[600px] object-cover rounded-t-lg"
        />
      </section>

      {/* Achievements Section with Background Image */}
      <section
        className="py-12 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-home.jpg')",
          backgroundColor: '#89527bff' // fallback color
         }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10 text-red drop-shadow-lg">
          Our Sports Achievements (Click Any Box)
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Students Card */}
          <div
            className="bg-white/80 text-center p-4 rounded-xl shadow-md cursor-pointer hover:bg-blue-200"
            onClick={() => handleClick('/images/result/Panticipate.jpg', 'Student Participation')}
          >
            <img src="/images/result/Panticipate.jpg" alt="Students" className="mx-auto h-24 w-24 object-cover rounded-full mb-2" />
            <h3 className="text-2xl font-bold text-pink-900">20+</h3>
            <p>Students</p>
          </div>

          {/* Events Card */}
          <div
            className="bg-white/80 text-center p-4 rounded-xl shadow-md cursor-pointer hover:bg-blue-200"
            onClick={() => handleClick('/images/result/Events.jpg', 'Event Highlights')}
          >
            <img src="/images/result/Events.jpg" alt="Events" className="mx-auto h-24 w-24 object-cover rounded-full mb-2" />
            <h3 className="text-2xl font-bold text-pink-900">11+</h3>
            <p>Events</p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedImage}
        name={selectedTitle}
      />
    </div>
  );
}
