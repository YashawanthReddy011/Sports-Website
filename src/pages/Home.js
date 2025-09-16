import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from '../components/ImageModal';

// Achievements data
const achievements = [
  {
<<<<<<< HEAD
    image: '/images/result/Panticipate.jpg', // Use WebP if possible
=======
    image: '/images/result/Panticipate.jpg', 
>>>>>>> 93f384cb89ac3a36b9b23f7d4f8d20bf329fc3b2
    fallback: '/images/result/Panticipate.jpg',
    title: 'Student Participation',
    count: '20+',
    label: 'Students',
  },
  {
    image: '/images/result/Events.jpg',
    fallback: '/images/result/Events.jpg',
    title: 'Events',
    count: '11+',
    label: 'Events',
  },
];

// Banner images
const bannerImages = [
  '/images/B1.jpg',
  '/images/B2.jpg',
  '/images/B3.jpg',
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);

  
  // Auto-slide achievements highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide banners
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(bannerInterval);
  }, []);

  const handleClick = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  const current = achievements[currentIndex];

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: '#FFFDE6', // Cream / Light Ivory (rgb(255, 253, 230))
      }}
    >
      {/* Header */}
      <section className="relative text-center py-16 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-300 shadow-md">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent">
            KPT Mangalore Sports
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 font-medium tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Showcasing the{' '}
          <span className="text-blue-500 font-bold">spirit</span>,{' '}
          <span className="text-cyan-500 font-bold">strength</span>, and{' '}
          <span className="text-blue-700 font-bold">sportsmanship</span> of our
          students
        </motion.p>
      </section>

      {/* Banner */}
      <section className="w-full overflow-hidden relative h-[350px] md:h-[500px] flex items-center justify-center rounded-b-3xl shadow-lg">
        <AnimatePresence>
          <motion.img
            key={bannerImages[bannerIndex]}
            src={bannerImages[bannerIndex]}
            alt="KPT Sports Banner"
            loading="lazy"
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-b-3xl" />
        <div className="relative z-10 text-white text-center">
         
        </div>
      </section>

      {/* Achievements */}
      <section 
        className="py-16 px-4 md:px-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-home.jpg')",
          backgroundColor: '#0c95c3ff',
        }}
      >
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700 drop-shadow-lg">
          Our Sports Achievements
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              className={`backdrop-blur-md bg-white/80 text-center p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-500 ${
                idx === currentIndex ? 'ring-4 ring-cyan-300 animate-pulse' : ''
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleClick(ach.image, ach.title)}
              style={{ minHeight: 260 }}
            >
              <picture>
                <source srcSet={ach.image} type="image/webp" />
                <img
                  src={ach.fallback}
                  alt={ach.title}
                  loading="lazy"
                  className="mx-auto h-24 w-24 object-cover rounded-full mb-4 border-4 border-blue-200 shadow"
                />
              </picture>
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{ach.count}</h3>
              <p className="text-lg text-white drop-shadow">{ach.label}</p>
              <div className="mt-2 text-base font-medium text-white drop-shadow">{ach.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow hover:from-cyan-500 hover:to-blue-500 transition"
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(current.image, current.title)}
          >
            View Highlight
          </motion.button>
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
