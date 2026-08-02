import type { HTMLAttributes, ReactNode } from "react";

type SectionCardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
};

export default function SectionCard({
  title,
  description,
  action,
  children,
  className = "",
  contentClassName = "",
  ...props
}: SectionCardProps) {
  const hasHeader = title || description || action;

  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
      {...props}
    >
      {hasHeader ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {title ? (
              <h3 className="font-semibold text-[#102F50]">
                {title}
              </h3>
            ) : null}

            {description ? (
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {description}
              </p>
            ) : null}
          </div>

          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}

      <div className={`${hasHeader ? "mt-4" : ""} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}