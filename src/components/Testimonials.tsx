import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah und Thomas",
      role: "Familienhaushalt",
      quote: "Das Cooking Surface Induktionskochfeld hat unsere Küche wirklich aufgewertet. Wir genießen die schnelle Zubereitung und die hohe Energieeffizienz. Besonders begeistert sind wir von der einfachen Bedienung und dem modernen Design, das perfekt zu unserer Küche passt.",
    },
    {
      id: 2,
      name: "Franziska",
      role: "Selbstständige, Home Office",
      quote: "Ich arbeite viel von zu Hause und das Cooking Surface ist mein täglicher Begleiter. Es spart nicht nur Energie, sondern auch Zeit. Die Heizleistung ist beeindruckend und der Platz, den es in der Küche spart, ist ein riesiger Vorteil für uns.",
    },
    {
      id: 3,
      name: "Peter",
      role: "Restaurantchef",
      quote: "Als Restaurantbesitzer ist Effizienz entscheidend. Das Cooking Surface Induktionskochfeld hilft uns, die Kochzeiten zu verkürzen und gleichzeitig den Energieverbrauch zu senken. Es ist robust, einfach zu bedienen und bietet eine hervorragende Leistung – perfekt für unsere professionelle Küche.",
    },
    {
      id: 4,
      name: "Julia und Marco",
      role: "Junges Paar",
      quote: "Wir haben das Cooking Surface Induktionskochfeld in unserer neuen Küche eingebaut und sind begeistert. Die schnelle Erwärmung der Töpfe und die einfache Reinigung sind großartig. Zudem trägt es zur Energieeinsparung bei, was uns als umweltbewusstes Paar sehr wichtig ist.",
    },
    {
      id: 5,
      name: "Lena",
      role: "Architektin",
      quote: "Als Architektin lege ich großen Wert auf Design und Funktionalität. Das Cooking Surface Induktionskochfeld überzeugt in beidem. Es integriert sich perfekt in jedes moderne Küchendesign, spart Platz und bietet dennoch hervorragende Leistung. Zudem ist es sehr pflegeleicht – ein echtes Highlight für jede Küche.",
    },
    {
      id: 6,
      name: "Markus",
      role: "Koch in einer Großküche",
      quote: "In unserer Großküche hat das Cooking Surface Induktionskochfeld einen echten Unterschied gemacht. Es bietet hohe Leistung bei gleichzeitig niedrigem Energieverbrauch. Wir können schneller arbeiten und gleichzeitig unsere Energiekosten senken. Die Qualität ist hervorragend, und das Design passt hervorragend zu unserer professionellen Küche.",
    },
  ];

  return (
    <section className="py-20 bg-[#B6005B] text-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl  text-center mb-16 ">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white/10 p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Pfeile werden auf Mobile und Tablet ausgeblendet */}
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
