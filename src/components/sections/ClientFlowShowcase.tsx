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
import SidebarMenu from "@/components/products/shared/SidebarMenu";
import StatCard from "@/components/products/shared/StatCard";
import StatusBadge from "@/components/products/shared/StatusBadge";

const pipeline = [
  {
    stage: "Nouveaux prospects",
    count: 24,
    value: "148 M GNF",
  },
  {
    stage: "Qualification",
    count: 16,
    value: "96 M GNF",
  },
  {
    stage: "Proposition",
    count: 9,
    value: "62 M GNF",
  },
  {
    stage: "Clients",
    count: 6,
    value: "41 M GNF",
  },
];

type Prospect = {
  id: number;
  company: string;
  contact: string;
  value: string;
  status: "Nouveau" | "Qualifié" | "À relancer" | "Perdu";
};

const prospects: Prospect[] = [
  {
    id: 1,
    company: "Soguipami",
    contact: "Ibrahima Diallo",
    value: "120 M GNF",
    status: "Nouveau",
  },
  {
    id: 2,
    company: "Kaba Transport",
    contact: "Moussa Kaba",
    value: "85 M GNF",
    status: "Qualifié",
  },
  {
    id: 3,
    company: "Guinea Market",
    contact: "Aminata Camara",
    value: "65 M GNF",
    status: "À relancer",
  },
  {
    id: 4,
    company: "Conakry Services",
    contact: "Alpha Barry",
    value: "40 M GNF",
    status: "Perdu",
  },
];

function getProspectStatusVariant(
  status: Prospect["status"],
): "success" | "warning" | "danger" | "info" {
  switch (status) {
    case "Nouveau":
      return "info";
    case "Qualifié":
      return "success";
    case "À relancer":
      return "warning";
    case "Perdu":
      return "danger";
  }
}

const prospectColumns: DataTableColumn<Prospect>[] = [
  {
    key: "company",
    label: "Entreprise",
    className: "font-medium text-[#102F50]",
  },
  {
    key: "contact",
    label: "Contact",
  },
  {
    key: "value",
    label: "Valeur",
  },
  {
    key: "status",
    label: "Statut",
    render: (prospect) => (
      <StatusBadge variant={getProspectStatusVariant(prospect.status)}>
        {prospect.status}
      </StatusBadge>
    ),
  },
];

