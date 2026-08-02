"use client";

import Image from "next/image";

const bars = [45, 68, 52, 76, 64, 88, 72, 94];

export default function Dashboard() {
  return (
    <div className="relative animate-gbis-fade-right animation-delay-300">
      <div className="animate-gbis-float">
        {/* Structure Principale du Dashboard */}
        <div className="overflow-hidden rounded-3xl border border-[#102F50]/10 bg-white shadow-2xl shadow-[#102F50]/15">
          {/* Barre supérieure style Mac OS / SaaS app */}
          <div className="flex h-12 items-center gap-2 border-b border-[#102F50]/10 px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

            <div className="ml-3 flex items-center gap-2">
              <div className="relative h-6 w-6">
                <Image
                  src="/brand/GBIS-symbole-couleur.svg"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-[#102F50]">
                GBIS Workspace
              </span>
            </div>
          </div>

          <div className="grid min-h-[460px] grid-cols-[72px_1fr]">
            {/* Barre latérale gauche (Sidebar) */}
            <aside className="flex flex-col items-center gap-6 bg-[#102F50] py-6">
              <div className="relative h-10 w-10 animate-gbis-logo-pulse">
                <Image
                  src="/brand/GBIS-symbole-couleur.svg"
                  alt="Symbole GBIS"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              {[1, 2, 3, 4].map((item, index) => (
                <span
                  key={item}
                  className={
                    index === 0
                      ? "h-2 w-7 rounded-full bg-[#20C96B]"
                      : "h-2 w-7 rounded-full bg-white/20"
                  }
                />
              ))}
            </aside>

            {/* Contenu principal de l'application */}
            <div className="bg-[#F3F6F8] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-slate-500">Vue d’ensemble</span>
                  <h2 className="mt-1 text-xl font-bold text-[#102F50]">
                    Bienvenue sur GBIS
                  </h2>
                </div>

                {/* Badge utilisateur personnalisé */}
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#20C96B]/15 text-sm font-bold text-[#102F50]">
                  SK
                </div>
              </div>

              {/* Cartes de KPi / Métriques opérationnelles */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-[#102F50]/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs text-slate-500">Processus actifs</span>
                  <strong className="mt-3 block text-3xl font-bold text-[#102F50]">24</strong>
                  <span className="mt-2 block text-xs font-medium text-[#168D4C]">+8 % ce mois</span>
                </article>

                <article className="rounded-2xl border border-[#102F50]/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs text-slate-500">Automatisations</span>
                  <strong className="mt-3 block text-3xl font-bold text-[#102F50]">18</strong>
                  <span className="mt-2 block text-xs font-medium text-[#168D4C]">96 % réussies</span>
                </article>

                <article className="rounded-2xl border border-[#102F50]/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs text-slate-500">Rapports</span>
                  <strong className="mt-3 block text-3xl font-bold text-[#102F50]">32</strong>
                  <span className="mt-2 block text-xs font-medium text-[#163B61]">Mis à jour</span>
                </article>
              </div>

              {/* Graphique Analytics */}
              <div className="mt-6 rounded-2xl border border-[#102F50]/10 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-semibold text-[#102F50]">
                    Performance opérationnelle
                  </strong>
                  <span className="text-xs text-slate-500">6 derniers mois</span>
                </div>

                <div className="mt-8 flex h-44 items-end gap-3 border-b border-[#102F50]/10">
                  {bars.map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-[#163B61] to-[#20C96B] transition-all duration-500 hover:brightness-110"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badge Flottant Gauche — SchoolFlow */}
        <div className="absolute -left-8 top-16 hidden animate-gbis-float-small rounded-2xl border border-[#102F50]/10 bg-white p-4 shadow-xl lg:block">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image
                src="/brand/GBIS-symbole-couleur.svg"
                alt=""
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div>
              <strong className="block text-sm font-bold text-[#102F50]">SchoolFlow</strong>
              <span className="mt-0.5 block text-xs text-slate-500">Gestion scolaire</span>
            </div>
          </div>
        </div>

        {/* Badge Flottant Droit — Insight BI */}
        <div className="absolute -right-8 bottom-20 hidden animate-gbis-float-small animation-delay-500 rounded-2xl border border-[#102F50]/10 bg-white p-4 shadow-xl lg:block">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image
                src="/brand/GBIS-symbole-couleur.svg"
                alt=""
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div>
              <strong className="block text-sm font-bold text-[#102F50]">Insight BI</strong>
              <span className="mt-0.5 block text-xs text-slate-500">Analyse de données</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}