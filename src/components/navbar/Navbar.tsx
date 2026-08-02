"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Solutions", href: "#solutions" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Méthode", href: "#methode" },
  { label: "À propos", href: "#apropos" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#102F50]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          aria-label="Accueil GBIS"
          className="group relative flex shrink-0 items-center"
        >
          <div className="relative h-12 w-44 sm:h-14 sm:w-52">
            <Image
              src="/brand/GBIS-logo-horizontal-couleur.svg"
              alt="GBIS — Guinea Business Innovation Solutions"
              fill
              priority
              sizes="208px"
              className="object-contain object-left transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <span
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-2xl bg-[#20C96B]/0 blur-xl transition-all duration-500 group-hover:bg-[#20C96B]/10"
          />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-semibold text-[#102F50] transition-colors duration-300 hover:text-[#20C96B]"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#20C96B] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#20C96B] px-6 py-3 text-sm font-bold text-[#102F50] shadow-lg shadow-[#20C96B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1DBA63] hover:shadow-xl hover:shadow-[#20C96B]/30 focus:outline-none focus:ring-2 focus:ring-[#20C96B] focus:ring-offset-2"
          >
            Demander une démo
          </a>
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen
              ? "Fermer le menu de navigation"
              : "Ouvrir le menu de navigation"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#102F50]/10 bg-white text-[#102F50] transition hover:border-[#20C96B]/40 hover:bg-[#20C96B]/5 lg:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[18px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#102F50]/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="mx-auto flex max-w-[1600px] flex-col px-4 py-5 sm:px-6"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-[#102F50] transition hover:bg-[#20C96B]/10 hover:text-[#168D4C]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#20C96B] px-6 py-3 text-sm font-bold text-[#102F50] transition hover:bg-[#1DBA63]"
          >
            Demander une démo
          </a>
        </nav>
      </div>
    </header>
  );
}