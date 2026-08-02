import type { HTMLAttributes, ReactNode } from "react";

type DashboardGridColumns = 1 | 2 | 3 | 4;

type DashboardGridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  columns?: DashboardGridColumns;
};

export default function DashboardGrid({
  children,
  columns = 2,
  className = "",
  ...props
}: DashboardGridProps) {
  const columnClasses: Record<DashboardGridColumns, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 xl:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={`grid min-w-0 gap-4 ${columnClasses[columns]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}