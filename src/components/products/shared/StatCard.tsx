type StatCardProps = {
  label: string;
  value: string;
  change: string;
};

export default function StatCard({
  label,
  value,
  change,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold text-[#102F50]">
        {value}
      </p>

      <p className="mt-2 text-xs font-medium text-emerald-600">
        {change}
      </p>
    </div>
  );
}