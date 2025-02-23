import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Basaltina Smoke",
    image: "/images/basaltina_smoke.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 2,
    name: "Serena",
    image: "/images/serena.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 3,
    name: "Piasentina Mud",
    image: "/images/piasentina_mud.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 4,
    name: "Pirenei Ecru",
    image: "/images/pirenei_ecru.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 5,
    name: "Pirenei Grey",
    image: "/images/pirenei_grey.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 6,
    name: "Native Ash",
    image: "/images/native_ash.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 7,
    name: "Native Red",
    image: "/images/native_red.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 8,
    name: "Vintage Stone Fog",
    image: "/images/vintage_stone_fog.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 9,
    name: "Calacatta Masterpiece",
    image: "/images/calacatta_masterpiece.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 10,
    name: "Silver Roots",
    image: "/images/silver_roots.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 11,
    name: "Statuario Supremo",
    image: "/images/statuario_supremo.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 12,
    name: "Calacatta Borghini",
    image: "/images/calacatta_borghini.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 13,
    name: "Black Passion",
    image: "/images/black_passion.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 14,
    name: "Bianco Vagli",
    image: "/images/bianco_vagli.jpg", // Ersetze dies durch das echte Bild
  },
  {
    id: 15,
    name: "Antartide",
    image: "/images/antartide.jpg", // Ersetze dies durch das echte Bild
  },
];



export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center mb-2">Paletten</h2>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Entdecken Sie unsere exklusiven Materialpaletten, die für höchste Qualität und Ästhetik stehen.
        </p>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
<div className="relative bg-white shadow-lg h-64 md:h-80">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                     <h2 className="text-white text-xl md:text-2xl font-semibold">{product.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};