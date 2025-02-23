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
      quote: "Wir haben uns für das Basaltina Smoke entschieden und es war die beste Wahl für unsere Küche! Die Oberfläche fühlt sich so natürlich an und das Design passt perfekt zu unserem modernen Stil. Es sieht nicht nur toll aus, sondern ist auch pflegeleicht – wir lieben es!",
      product: "Basaltina Smoke",
      image: "/images/basaltina_smoke.jpg",
    },
    {
      id: 2,
      name: "Franziska",
      role: "Selbstständige",
      quote: "Das Serena-Material hat wirklich mein Home Office aufgewertet. Die warme, elegante Optik lässt meinen Raum so viel einladender wirken. Es ist widerstandsfähig und pflegeleicht, was mir besonders in meinem stressigen Arbeitsalltag sehr entgegenkommt. Ich bin absolut begeistert!",
      product: "Serena",
      image: "/images/serena.jpg",
    },
    {
      id: 3,
      name: "Peter",
      role: "Restaurantchef",
      quote: "Für unsere Küche haben wir die Piasentina Mud-Platten gewählt, und sie sind einfach top. Sie sind nicht nur optisch ein Highlight, sondern halten auch jeder Belastung stand. Das Material ist robust und extrem pflegeleicht, was uns in einem schnelllebigen Restaurantalltag sehr hilft.",
      product: "Piasentina Mud",
      image: "/images/piasentina_mud.jpg",
    },
    {
      id: 4,
      name: "Julia und Marco",
      role: "Junges Paar",
      quote: "Wir haben uns für Pirenei Ecru entschieden und sind einfach hin und weg. Es passt so perfekt zu unserer modernen Küche. Das Beste ist, dass es extrem pflegeleicht ist und immer noch so gut aussieht wie am ersten Tag. Die FullBody3D-Technologie macht den Unterschied – es fühlt sich an, als wäre es direkt aus der Natur.",
      product: "Pirenei Ecru",
      image: "/images/pirenei_ecru.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#f4f4f4]" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16 ">Referenzen</h2>
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
                <div className="bg-white p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-black">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
