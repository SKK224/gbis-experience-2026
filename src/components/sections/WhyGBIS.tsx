import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const advantages = [
  {
    number: "01",
    title: "Solutions adaptées au contexte africain",
    description:
      "Nous concevons des logiciels pensés pour les réalités opérationnelles des entreprises, écoles et institutions africaines.",
  },
  {
    number: "02",
    title: "Technologies modernes et évolutives",
    description:
      "Nos solutions utilisent des technologies fiables afin de garantir performance, sécurité et capacité d’évolution.",
  },
  {
    number: "03",
    title: "Accompagnement de bout en bout",
    description:
      "Nous accompagnons chaque organisation depuis l’analyse du besoin jusqu’au déploiement, à la formation et au suivi.",
  },
];

const indicators = [
  {
    value: "4",
    label: "solutions numériques",
    description: "SchoolFlow, ClientFlow, HRFlow et Insight BI.",
  },
  {
    value: "100 %",
    label: "orienté besoins métiers",
    description: "Chaque solution part d’un problème opérationnel concret.",
  },
  {
    value: "24/7",
    label: "accès aux plateformes",
    description: "Des outils disponibles en ligne selon les infrastructures.",
  },
];

export default function WhyGBIS() {
  return (
    <section
      id="pourquoi-gbis"
      className="relative isolate overflow-hidden bg-[#081C2F] py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[440px] w-[440px] rounded-full bg-[#20C96B]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#163B61]/40 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="gbis-grid-background pointer-events-none absolute inset-0 opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Pourquoi choisir GBIS ?"
          subtitle="Nous combinons expertise métier, innovation technologique et accompagnement stratégique pour construire des solutions réellement utiles."
          theme="dark"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <Card
              key={advantage.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] text-white shadow-none backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#20C96B]/35 hover:bg-white/[0.09] hover:shadow-2xl hover:shadow-black/20"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#20C96B]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.3em] text-[#20C96B]">
                    {advantage.number}
                  </span>

                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#20C96B]/30 group-hover:bg-[#20C96B]/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#20C96B] transition-transform duration-300 group-hover:scale-150" />
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold leading-tight text-white">
                  {advantage.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {advantage.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#20C96B]">
                  <span className="h-px w-8 bg-[#20C96B]/60 transition-all duration-300 group-hover:w-14" />
                  Approche GBIS
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-md">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {indicators.map((indicator) => (
              <article
                key={indicator.label}
                className="group p-8 transition-colors duration-300 hover:bg-white/[0.04] lg:p-10"
              >
                <div className="flex items-end gap-3">
                  <p className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                    {indicator.value}
                  </p>

                  <span className="mb-2 h-2.5 w-2.5 rounded-full bg-[#20C96B] transition-transform duration-300 group-hover:scale-150" />
                </div>

                <p className="mt-4 font-semibold text-white">
                  {indicator.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {indicator.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-[#20C96B]/20 bg-[#20C96B]/10 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#20C96B]">
              Notre engagement
            </p>

            <p className="mt-2 max-w-2xl text-lg font-semibold leading-7 text-white">
              Construire des outils numériques utiles, accessibles et capables
              d’évoluer avec les organisations africaines.
            </p>
          </div>

          <div className="shrink-0 rounded-full border border-[#20C96B]/25 bg-[#081C2F]/50 px-5 py-3 text-sm font-semibold text-white">
            Concevoir · Déployer · Accompagner
          </div>
        </div>
      </div>
    </section>
  );
}