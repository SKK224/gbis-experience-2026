import SectionTitle from "@/components/ui/SectionTitle";
import SolutionCard from "@/components/ui/SolutionCard";

const solutions = [
  {
    icon: "🎓",
    title: "SchoolFlow",
    description:
      "Une plateforme moderne pour gérer les établissements scolaires.",
    features: [
      "Gestion des élèves",
      "Notes et résultats",
      "Présences",
      "Paiements",
    ],
    previewType: "school" as const,
  },
  {
    icon: "👥",
    title: "ClientFlow",
    description:
      "Centralisez vos clients et améliorez votre relation commerciale.",
    features: [
      "Gestion des prospects",
      "Suivi commercial",
      "Historique client",
      "Facturation",
    ],
    previewType: "client" as const,
  },
  {
    icon: "💼",
    title: "HRFlow",
    description:
      "Simplifiez la gestion quotidienne de vos ressources humaines.",
    features: [
      "Gestion des employés",
      "Congés",
      "Présences",
      "Évaluations",
    ],
    previewType: "hr" as const,
  },
  {
    icon: "📊",
    title: "Insight BI",
    description:
      "Transformez vos données en indicateurs utiles pour vos décisions.",
    features: [
      "Tableaux de bord",
      "Rapports",
      "KPI",
      "Analyse des données",
    ],
    previewType: "analytics" as const,
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 gbis-grid-background opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Nos solutions"
          subtitle="Des logiciels modernes conçus pour accélérer la transformation numérique des entreprises, des écoles et des institutions africaines."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}