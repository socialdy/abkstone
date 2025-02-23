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
            src="https://www.abkstone.com/video/ABKSTONE_Natural_Innovation_2021(EN).mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
