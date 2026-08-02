import HRFlowPreview from "@/components/products/HRFlowPreview";
import Button from "@/components/ui/Button";

const benefits = [
  "Centraliser les dossiers des employés",
  "Suivre les présences et les congés",
  "Piloter la paie et les performances",
  "Améliorer l’organisation des ressources humaines",
];

const indicators = [
  {
    value: "248",
    label: "employés suivis",
  },
  {
    value: "96 %",
    label: "taux de présence",
  },
  {
    value: "98 %",
    label: "paie traitée",
  },
];

export default function HRFlowShowcase() {
  return (
    <section
      id="hrflow"
      className="relative isolate overflow-hidden bg-[#F3F6F8] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="gbis-grid-background pointer-events-none absolute inset-0 opacity-30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-[380px] w-[380px] rounded-full bg-[#20C96B]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full bg-[#102F50]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-gbis-fade-up inline-flex items-center gap-2 rounded-full border border-[#20C96B]/20 bg-[#20C96B]/10 px-4 py-2 text-sm font-semibold text-[#102F50]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#20C96B]" />

            Produit GBIS
          </div>

          <h2 className="animate-gbis-fade-up animation-delay-200 mt-6 text-4xl font-bold tracking-[-0.04em] text-[#102F50] sm:text-5xl lg:text-6xl">
            HRFlow
          </h2>

          <p className="animate-gbis-fade-up animation-delay-300 mt-5 text-xl font-semibold text-slate-800 sm:text-2xl">
            La gestion des ressources humaines, centralisée et simplifiée.
          </p>

          <p className="animate-gbis-fade-up animation-delay-500 mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            HRFlow aide les organisations à gérer leurs employés, les
            présences, les congés, la paie et les performances depuis une
            plateforme unique.
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="group flex items-start gap-3 rounded-2xl border border-[#102F50]/10 bg-white/80 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#20C96B]/30 hover:shadow-lg"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#20C96B]/10 text-sm font-bold text-[#168D4C] transition-colors duration-300 group-hover:bg-[#20C96B] group-hover:text-[#102F50]">
                  ✓
                </span>

                <span className="leading-6 text-slate-700">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <div className="gbis-shine rounded-xl">
              <Button
                type="button"
                className="w-full bg-[#20C96B] font-bold text-[#102F50] shadow-lg shadow-[#20C96B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1DBA63] hover:shadow-xl sm:w-auto"
              >
                Demander une démonstration
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Button>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full border border-[#102F50]/15 bg-white/80 font-semibold text-[#102F50] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#102F50]/25 hover:bg-white hover:shadow-md sm:w-auto"
            >
              Découvrir HRFlow
            </Button>
          </div>

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[#102F50]/10 bg-white/80 shadow-sm backdrop-blur">
            <div className="grid divide-y divide-[#102F50]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {indicators.map((indicator) => (
                <article
                  key={indicator.label}
                  className="group p-6 transition-colors duration-300 hover:bg-white"
                >
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-3xl font-bold text-[#102F50]">
                      {indicator.value}
                    </p>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#20C96B] transition-transform duration-300 group-hover:scale-150" />
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {indicator.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#20C96B]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#102F50]/10 blur-3xl"
          />

          <div className="relative animate-gbis-fade-up">
            <HRFlowPreview />
          </div>
        </div>
      </div>
    </section>
  );
}