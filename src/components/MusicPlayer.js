"use client";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={toggle}
        className="px-4 py-2 bg-white rounded-full shadow text-pink-600 font-semibold"
      >
        {playing ? "Pause 🎵" : "Play 🎶"}
      </button>
    </div>
  );
}
