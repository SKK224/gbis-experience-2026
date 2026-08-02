import type { ButtonHTMLAttributes, ReactNode } from "react";

type ProductActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

export default function ProductActionButton({
  children,
  icon,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ProductActionButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variantClasses =
    variant === "primary"
      ? "bg-[#20C96B] text-[#102F50] hover:bg-[#1bb85f] focus:ring-[#20C96B]"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-300";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
    </button>
  );
}