import { useState } from "react";

export const Hero = () => {
  // Zustand für Mute/Unmute
  const [isMuted, setIsMuted] = useState(true);

  // Funktion zum Umschalten der Stummschaltung
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.abkstone.com/video/ABKSTONE_Natural_Innovation_2021(EN).mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mute Button */}
      <button
        id="mute-desk"
        onClick={toggleMute}
        className="absolute bottom-0 left-[8.33%] z-[8990] mb-[50px] px-[30px] py-[8px] cursor-pointer text-xs uppercase text-black border-b-2 border-[#d2006c] bg-gradient-to-b from-white/60 to-white/60
"
      >
        {isMuted ? "Entstummen" : "Stummen"}
      </button>
    </section>
  );
};
