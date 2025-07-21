import React from 'react';

export default function ImageModal({ isOpen, onClose, imageUrl, name }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto text-center">
        <h2 className="text-xl font-bold mb-4 text-green-700">{name}</h2>
        <img
          src={imageUrl}
          alt={name}
          className="max-w-[600px] max-h-[400px] w-full h-auto mx-auto rounded shadow-lg"
        />
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}
