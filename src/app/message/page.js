"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LoveLetter = dynamic(
  () => import("../../components/LoveLetter"),
  { ssr: false }
);

export default function Message() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  const openHeart = () => {
    setOpen(true);
    setTimeout(() => setShowButton(true), 6000);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        {!open && (
          <>
            <div
              onClick={openHeart}
              className="relative w-24 h-24 bg-red-500 rotate-45 cursor-pointer animate-beat"
            >
              <div className="absolute -top-12 left-0 w-24 h-24 bg-red-500 rounded-full"></div>
              <div className="absolute top-0 -left-12 w-24 h-24 bg-red-500 rounded-full"></div>
            </div>

            <p className="mt-6 text-pink-700 font-semibold tracking-wide">
              Open my heart 💖
            </p>
          </>
        )}

        {open && (
          <>
            <LoveLetter />

            {showButton && (
              <button
                onClick={() => router.push("/memories")}
                className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-full"
              >
                View Our Memories 📸
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
