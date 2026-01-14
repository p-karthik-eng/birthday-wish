"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fee2e2] flex flex-col items-center justify-center p-4">
      {/* Play Music Button (Positioned top-right like the image) */}
      <div className="fixed top-6 right-6 scale-90">
        
      </div>

      <div className="text-center w-full max-w-2xl">
        {/* Main Heading - Forced to one line */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#4a4a4a] whitespace-nowrap mb-2">
          Happy Birthday <span className="text-[#d946ef]">Deepu</span> 🎂
        </h1>

        {/* Gray Sub-message */}
        <p className="text-gray-500 text-sm md:text-base mb-10">
          Your personalized message goes here 💖
        </p>

        {/* Gradient Birthday Text */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 via-pink-400 to-pink-600 bg-clip-text text-transparent mb-6">
          🎉 It's Your Birthday! 🎉
        </h2>

        {/* Surprise Section */}
        <div className="mb-10">
          <p className="font-bold text-[#be185d] text-lg">
            ❤️ Ready for your surprise! ❤️
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
            Something magical is about to unfold
          </p>
        </div>

        {/* Let's Celebrate Button */}
        <button
          onClick={() => router.push("/celebrate")}
          className="px-10 py-3 bg-[#e11d48] text-white font-semibold rounded-full shadow-md hover:bg-[#be185d] transition-all flex items-center gap-2 mx-auto"
        >
          🎁 Let's Celebrate
        </button>
      </div>
    </div>
  );
}