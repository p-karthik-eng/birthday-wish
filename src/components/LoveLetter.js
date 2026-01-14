"use client";
import TypeWriterEffect from "react-typewriter-effect";

export default function LoveLetter() {
  return (
    <div className="bg-[#fffaf3] p-6 rounded-lg shadow-md border border-pink-200 max-w-sm mx-auto">
      <TypeWriterEffect
        textStyle={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "22px",
          color: "#9d174d",
          textAlign: "left",
          lineHeight: "34px",
          whiteSpace: "pre-line",
        }}
        startDelay={300}
        cursorColor="#9d174d"
        text={`My dearest Deepu,

You are my smile on the hardest days,
my calm in chaos,
and my forever safe place.

Every heartbeat of mine whispers
how lucky I am to have you.

When we make love
It's more to me than just everthing in world 
I want you to know how much I care
When we make love
Oh, it's such a precious time
We share our hearts, our souls and our minds
When we make love

Happy Birthday, my love 🎂❤️

Forever yours,
— Karthik`}
        typeSpeed={40}
      />
    </div>
  );
}
