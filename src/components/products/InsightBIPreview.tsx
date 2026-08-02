"use client";

import { useMemo, useState } from "react";

import ActivityItem from "@/components/products/shared/ActivityItem";
import DashboardGrid from "@/components/products/shared/DashboardGrid";
import DataTable, {
  type DataTableColumn,
} from "@/components/products/shared/DataTable";
import ProductActionButton from "@/components/products/shared/ProductActionButton";
import ProductHeader from "@/components/products/shared/ProductHeader";
import ProgressBar from "@/components/products/shared/ProgressBar";
import SearchInput from "@/components/products/shared/SearchInput";
import SectionCard from "@/components/products/shared/SectionCard";
import SelectFilter from "@/components/products/shared/SelectFilter";
import SidebarMenu from "@/components/products/shared/SidebarMenu";
import StatCard from "@/components/products/shared/StatCard";
import StatusBadge from "@/components/products/shared/StatusBadge";

type PerformanceRow = {
  id: number;
  department: string;
  revenue: string;
  target: string;
  performance: "Excellent" | "Bon" | "À surveiller";
};

const performanceData: PerformanceRow[] = [
  {
    id: 1,
    department: "Commercial",
    revenue: "184 M GNF",
    target: "170 M GNF",
    performance: "Excellent",
  },
  {
    id: 2,
    department: "Opérations",
    revenue: "126 M GNF",
    target: "140 M GNF",
    performance: "Bon",
  },
  {
    id: 3,
    department: "Services",
    revenue: "98 M GNF",
    target: "120 M GNF",
    performance: "À surveiller",
  },
  {
    id: 4,
    department: "Formation",
    revenue: "74 M GNF",
    target: "70 M GNF",
    performance: "Excellent",
  },
];

function getPerformanceVariant(
  performance: PerformanceRow["performance"],
): "success" | "warning" | "info" {
  switch (performance) {
    case "Excellent":
      return "success";
    case "Bon":
      return "info";
    case "À surveiller":
      return "warning";
  }
}

const performanceColumns: DataTableColumn<PerformanceRow>[] = [
  {
    key: "department",
    label: "Département",
    className: "font-medium text-[#102F50]",
  },
  {
    key: "revenue",
    label: "Résultat",
  },
  {
    key: "target",
    label: "Objectif",
  },
  {
    key: "performance",
    label: "Performance",
    render: (row) => (
      <StatusBadge variant={getPerformanceVariant(row.performance)}>
        {row.performance}
      </StatusBadge>
    ),
  },
];

const monthlyRevenue = [
  { month: "Jan", value: 48 },
  { month: "Fév", value: 62 },
  { month: "Mar", value: 56 },
  { month: "Avr", value: 74 },
  { month: "Mai", value: 68 },
  { month: "Juin", value: 88 },
  { month: "Juil", value: 82 },
  { month: "Août", value: 96 },
];

