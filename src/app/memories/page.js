"use client";
import MusicPlayer from "../../components/MusicPlayer";

const photos = Array.from(
  { length: 25 },
  (_, i) => `/photo${i + 1}.jpeg`
);

export default function Memories() {
  return (
    <div className="min-h-screen bg-pink-100 px-4 py-10">
      <MusicPlayer />

      <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Our Memories 📸
      </h1>

      {/* 📸 Responsive Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
