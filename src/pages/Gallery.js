import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../components/ImageModal'; // make sure this path is correct

export default function Gallery() {
  

  const images = [
    { src: "/images/im25.jpg", title: "Discipline + determination + dedication = success" },
    { src: "/images/im1.jpg", title: "2006-2007, 30th state level inter polytechnic sports meet" },
    { src: "/images/im2.jpg", title: "2009-2010, 33rd state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Manikantan" },
    { src: "/images/im3.jpg", title: "2010-2011 34th state level inter polytechnic sports meet\n@ Davanagere\nunder the captaincy of Jithesh" },
    { src: "/images/im4.jpg", title: "2011-2012 35th state level inter polytechnic sports meet\n@ Chikkodi\nunder the captaincy of Devraj" },
    { src: "/images/im5.jpg", title: "2012-2013 36th state level inter polytechnic sports meet\n@ Tumkur\nunder the captaincy of Ashok" },
    { src: "/images/im6.jpg", title: "2013-2014 37th state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Anitha" },
    { src: "/images/im7.jpg", title: "2014-2015 38th state level inter polytechnic sports meet\n@ Chikkballapura\nunder the captaincy of Darshan" },
    { src: "/images/im8.jpg", title: "2015-2016 39th state level inter polytechnic sports meet\n@ Karkala\nunder the captaincy of Jeevan" },
    { src: "/images/im9.jpg", title: "2016-2017 40th state level inter polytechnic sports meet\n@ Ramnagar\nunder the captaincy of Jeevan" },
    { src: "/images/im10.jpg", title: "2017-2018 41st state level inter polytechnic sports meet\n@ Bangalore\nunder the captaincy of Kaushik" },
    { src: "/images/im11.jpg", title: "2018-2019 42nd state level inter polytechnic sports meet\n@ Hasan\nunder the captaincy of Shivaraj" },
    { src: "/images/im12.jpg", title: "2019-2020 43rd state level inter polytechnic sports meet\n@ Bagalkote\nunder the captaincy of Vishwa" },
    { src: "/images/im13.jpg", title: "2023-2024 44th state level inter polytechnic sports meet\n@ Mysore\nunder the captaincy of Abhishek Miranda" },
    { src: "/images/im14.jpg", title: "2024-2025 45th state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Samith" },
    { src: "/images/im15.jpg", title: "Photo 16" },
    { src: "/images/im16.jpg", title: "College sports meet" },
    { src: "/images/im17.jpg", title: "Photo 18" },
    { src: "/images/im18.jpg", title: "Kpt sports family" },
    { src: "/images/im19.jpg", title: "Photo 20" },
    { src: "/images/im20.jpg", title: "Photo 21" },
    { src: "/images/im21.jpg", title: "Photo 22" },
    { src: "/images/im22.jpg", title: "Photo 23" },
    { src: "/images/im23.jpg", title: "Ayudha Pooja in college" },
  ];

  const [highlighted, setHighlighted] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="p-8 min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-cyan-100 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/bg-background.jpg')`,
        backgroundColor: '#b16048ff',
      }}
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-700 via-cyan-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
        Gallery
      </h2>

      <div className="marquee-container text-x1 mb-12 font-semibold text-cyan-800 bg-white/80 rounded-xl px-4 py-2 shadow">
  <span className="marquee-text">
    📸 More images from friends coming soon! Stay tuned for new memories and moments. &nbsp;&nbsp;&nbsp;
   
 
  </span>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {images.map((item, index) => (
          <div
            key={index}
            className={`bg-white/95 rounded-3xl shadow-2xl hover:shadow-pink-200 transition duration-300 flex flex-col relative border-2 ${
              highlighted === index
                ? 'border-pink-400 ring-4 ring-cyan-300 ring-offset-2 scale-105 z-10'
                : 'border-transparent'
            }`}
          >
            <div className="relative group">
              <img
                src={item.src}
                alt={item.title}
                onClick={() => openImage(index)}
                className="w-full h-64 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <button
                className="absolute top-4 right-4 text-3xl text-pink-400 hover:text-cyan-500 transition-colors z-10 bg-white/80 rounded-full p-1 shadow"
                onMouseEnter={() => setHighlighted(index)}
                onMouseLeave={() => setHighlighted(null)}
                onClick={() => setHighlighted(index)}
              >
                <span className="drop-shadow-lg">&rarr;</span>
              </button>
            </div>
            <div className="p-4 text-center font-semibold text-blue-900 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-b-3xl min-h-[4.5rem] flex items-center justify-center text-base md:text-lg">
              {item.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        image={selectedIndex !== null ? images[selectedIndex] : null}
        onClose={closeImage}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
}
