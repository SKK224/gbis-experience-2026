import type { ReactNode } from "react";
import EmptyState from "@/components/products/shared/EmptyState";

export type DataTableColumn<T> = {
  key: keyof T | string;
  label: string;
  className?: string;
  render?: (item: T, index: number) => ReactNode;
};

type DataTableProps<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  emptyMessage?: string;
  emptyDescription?: string;
  emptyAction?: ReactNode;
  getRowKey: (item: T, index: number) => string | number;
  embedded?: boolean;
};

export default function DataTable<T>({
  columns,
  data,
  emptyMessage = "Aucune donnée disponible.",
  emptyDescription = "Les informations apparaîtront ici dès qu’elles seront disponibles.",
  emptyAction,
  getRowKey,
  embedded = false,
}: DataTableProps<T>) {
  const containerClasses = embedded
    ? "w-full overflow-x-auto"
    : "w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm";

  return (
    <div className={containerClasses}>
      <table className="w-full min-w-[600px] border-collapse text-left text-sm text-slate-600">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {columns.map((column, index) => (
              <th
                key={String(column.key) + index}
                className="px-6 py-3.5 font-semibold"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {data.length > 0 ? (
            data.map((item, rowIndex) => (
              <tr
                key={getRowKey(item, rowIndex)}
                className="transition hover:bg-slate-50/50"
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={String(column.key) + colIndex}
                    className={`px-6 py-4 whitespace-nowrap ${column.className || ""}`}
                  >
                    {column.render
                      ? column.render(item, rowIndex)
                      : String(item[column.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
                <EmptyState
                  title={emptyMessage}
                  description={emptyDescription}
                  action={emptyAction}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}