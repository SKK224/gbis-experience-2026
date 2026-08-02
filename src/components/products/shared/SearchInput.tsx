import type { InputHTMLAttributes, ReactNode } from "react";

type SearchInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  icon?: ReactNode;
  containerClassName?: string;
};

export default function SearchInput({
  icon,
  className = "",
  containerClassName = "",
  placeholder = "Rechercher...",
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
        {icon ?? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <input
        type="search"
        placeholder={placeholder}
        className={`h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#20C96B] focus:ring-2 focus:ring-[#20C96B]/20 disabled:cursor-not-allowed disabled:bg-slate-100 ${className}`}
        {...props}
      />
    </div>
  );
}