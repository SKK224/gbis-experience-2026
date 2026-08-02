import type { HTMLAttributes, ReactNode } from "react";

type StatusBadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: StatusBadgeVariant;
};

export default function StatusBadge({
  children,
  variant = "neutral",
  className = "",
  ...props
}: StatusBadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold";

  const variantClasses: Record<StatusBadgeVariant, string> = {
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    neutral: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}