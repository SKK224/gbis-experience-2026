type SectionTitleProps = {
  title: string;
  subtitle: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  theme = "light",
  align = "center",
}: SectionTitleProps) {
  const titleColor =
    theme === "dark"
      ? "text-white"
      : "text-[#102F50]";

  const subtitleColor =
    theme === "dark"
      ? "text-slate-300"
      : "text-slate-600";

  const badgeStyle =
    theme === "dark"
      ? "bg-white/10 border-white/20 text-white"
      : "bg-[#20C96B]/10 border-[#20C96B]/20 text-[#102F50]";

  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignment}`}
    >
      {/* Badge */}
      <div
        className={`animate-gbis-fade-up inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur ${badgeStyle}`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#20C96B]" />

        GBIS Experience 2026
      </div>

      {/* Titre */}
      <h2
        className={`animate-gbis-fade-up animation-delay-200 mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl ${titleColor}`}
      >
        {title}
      </h2>

      {/* Séparateur */}
      <div className="animate-gbis-fade-up animation-delay-300 mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#163B61] to-[#20C96B]" />

      {/* Description */}
      <p
        className={`animate-gbis-fade-up animation-delay-500 mt-6 max-w-2xl text-lg leading-8 ${subtitleColor}`}
      >
        {subtitle}
      </p>
    </div>
  );
}