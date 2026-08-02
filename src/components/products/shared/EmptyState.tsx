import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#20C96B]">
        {icon ?? (
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-[#20C96B]"
          />
        )}
      </div>

      <h4 className="mt-4 text-base font-semibold text-[#102F50]">
        {title}
      </h4>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}