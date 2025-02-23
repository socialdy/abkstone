import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "<strong>Ästhetik und Design</strong>: ABKSTONE bietet eine elegante Palette, die die natürliche Schönheit von Stein, Marmor und Beton in jedes Raumkonzept integriert und so eine moderne und funktionale Gestaltung ermöglicht.",
    "<strong>Technologische Innovation</strong>: ABKSTONE nutzt kontinuierliche Investitionen in Forschung und Entwicklung, um die besten Leistungseigenschaften von Steinzeug zu maximieren und ästhetische Vielfalt zu schaffen.",
    "<strong>Vielseitigkeit</strong>: Die großen, modularen Platten von ABKSTONE bieten unzählige Möglichkeiten für die Gestaltung von Böden, Wänden und Oberflächen in modernen Architekturen und Innenräumen.",
    "<strong>Langfristige Qualität</strong>: ABKSTONE garantiert langlebige Produkte, die resistent gegen Kratzer, Flecken, Säuren und hohe Temperaturen sind, was sie zur perfekten Wahl für anspruchsvolle Anwendungen macht.",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/3WLf6v3pXQY?autoplay=1&mute=1&embeds_referring_euri=https%3A%2F%2Fwww.abkstone.com%2F&source_ve_path=OTY3MTQ"
              title="ABKSTONE Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className=" mb-6 inline-block">Warum ABKSTONE wählen?</h2>
            <p className=" mb-8">
              ABKSTONE bietet innovative Produkte, die modernste Technologie mit der natürlichen Schönheit von Stein kombinieren. Ideal für anspruchsvolle Architekturen und Innenräume, die Funktionalität und Stil vereinen.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 ">
                  <Check className="" />
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
