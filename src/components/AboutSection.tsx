import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "<strong>Ästhetik und Design</strong>: Cooking Surface passt sich dem Trend an, Oberflächen zu integrieren und Freiräume zu schaffen, um Ihre Küche modern und funktional zu gestalten.",
    "<strong>Energieeffizienz</strong>: Profitieren Sie von den Vorteilen der Induktionstechnologie, die den Energieverbrauch senkt und gleichzeitig Kochzeiten reduziert – ideal für moderne Haushalte.",
    "<strong>Multifunktionalität</strong>: Nutzen Sie den maximalen Arbeitsbereich, indem Sie das Induktionskochfeld elegant in die Arbeitsplatte integrieren, was Platz spart und Ihre Küche optimiert.",
    "<strong>Langfristige Garantie</strong>: Wir bieten eine 5-jährige Garantie auf die Induktionstechnologie und 25 Jahre auf die hochwertige Porzellan-Arbeitsplatte, damit Sie auf Qualität vertrauen können.",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/WpyzHNNCIJE?autoplay=1&mute=1"
              title="Cooking Surface Induktionskochfeld Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-4xl text-[#B6005B] font-light mb-6 inline-block">Warum Cooking Surface Induktionskochfelder wählen?</h2>
            <p className=" text-gray mb-8">
              Cooking Surface bietet innovative Induktionskochfelder, die modernes Design mit hoher Energieeffizienz kombinieren. Perfekt für anspruchsvolle Küchen, die Funktionalität und Stil vereinen.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3  text-gray">
                  <Check className="text-primary" />
                  <span dangerouslySetInnerHTML={{ __html: benefit }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};



