import type { HTMLAttributes } from "react";
import ProgressBar from "@/components/products/shared/ProgressBar";

type SidebarMenuProps = HTMLAttributes<HTMLDivElement> & {
  items: string[];
  footerTitle?: string;
  footerValue?: string;
  progress?: number;
};

export default function SidebarMenu({
  items,
  footerTitle,
  footerValue,
  progress,
  className = "",
  ...props
}: SidebarMenuProps) {
  return (
    <div
      className={`flex flex-col justify-between bg-[#102F50] p-4 text-white sm:p-5 ${className}`}
      {...props}
    >
      <nav className="flex flex-col gap-1">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
              index === 0
                ? "bg-white/10 text-white"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {footerTitle || footerValue ? (
        <div className="mt-8 rounded-2xl bg-white/5 p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {footerTitle}
          </p>
          <p className="mt-1 text-base font-bold text-white">
            {footerValue}
          </p>

          {typeof progress === "number" ? (
            <ProgressBar
              value={progress}
              showValue={false}
              size="sm"
              trackVariant="dark"
              className="mt-3"
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}