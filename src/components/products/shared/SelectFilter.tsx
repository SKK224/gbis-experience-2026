import type { SelectHTMLAttributes } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFilterProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  containerClassName?: string;
};

export default function SelectFilter({
  options,
  className = "",
  containerClassName = "",
  ...props
}: SelectFilterProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      <select
        className={`h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm text-slate-700 outline-none transition focus:border-[#20C96B] focus:ring-2 focus:ring-[#20C96B]/20 disabled:cursor-not-allowed disabled:bg-slate-100 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4"
        >
          <path
            d="m6 8 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}