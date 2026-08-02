import Card from "@/components/ui/Card";
import SolutionPreview from "@/components/ui/SolutionPreview";

type PreviewType =
  | "school"
  | "client"
  | "hr"
  | "analytics";

type SolutionCardProps = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  previewType: PreviewType;
};

export default function SolutionCard({
  icon,
  title,
  description,
  features,
  previewType,
}: SolutionCardProps) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#102F50]/10 bg-white transition-all duration-500 hover:-translate-y-3 hover:border-[#20C96B]/30 hover:shadow-2xl hover:shadow-[#102F50]/10">
      {/* Halo */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#20C96B]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Badge */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F50]/5 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20C96B]/10">
          {icon}
        </div>

        <span className="rounded-full border border-[#20C96B]/20 bg-[#20C96B]/10 px-3 py-1 text-xs font-semibold text-[#168D4C]">
          Solution
        </span>
      </div>

      {/* Titre */}
      <h3 className="text-2xl font-bold text-[#102F50] transition-colors duration-300 group-hover:text-[#168D4C]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Preview */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-[#102F50]/10 bg-[#F3F6F8] p-3">
        <SolutionPreview type={previewType} />
      </div>

      {/* Fonctionnalités */}
      <ul className="mt-8 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-slate-600"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#20C96B]/10 text-xs font-bold text-[#168D4C]">
              ✓
            </span>

            {feature}
          </li>
        ))}
      </ul>

      {/* Bouton */}
      <button
        type="button"
        className="mt-auto flex items-center gap-2 pt-8 font-semibold text-[#102F50] transition-all duration-300 group-hover:gap-4 group-hover:text-[#20C96B]"
      >
        Découvrir

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </Card>
  );
}