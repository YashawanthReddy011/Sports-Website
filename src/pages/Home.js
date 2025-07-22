import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const achievements = [
  {
    image: '/images/result/Panticipate.jpg',
    title: 'Student Participation',
    count: '20+',
    label: 'Students',
  },
  {
    image: '/images/result/Events.jpg',
    title: 'Events ',
    count: '11+',
    label: 'Events',
  },
];

const bannerImages = ['/images/B1.jpg', '/images/B2.jpg'];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [bannerFade, setBannerFade] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
        setFade(true);
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerFade(false);
      setTimeout(() => {
        setBannerIndex((prev) => (prev + 1) % bannerImages.length);
        setBannerFade(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(bannerInterval);
  }, []);

  const handleClick = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  const current = achievements[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Header */}
      <section className="relative text-center py-16 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-300 shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-slide-fade">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent animate-shine">
            KPT Mangalore Sports
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium tracking-wide max-w-2xl mx-auto">
          Showcasing the{' '}
          <span className="text-blue-500 font-bold">spirit</span>,{' '}
          <span className="text-cyan-500 font-bold">strength</span>, and{' '}
          <span className="text-blue-700 font-bold">sportsmanship</span> of our
          students
        </p>
      </section>

      {/* Banner */}
      <section className="w-full overflow-hidden relative h-[350px] md:h-[500px] flex items-center justify-center">
        {bannerImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="KPT Sports Banner"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 rounded-b-3xl shadow-lg ${
              idx === bannerIndex && bannerFade ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-b-3xl" />
        <div className="relative z-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
            Unleashing Potential, One Victory at a Time
          </h2>
          <p className="mt-2 text-lg md:text-xl drop-shadow">
            Explore our achievements and vibrant sports culture
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="py-16 px-4 md:px-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-home.jpg')",
          backgroundColor: '#e0f2fe',
        }}
      >
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700 drop-shadow-lg">
          Our Sports Achievements
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {achievements.map((ach, idx) => (
            <div
              key={ach.title}
              className={`bg-white/90 text-center p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:bg-blue-100 transition-all duration-500 ${
                idx === currentIndex && fade ? 'ring-4 ring-cyan-300' : ''
              }`}
              onClick={() => handleClick(ach.image, ach.title)}
              style={{ minHeight: 260 }}
            >
              <img
                src={ach.image}
                alt={ach.title}
                className="mx-auto h-24 w-24 object-cover rounded-full mb-4 border-4 border-blue-200 shadow"
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-1">{ach.count}</h3>
              <p className="text-lg text-gray-700">{ach.label}</p>
              <div className="mt-2 text-base font-medium text-cyan-700">{ach.title}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow hover:from-cyan-500 hover:to-blue-500 transition"
            onClick={() => handleClick(current.image, current.title)}
          >
            View Highlight
          </button>

          <button
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold shadow hover:from-teal-500 hover:to-green-500 transition"
            onClick={() => navigate('/about')}
          >
            Next Page
          </button>
        </div>
      </section>

      {/* Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedImage}
        name={selectedTitle}
      />
    </div>
  );
}