export default function InsightBIPreview() {
  const [search, setSearch] = useState("");
  const [performanceFilter, setPerformanceFilter] = useState("all");

  const filteredPerformance = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return performanceData.filter((row) => {
      const matchesSearch =
        !normalizedSearch ||
        row.department.toLowerCase().includes(normalizedSearch) ||
        row.revenue.toLowerCase().includes(normalizedSearch) ||
        row.target.toLowerCase().includes(normalizedSearch) ||
        row.performance.toLowerCase().includes(normalizedSearch);

      const matchesPerformance =
        performanceFilter === "all" ||
        row.performance === performanceFilter;

      return matchesSearch && matchesPerformance;
    });
  }, [search, performanceFilter]);

  const maxRevenue = Math.max(
    ...monthlyRevenue.map((item) => item.value),
  );

  return (
    <div className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <ProductHeader
        initials="BI"
        name="Insight BI"
        description="Analyse décisionnelle et pilotage"
        status="Données actualisées"
      />

      <div className="grid min-h-[760px] lg:grid-cols-[250px_minmax(0,1fr)]">
        <SidebarMenu
          items={[
            "Vue d’ensemble",
            "Indicateurs",
            "Rapports",
            "Prévisions",
            "Départements",
            "Sources de données",
          ]}
          footerTitle="Actualisation"
          footerValue="Aujourd’hui, 14:35"
          progress={94}
        />

        <div className="flex min-w-0 flex-col gap-5 bg-[#F3F6F8] p-5 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Pilotage stratégique
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#102F50]">
                Tableau de bord exécutif
              </h3>
            </div>

            <ProductActionButton>
              Générer un rapport
            </ProductActionButton>
          </div>

          <DashboardGrid columns={4}>
            <StatCard
              label="Chiffre d’affaires"
              value="482 M"
              change="+12,4 %"
            />

            <StatCard
              label="Marge globale"
              value="31 %"
              change="+3,1 %"
            />

            <StatCard
              label="Objectifs atteints"
              value="86 %"
              change="+8,6 %"
            />

            <StatCard
              label="Prévision annuelle"
              value="5,8 Md"
              change="+14,2 %"
            />
          </DashboardGrid>

          <DashboardGrid
            columns={2}
            className="xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)]"
          >
            <SectionCard
              title="Évolution du chiffre d’affaires"
              description="Performance mensuelle consolidée"
            >
              <div className="mt-8 flex h-64 items-end gap-3 sm:gap-5">
                {monthlyRevenue.map((item) => (
                  <div
                    key={item.month}
                    className="group flex min-w-0 flex-1 flex-col items-center justify-end"
                  >
                    <div className="relative flex h-52 w-full items-end overflow-hidden rounded-t-xl bg-slate-100">
                      <div
                        className="w-full rounded-t-xl bg-gradient-to-t from-[#102F50] to-[#20C96B] transition-all duration-500 group-hover:opacity-80"
                        style={{
                          height: `${(item.value / maxRevenue) * 100}%`,
                        }}
                      />

                      <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[10px] font-bold text-[#102F50] opacity-0 transition-opacity group-hover:opacity-100">
                        {item.value} M
                      </span>
                    </div>

                    <span className="mt-3 text-xs font-medium text-slate-500">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              title="Répartition des revenus"
              description="Contribution par activité"
            >
              <div className="space-y-5">
                <ProgressBar
                  label="Solutions logicielles"
                  value={78}
                  helper="376 M GNF"
                  variant="primary"
                />

                <ProgressBar
                  label="Conseil et digitalisation"
                  value={64}
                  helper="308 M GNF"
                  variant="success"
                />

                <ProgressBar
                  label="Formation professionnelle"
                  value={42}
                  helper="202 M GNF"
                  variant="info"
                />

                <ProgressBar
                  label="Support et maintenance"
                  value={28}
                  helper="135 M GNF"
                  variant="warning"
                />
              </div>
            </SectionCard>
          </DashboardGrid>

          <SectionCard
            title="Performance par département"
            description="Comparaison des résultats avec les objectifs"
            action={
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <SearchInput
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Rechercher..."
                  aria-label="Rechercher dans les performances"
                  containerClassName="w-full sm:w-56"
                />

                <SelectFilter
                  value={performanceFilter}
                  onChange={(event) =>
                    setPerformanceFilter(event.target.value)
                  }
                  aria-label="Filtrer les performances"
                  containerClassName="w-full sm:w-44"
                  options={[
                    { value: "all", label: "Toutes les performances" },
                    { value: "Excellent", label: "Excellent" },
                    { value: "Bon", label: "Bon" },
                    { value: "À surveiller", label: "À surveiller" },
                  ]}
                />
              </div>
            }
            contentClassName="-mx-5 -mb-5"
          >
            <DataTable
              columns={performanceColumns}
              data={filteredPerformance}
              getRowKey={(row) => row.id}
              emptyMessage={
                search || performanceFilter !== "all"
                  ? "Aucun résultat ne correspond aux filtres"
                  : "Aucune donnée de performance disponible"
              }
              emptyDescription={
                search || performanceFilter !== "all"
                  ? "Modifiez la recherche ou la performance sélectionnée."
                  : "Les résultats analytiques apparaîtront ici après l’import des données."
              }
              emptyAction={
                search || performanceFilter !== "all" ? (
                  <ProductActionButton
                    variant="secondary"
                    onClick={() => {
                      setSearch("");
                      setPerformanceFilter("all");
                    }}
                  >
                    Réinitialiser les filtres
                  </ProductActionButton>
                ) : (
                  <ProductActionButton>
                    Importer des données
                  </ProductActionButton>
                )
              }
              embedded
            />
          </SectionCard>

          <DashboardGrid columns={2}>
            <SectionCard
              title="Alertes décisionnelles"
              description="Événements nécessitant une attention"
            >
              <div className="mt-2">
                <ActivityItem
                  title="Objectif commercial dépassé"
                  description="Le département commercial dépasse son objectif de 8 %."
                  time="Il y a 20 min"
                />

                <ActivityItem
                  title="Marge en progression"
                  description="La marge globale a progressé de 3,1 % ce mois."
                  time="Il y a 1 h"
                />

                <ActivityItem
                  title="Activité à surveiller"
                  description="Les services restent sous l’objectif mensuel prévu."
                  time="Il y a 3 h"
                />
              </div>
            </SectionCard>

            <SectionCard
              title="Qualité des données"
              description="Fiabilité des sources utilisées"
            >
              <div className="space-y-5">
                <ProgressBar
                  label="Données financières"
                  value={98}
                  helper="Dernière synchronisation réussie"
                  variant="success"
                />

                <ProgressBar
                  label="Données commerciales"
                  value={94}
                  helper="2 éléments restent à valider"
                  variant="primary"
                />

                <ProgressBar
                  label="Données opérationnelles"
                  value={87}
                  helper="Mise à jour en cours"
                  variant="info"
                />
              </div>
            </SectionCard>
          </DashboardGrid>
        </div>
      </div>
    </div>
  );
}