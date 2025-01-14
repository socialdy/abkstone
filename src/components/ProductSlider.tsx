import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "Induktionskochfelder",
    image: "/images/induktionskochfelder.jpg", // Ersetze dies durch das echte Bild
    description: "Energieeffiziente Induktionskochfelder für präzises Kochen mit schneller Hitzeentwicklung und gleichmäßiger Temperaturverteilung – ideal für Ihre moderne Küche. Mit innovativer Technologie für optimierte Energieausnutzung und eine benutzerfreundliche Steuerung für perfekte Kochergebnisse.",
  },
  {
    id: 2,
    name: "Cookware",
    image: "/images/cookware.jpg", // Ersetze dies durch das echte Bild
    description: "Unsere speziell entwickelten Kochgeschirr-Sets maximieren die Effizienz der Cooking Surface Prime. Mit innovativen Materialien und einem einzigartigen Design, das den direkten Kontakt mit der Kochfläche ermöglicht, ohne zusätzliche Abstandshalter. Perfekt für die Nutzung mit Induktionskochfeldern, um die Lebensdauer der Oberfläche zu verlängern und Überhitzung zu vermeiden.",
  },
  {
    id: 3,
    name: "Outdoor-Küche",
    image: "/images/outdoor.png", // Ersetze dies durch das tatsächliche Bild
    description: "Revolutionieren Sie Ihre Terrasse oder Ihren Garten mit einer Outdoor-Küche und dem fortschrittlichsten Induktionssystem. Verfügbar in natürlichen Oberflächen, mit integriertem Schrank, hoher Wetterbeständigkeit und anpassbaren Plattenmarkierungen. Perfekt für Kochliebhaber – drinnen und draußen."
  },   

  {
    id: 4,
    name: "Induktionskochfelder Zubehör",
    image: "/images/zubehoer.jpg", // Ersetze dies durch das echte Bild
    description: "Optimieren Sie Ihr Kocherlebnis mit den praktischen Zubehörteilen für das Cooking Surface Prime Induktionskochfeld. Mit Funktionen wie individueller Steuerung über Drehknöpfe, 9 Leistungsstufen und einem integrierten Timer bieten diese Zubehörteile volle Kontrolle und Flexibilität. Perfekt für moderne Küchen, die auf Stil und Funktionalität setzen.",
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
    <section className="py-20 bg[##f5f5f5]" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light text-center mb-12">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className="text-xl md:text-2xl mb-2">{product.name}</h3>
                      <p className="text-gray mb-4">{product.description}</p>
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