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
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
      style={{ backgroundImage: `url('/images/bg-background.jpg')`,
  backgroundColor: '#283d6bff' // fallback color
       }}
    >
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">🏆 Final Results Table(Click Any Name)</h2>
      <table className="w-full table-auto border-collapse border border-blue-500 shadow-lg rounded-lg bg-white bg-opacity-80">
        <thead className="bg-blue-200 text-orange-900">
          <tr>
            <th className="border border-blue-500 p-2">Name</th>
            <th className="border border-blue-500 p-2">Event</th>
            <th className="border border-blue-500 p-2">Medal</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td
                className="border border-red-500 p-2 text-pink-600 cursor-pointer hover:underline"
                onClick={() => handleNameClick(item.name)}
              >
                {item.name}
              </td>
              <td className="border border-red-500 p-2">{item.event}</td>
              <td className="border border-red-500 p-2">{item.medal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={imageMap[selectedName]}
        name={selectedName}
      />
    </div>
  );
}
