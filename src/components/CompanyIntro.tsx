export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white" id="ueber-cooking-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">

          <img 
            src="/images/cooking-surface-logo.png" 
            alt="Foster Spa Logo" 
            className="h-12 w-auto"
          />
          
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray text-lg leading-relaxed mb-6">
          Cooking Surface setzt auf nachhaltige und umweltfreundliche Materialien, die aus der exklusiven ABK STONE Kollektion stammen. Die innovativen Produkte, wie das unsichtbare Induktionskochfeld Cooking 3.0, zeichnen sich durch eine hohe Energieeffizienz aus und reduzieren Kochzeiten, während sie Wärme sofort und konstant produzieren. Mit einem Fokus auf ökologische Technologien und niedrigem Energieverbrauch, sowie der Wiederverwendung von Wasser und Abfallstoffen, setzt Cooking Surface neue Maßstäbe in der umweltbewussten Kücheninnovation.
          </p>
        </div>
      </div>
    </section>
  );
};
