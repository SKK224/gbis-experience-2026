import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "primary" | "success";
};

export default function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const variants = {
    primary:
      "border-blue-200 bg-blue-50 text-blue-700",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm ${variants[variant]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current animate-pulse" />

      {children}
    </span>
  );
}