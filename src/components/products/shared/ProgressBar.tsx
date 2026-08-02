import type { HTMLAttributes } from "react";

type ProgressBarVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  value: number;
  label?: string;
  helper?: string;
  showValue?: boolean;
  variant?: ProgressBarVariant;
  size?: "sm" | "md";
  trackVariant?: "light" | "dark";
};

export default function ProgressBar({
  value,
  label,
  helper,
  showValue = true,
  variant = "primary",
  size = "md",
  trackVariant = "light",
  className = "",
  ...props
}: ProgressBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  const barClasses: Record<ProgressBarVariant, string> = {
    primary: "bg-[#20C96B]",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  const heightClasses = {
    sm: "h-1.5",
    md: "h-2.5",
  };

  const trackClasses = {
    light: "bg-slate-200",
    dark: "bg-white/20",
  };

  return (
    <div className={className} {...props}>
      {label || showValue ? (
        <div className="mb-2 flex items-center justify-between gap-4">
          {label ? (
            <span className="text-sm font-medium text-slate-600">
              {label}
            </span>
          ) : (
            <span />
          )}

          {showValue ? (
            <span className="shrink-0 text-sm font-semibold text-[#102F50]">
              {safeValue} %
            </span>
          ) : null}
        </div>
      ) : null}

      <div
        className={`w-full overflow-hidden rounded-full ${trackClasses[trackVariant]} ${heightClasses[size]}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        aria-label={label ?? "Progression"}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${barClasses[variant]}`}
          style={{ width: `${safeValue}%` }}
        />
      </div>

      {helper ? (
        <p className="mt-2 text-xs leading-5 text-slate-500">
          {helper}
        </p>
      ) : null}
    </div>
  );
}