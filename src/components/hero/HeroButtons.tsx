"use client";

import Button from "@/components/ui/Button";

export default function HeroButtons() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Bouton Principal de conversion avec effet gbis-shine */}
      <div className="gbis-shine rounded-xl">
        <Button
          type="button"
          onClick={scrollToContact}
          className="w-full bg-[#20C96B] font-bold text-[#102F50] shadow-lg shadow-[#20C96B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1DBA63] hover:shadow-xl hover:shadow-[#20C96B]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20C96B] focus-visible:ring-offset-2 sm:w-auto"
        >
          Voir une démonstration
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Button>
      </div>

      {/* Bouton Secondaire d'exploration */}
      <Button
        type="button"
        variant="secondary"
        onClick={scrollToSolutions}
        className="w-full border border-[#102F50]/15 bg-white/70 font-semibold text-[#102F50] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#102F50]/25 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102F50] focus-visible:ring-offset-2 sm:w-auto"
      >
        Découvrir nos solutions
      </Button>
    </div>
  );
}