export default function ClientFlowPreview() {
  const [prospectSearch, setProspectSearch] = useState("");

  const filteredProspects = useMemo(() => {
    const normalizedSearch = prospectSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return prospects;
    }

    return prospects.filter((prospect) => {
      return (
        prospect.company.toLowerCase().includes(normalizedSearch) ||
        prospect.contact.toLowerCase().includes(normalizedSearch) ||
        prospect.value.toLowerCase().includes(normalizedSearch) ||
        prospect.status.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [prospectSearch]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <ProductHeader
        initials="CF"
        name="ClientFlow"
        description="CRM et suivi commercial"
        status="Synchronisé"
      />

      <div className="grid min-h-[520px] md:grid-cols-[180px_minmax(0,1fr)]">
        <SidebarMenu
          items={[
            "Vue d’ensemble",
            "Prospects",
            "Pipeline",
            "Clients",
            "Activités",
            "Rapports",
          ]}
          footerTitle="Objectif mensuel"
          footerValue="250 M GNF"
          progress={68}
        />

        <div className="flex min-w-0 flex-col gap-4 bg-[#F3F6F8] p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Performance commerciale
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#102F50]">
                Vue d’ensemble
              </h3>
            </div>

            <ProductActionButton>
              Ajouter un prospect
            </ProductActionButton>
          </div>

          <DashboardGrid columns={4}>
            <StatCard
              label="Prospects"
              value="86"
              change="+14 ce mois"
            />

            <StatCard
              label="Opportunités"
              value="24"
              change="12 actives"
            />

            <StatCard
              label="Conversion"
              value="18 %"
              change="+4,6 %"
            />

            <StatCard
              label="Prévision"
              value="347 M"
              change="+11,2 %"
            />
          </DashboardGrid>

          <DashboardGrid columns={2} className="xl:grid-cols-[minmax(0,1.35fr)_minmax(280px,1fr)]">
            <div className="flex flex-col gap-4">
              <SectionCard
                title="Pipeline commercial"
                description="Répartition des opportunités par étape"
              >
                <DashboardGrid columns={2} className="mt-6">
                  {pipeline.map((item, index) => (
                    <div
                      key={item.stage}
                      className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#102F50]">
                            {item.stage}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {item.count} dossiers
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-5 whitespace-nowrap text-lg font-bold text-[#102F50]">
                        {item.value}
                      </p>

                      <div className="mt-3 h-1.5 rounded-full bg-slate-200">
                        <div
                          className="h-1.5 rounded-full bg-[#20C96B]"
                          style={{
                            width: `${100 - index * 18}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </DashboardGrid>
              </SectionCard>

              <SectionCard
                title="Prospects récents"
                description="Opportunités commerciales actuellement suivies"
                action={
                  <SearchInput
                    value={prospectSearch}
                    onChange={(event) => setProspectSearch(event.target.value)}
                    placeholder="Rechercher un prospect..."
                    aria-label="Rechercher dans les prospects"
                    containerClassName="w-full sm:w-64"
                  />
                }
                contentClassName="-mx-5 -mb-5"
              >
                <DataTable
                  columns={prospectColumns}
                  data={filteredProspects}
                  getRowKey={(prospect) => prospect.id}
                  emptyMessage={
                    prospectSearch
                      ? "Aucun prospect ne correspond à votre recherche"
                      : "Aucun prospect disponible"
                  }
                  emptyDescription={
                    prospectSearch
                      ? "Essayez avec le nom de l’entreprise, le contact, la valeur ou le statut."
                      : "Ajoutez votre premier prospect pour commencer à alimenter le pipeline commercial."
                  }
                  emptyAction={
                    prospectSearch ? undefined : (
                      <ProductActionButton>
                        Ajouter un prospect
                      </ProductActionButton>
                    )
                  }
                  embedded
                />
              </SectionCard>
            </div>

            <div className="flex flex-col gap-4">
              <SectionCard
                title="Performance commerciale"
                description="Progression vers les objectifs du mois"
              >
                <div className="space-y-5">
                  <ProgressBar
                    label="Objectif de chiffre d’affaires"
                    value={68}
                    helper="184 M GNF réalisés sur un objectif de 270 M GNF"
                    variant="primary"
                  />

                  <ProgressBar
                    label="Taux de conversion"
                    value={42}
                    helper="18 opportunités converties ce mois"
                    variant="info"
                  />

                  <ProgressBar
                    label="Prospects relancés"
                    value={76}
                    helper="32 prospects sur 42 ont été relancés"
                    variant="warning"
                  />
                </div>
              </SectionCard>

              <SectionCard
                title="Activités commerciales"
                description="Dernières interactions avec les prospects"
                contentClassName="flex flex-col h-full justify-between"
              >
                <div className="mt-4">
                  <ActivityItem
                    title="Nouveau prospect"
                    description="Soguipami a été ajouté dans le pipeline commercial."
                    time="Il y a 8 min"
                  />

                  <ActivityItem
                    title="Rendez-vous programmé"
                    description="Une démonstration a été planifiée avec Kaba Transport."
                    time="Il y a 40 min"
                  />

                  <ActivityItem
                    title="Opportunité mise à jour"
                    description="Le dossier de Guinea Market est passé à l’étape Proposition."
                    time="Il y a 2 h"
                  />
                </div>

                <button
                  type="button"
                  className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#102F50] transition hover:border-[#20C96B] hover:text-emerald-600"
                >
                  Voir tous les prospects
                </button>
              </SectionCard>
            </div>
          </DashboardGrid>
        </div>
      </div>
    </div>
  );
}