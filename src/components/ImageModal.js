import React from 'react';

export default function ImageModal({
  isOpen = true, // fallback for backward compatibility
  image = null,
  imageUrl,
  name,
  onClose,
  onPrev,
  onNext
}) {
  // Support both formats
  const imgSrc = image ? image.src : imageUrl;
  const imgTitle = image ? image.title : name;

  if (!imgSrc || (!image && !isOpen)) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button
          className="absolute left-4 text-white text-4xl font-bold hover:text-cyan-300"
          onClick={onPrev}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Image Viewer */}
      <div className="bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto text-center shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-green-700">{imgTitle}</h2>
        <img
          src={imgSrc}
          alt={imgTitle}
          className="max-w-[600px] max-h-[400px] w-full h-auto mx-auto rounded shadow-lg"
        />
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Close
        </button>
      </div>

      {/* Next Button */}
      {onNext && (
        <button
          className="absolute right-4 text-white text-4xl font-bold hover:text-cyan-300"
          onClick={onNext}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  );
}
