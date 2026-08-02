type ProductHeaderProps = {
  initials: string;
  name: string;
  description: string;
  status?: string;
};

export default function ProductHeader({
  initials,
  name,
  description,
  status = "En ligne",
}: ProductHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#102F50] text-sm font-bold text-white">
          {initials}
        </div>

        <div>
          <p className="font-bold text-[#102F50]">{name}</p>

          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        <span className="h-2 w-2 rounded-full bg-[#20C96B]" />
        {status}
      </div>
    </div>
  );
}