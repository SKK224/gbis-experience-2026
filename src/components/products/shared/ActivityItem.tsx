import type { ReactNode } from "react";

type ActivityItemProps = {
  title: string;
  description: string;
  time: string;
  icon?: ReactNode;
};

export default function ActivityItem({
  title,
  description,
  time,
  icon,
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-b-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        {icon ?? (
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-[#20C96B]"
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-sm font-semibold text-[#102F50]">
            {title}
          </h4>

          <span className="shrink-0 text-xs text-slate-400">
            {time}
          </span>
        </div>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}