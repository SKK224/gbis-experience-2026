const stats = [
  {
    title: "Simple",
    description:
      "Des outils modernes et faciles à prendre en main au quotidien.",
  },
  {
    title: "Fiable",
    description:
      "Des solutions sécurisées et conçues pour accompagner durablement votre organisation.",
  },
  {
    title: "Évolutif",
    description:
      "Une infrastructure modulaire qui grandit avec vos besoins.",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid gap-8 border-t border-[#102F50]/10 pt-10 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <article
          key={stat.title}
          className="group relative min-w-0 border-l border-[#102F50]/10 pl-5 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-5"
        >
          {/* En-tête de l'indicateur avec puce numérotée active */}
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#20C96B]/12 text-xs font-bold text-[#102F50] transition-all duration-300 group-hover:bg-[#20C96B]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong className="text-base font-bold text-[#102F50] transition-colors duration-300 group-hover:text-[#168D4C]">
              {stat.title}
            </strong>
          </div>

          {/* Corps descriptif de la statistique */}
          <p className="text-sm leading-6 text-slate-500">
            {stat.description}
          </p>
        </article>
      ))}
    </div>
  );
}