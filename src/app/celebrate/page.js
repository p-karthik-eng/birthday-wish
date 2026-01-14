"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MusicPlayer from "../../components/MusicPlayer";
import ConfettiBlast from "../../components/ConfettiBlast";


export default function Celebrate() {
  const [on, setOn] = useState(false);
  const router = useRouter();

  return (
    <div className={`min-h-screen flex items-center justify-center ${on ? "bg-purple-800" : "bg-pink-100"}`}>
      <MusicPlayer />
      {on && <ConfettiBlast />}

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Let’s Celebrate 🎊
        </h2>

        {!on ? (
          <button
            onClick={() => setOn(true)}
            className="px-6 py-3 bg-yellow-400 rounded-full font-semibold"
          >
            Turn On The Lights 💡
          </button>
        ) : (
          <button
            onClick={() => router.push("/message")}
            className="px-6 py-3 bg-pink-500 text-white rounded-full"
          >
            I Have a Message For You 💌
          </button>
        )}
      </div>
    </div>
  );
}
