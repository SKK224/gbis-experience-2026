type PreviewType =
  | "school"
  | "client"
  | "hr"
  | "analytics";

type SolutionPreviewProps = {
  type: PreviewType;
};

const previewContent = {
  school: {
    title: "SchoolFlow",
    value: "1 248 élèves",
    badge: "En ligne",
    color: "bg-emerald-500",
    progress: 92,
    items: [
      "Présence",
      "Paiements",
      "Bulletins",
    ],
  },

  client: {
    title: "ClientFlow",
    value: "86 prospects",
    badge: "CRM",
    color: "bg-blue-500",
    progress: 76,
    items: [
      "Pipeline",
      "Devis",
      "Contrats",
    ],
  },

  hr: {
    title: "HRFlow",
    value: "156 employés",
    badge: "RH",
    color: "bg-violet-500",
    progress: 88,
    items: [
      "Présence",
      "Congés",
      "Paie",
    ],
  },

  analytics: {
    title: "Insight BI",
    value: "+24,8 %",
    badge: "Live",
    color: "bg-cyan-500",
    progress: 95,
    items: [
      "Ventes",
      "Finance",
      "KPI",
    ],
  },
};

export default function SolutionPreview({
  type,
}: SolutionPreviewProps) {
  const content = previewContent[type];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#102F50]/10 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#102F50]/10 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {content.title}
          </p>

          <p className="mt-1 text-lg font-bold text-[#102F50]">
            {content.value}
          </p>
        </div>

        <span
          className={`h-3 w-3 rounded-full ${content.color} animate-pulse`}
        />
      </div>

      {/* Progress */}
      <div className="px-4 pt-4">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Performance</span>

          <span>{content.progress}%</span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#163B61] to-[#20C96B]"
            style={{
              width: `${content.progress}%`,
            }}
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-3 p-4">
        {content.items.map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-xl bg-[#F3F6F8] px-3 py-2"
          >
            <span className="text-sm font-medium text-[#102F50]">
              {item}
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-semibold text-white ${content.color}`}
            >
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}