import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 dark:bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-24 px-10 bg-white dark:bg-black text-center sm:text-left">

        {/* ❤️ Realistic Heart Symbol */}
        <div
          className="mb-8 text-7xl animate-heartbeat select-none"
          style={{
            background: "linear-gradient(145deg, #ff4d6d, #ff1f4b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(255, 77, 109, 0.6)",
          }}
        >
          ❤
        </div>

        {/* 🎉 Heading */}
        <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-pink-600 dark:text-pink-400">
          A Small Birthday Wish  
          <br /> From My Heart 💖
        </h1>

        {/* 💌 Message */}
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This isn’t just a page, it’s a feeling.  
          A little space made only for you, to remind you how special you are to me.  
          Every smile, every moment, every memory — today is all about you.
        </p>

        {/* 🎁 Button */}
        <div className="mt-10">
          <Link
            href="/deepu-birthday-forever"
            className="inline-flex h-12 items-center justify-center rounded-full bg-pink-500 px-10 text-white font-medium transition hover:bg-pink-600 shadow-lg"
          >
            Open My Heart 🎂
          </Link>
        </div>
      </main>

      {/* ❤️ Heartbeat Animation */}
      <style jsx>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.15); }
          40% { transform: scale(1); }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .animate-heartbeat {
          animation: heartbeat 1.4s infinite;
        }
      `}</style>
    </div>
  );
}
