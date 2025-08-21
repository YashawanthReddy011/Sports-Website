import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

const imageMap = {
  SAMITH: '/images/result/r1.jpg',
  ANVITHA: '/images/result/r2.jpg',
  YUVARAJ: '/images/result/r3.jpg',
  AISHWARYA: '/images/result/r4.jpg',
  RAKSHITHA: '/images/result/r5.jpg',
  "K KISHAN SHETTY": '/images/result/r6.jpg',
  "RAKSHITH KUMAR": '/images/result/r7.jpg',
  PRAMILA: '/images/result/r8.jpg',
  PRAJNA: '/images/result/r9.jpg',
  DEEPIKA: '/images/result/r10.jpg',
  "MEGARAJA N MOOLYA": '/images/result/r15.jpg',
  HARSHITH: '/images/result/r16.jpg',
};

export default function Results() {
  const [selectedName, setSelectedName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  const handleNameClick = (name) => {
    if (imageMap[name]) {
      setSelectedName(name);
      setModalOpen(true);
    }
  };

  const results = [
    { name: "SAMITH", event: "3km", medal: "1st" },
    { name: "SAMITH", event: "800mtr", medal: "1st" },
    { name: "ANVITHA", event: "100mtr", medal: "1st" },
    { name: "ANVITHA", event: "200mtr", medal: "1st" },
    { name: "ANVITHA", event: "Longjump", medal: "1st" },
    { name: "ANVITHA", event: "4*100mtr Relay", medal: "1st" },
    { name: "YUVARAJ", event: "400mtr", medal: "1st" },
    { name: "YUVARAJ", event: "4*400mtr Relay", medal: "1st" },
    { name: "AISHWARYA", event: "Shotput", medal: "1st" },
    { name: "AISHWARYA", event: "Discus throw", medal: "1st" },
    { name: "AISHWARYA", event: "4*100mtr Relay", medal: "1st" },
    { name: "RAKSHITHA", event: "4*100mtr Relay", medal: "1st" },
    { name: "K KISHAN SHETTY", event: "200mtr", medal: "1st" },
    { name: "K KISHAN SHETTY", event: "4*100mtr Relay", medal: "1st" },
    { name: "K KISHAN SHETTY", event: "High jump", medal: "2nd" },
    { name: "RAKSHITH KUMAR", event: "100mtr", medal: "1st" },
    { name: "RAKSHITH KUMAR", event: "4*100mtr Relay", medal: "1st" },
    { name: "PRAMILA", event: "400mtr", medal: "1st" },
    { name: "PRAMILA", event: "4*100mtr Relay", medal: "1st" },
    { name: "PRAMILA", event: "4*400mtr Relay", medal: "1st" },
    { name: "PRAJNA", event: "800mtr", medal: "1st" },
    { name: "PRAJNA", event: "4*400mtr Relay", medal: "1st" },
    { name: "DEEPIKA", event: "1k Marathon", medal: "2nd" },
    { name: "DEEPIKA", event: "1500mtr", medal: "2nd" },
    { name: "DEEPIKA", event: "4*400mtr Relay", medal: "1st" },
    { name: "MEGARAJA N MOOLYA", event: "YOGA", medal: "1st" },
    { name: "HARSHITH", event: "CHESS", medal: "1st" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-cyan-100 bg-cover bg-center bg-no-repeat p-8"
      style={{
        backgroundImage: `url('/images/bg-background.jpg')`,
        backgroundColor: '#283d6bff'
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-700 via-yellow-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
        🏆 Final Results Table
      </h2>
      <p className="text-center text-lg mb-8 font-semibold text-blue-900 bg-white/80 rounded-xl px-4 py-2 inline-block shadow">
        Click any <span className="text-pink-600 font-bold">name</span> or <span className="text-blue-600 font-bold">arrow</span> to view the winner's photo!
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-xl rounded-2xl bg-white/90">
          <thead>
            <tr className="bg-gradient-to-r from-blue-200 via-yellow-100 to-cyan-100 text-blue-900">
              <th className="px-4 py-3 text-left font-bold">Name</th>
              <th className="px-4 py-3 text-left font-bold">Event</th>
              <th className="px-4 py-3 text-left font-bold">Medal</th>
              <th className="px-4 py-3 text-center font-bold">Move</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={index} className="even:bg-blue-50 odd:bg-yellow-50 hover:bg-cyan-50 transition">
                <td
                  className="px-4 py-2 text-pink-700 font-semibold cursor-pointer hover:underline"
                  onClick={() => handleNameClick(item.name)}
                >
                  {item.name}
                </td>
                <td className="px-4 py-2">{item.event}</td>
                <td className="px-4 py-2">
                  <span className={
                    item.medal === "1st"
                      ? "bg-yellow-300 text-yellow-900 px-2 py-1 rounded font-bold"
                      : "bg-gray-200 text-gray-700 px-2 py-1 rounded font-semibold"
                  }>
                    {item.medal}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">
                  {imageMap[item.name] && (
                    <button
                      className="text-2xl text-blue-500 hover:text-orange-500 transition-colors"
                      onClick={() => handleNameClick(item.name)}
                      aria-label="Open image"
                    >
                      &rarr;
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={imageMap[selectedName]}
        name={selectedName}
      />
    </div>
  );
}
