import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.cookingsurface.com/wp-content/uploads/2023/10/video-principal-cooking-masterchef.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
        {/* Hauptüberschrift */}
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-white">
          Die erste Kochplatte <br />
          <span className="text-white font-bold">100% unsichtbare Induktion</span>
        </h2>
        
        {/* Unterüberschrift */}
        <h4 className="sm:text-2xl font-light text-white">
          MAN SIEHT ES NICHT, MAN LEBT ES.
        </h4>
        
        {/* Button */}
        <div>
  <a
    href="#beratung"
    className="inline-block px-6 sm:px-8 py-3  bg-[#D2006D] hover:bg-[#B6005B] text-white transition-all rounded-md shadow-md transition duration-300"
  >
    Entdecken Sie die Zukunft der Induktion
  </a>
</div>


        {/* Bild (Pfeil nach unten) */}
        <div className="absolute top-60">
          <a href="#produkte">
            <img
              src="https://www.cookingsurface.com/wp-content/uploads/2023/10/flecha-abajo-cooking-surface2-unscreen.gif"
              alt="Pfeil nach unten"
              className="w-32 h-32 mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
