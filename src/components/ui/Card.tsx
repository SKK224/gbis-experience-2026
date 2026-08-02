import {
  HTMLAttributes,
  ReactNode,
} from "react";

type CardProps =
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}