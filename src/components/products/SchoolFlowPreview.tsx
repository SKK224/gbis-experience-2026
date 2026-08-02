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

type StudentPayment = {
  id: number;
  student: string;
  className: string;
  amount: string;
  status: "Payé" | "En attente" | "En retard";
};

const studentPayments: StudentPayment[] = [
  {
    id: 1,
    student: "Mariam Diallo",
    className: "10e année",
    amount: "450 000 GNF",
    status: "Payé",
  },
  {
    id: 2,
    student: "Mamadou Bah",
    className: "9e année",
    amount: "450 000 GNF",
    status: "En attente",
  },
  {
    id: 3,
    student: "Fatoumata Camara",
    className: "11e année",
    amount: "450 000 GNF",
    status: "En retard",
  },
];

function getPaymentStatusVariant(
  status: StudentPayment["status"],
): "success" | "warning" | "danger" {
  switch (status) {
    case "Payé":
      return "success";
    case "En attente":
      return "warning";
    case "En retard":
      return "danger";
  }
}

const studentPaymentColumns: DataTableColumn<StudentPayment>[] = [
  {
    key: "student",
    label: "Élève",
    className: "font-medium text-[#102F50]",
  },
  {
    key: "className",
    label: "Classe",
  },
  {
    key: "amount",
    label: "Montant",
  },
  {
    key: "status",
    label: "Statut",
    render: (payment) => (
      <StatusBadge variant={getPaymentStatusVariant(payment.status)}>
        {payment.status}
      </StatusBadge>
    ),
  },
];

export default function SchoolFlowPreview() {
  const [paymentSearch, setPaymentSearch] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [paymentClass, setPaymentClass] = useState("all");

  const filteredStudentPayments = useMemo(() => {
    const normalizedSearch = paymentSearch.trim().toLowerCase();

    return studentPayments.filter((payment) => {
      const matchesSearch =
        !normalizedSearch ||
        payment.student.toLowerCase().includes(normalizedSearch) ||
        payment.className.toLowerCase().includes(normalizedSearch) ||
        payment.amount.toLowerCase().includes(normalizedSearch) ||
        payment.status.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        paymentStatus === "all" || payment.status === paymentStatus;

      const matchesClass =
        paymentClass === "all" || payment.className === paymentClass;

      return matchesSearch && matchesStatus && matchesClass;
    });
  }, [paymentSearch, paymentStatus, paymentClass]);

  return (
    <div className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <ProductHeader
        initials="SF"
        name="SchoolFlow"
        description="Tableau de bord scolaire"
        status="En ligne"
      />

      {/* Sidebar réajustée à 250px et min-height de 760px pour un effet applicatif réel */}
      <div className="grid min-h-[760px] lg:grid-cols-[250px_minmax(0,1fr)]">
        <SidebarMenu
          items={[
            "Vue d’ensemble",
            "Élèves",
            "Enseignants",
            "Présences",
            "Notes",
            "Paiements",
          ]}
          footerTitle="Année scolaire"
          footerValue="2026–2027"
        />

        {/* Espace intérieur augmenté (p-5 sm:p-6 lg:p-7) */}
        <div className="flex min-w-0 flex-col gap-5 bg-[#F3F6F8] p-5 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Bonjour, Direction
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#102F50]">
                Vue d’ensemble
              </h3>
            </div>

            <ProductActionButton>
              Ajouter un élève
            </ProductActionButton>
          </div>

          {/* Statistiques clés */}
          <DashboardGrid columns={4}>
            <StatCard
              label="Élèves"
              value="1 248"
              change="+32 ce mois"
            />

            <StatCard
              label="Enseignants"
              value="64"
              change="4 nouveaux"
            />

            <StatCard
              label="Présence"
              value="92 %"
              change="+3,2 %"
            />

            <StatCard
              label="Paiements"
              value="78 %"
              change="+8,6 %"
            />
          </DashboardGrid>

          {/* Tableau des Paiements récents en pleine largeur */}
          <SectionCard
            title="Paiements récents"
            description="Suivi des dernières opérations scolaires"
            action={
              <div className="flex w-full flex-col gap-2 lg:w-auto lg:flex-row">
                <SearchInput
                  value={paymentSearch}
                  onChange={(event) => setPaymentSearch(event.target.value)}
                  placeholder="Rechercher..."
                  aria-label="Rechercher dans les paiements"
                  containerClassName="w-full lg:w-56"
                />

                <SelectFilter
                  value={paymentClass}
                  onChange={(event) => setPaymentClass(event.target.value)}
                  aria-label="Filtrer les paiements par classe"
                  containerClassName="w-full lg:w-48"
                  options={[
                    { value: "all", label: "Toutes les classes" },
                    { value: "9e année", label: "9e année" },
                    { value: "10e année", label: "10e année" },
                    { value: "11e année", label: "11e année" },
                  ]}
                />

                <SelectFilter
                  value={paymentStatus}
                  onChange={(event) => setPaymentStatus(event.target.value)}
                  aria-label="Filtrer les paiements par statut"
                  containerClassName="w-full lg:w-44"
                  options={[
                    { value: "all", label: "Tous les statuts" },
                    { value: "Payé", label: "Payé" },
                    { value: "En attente", label: "En attente" },
                    { value: "En retard", label: "En retard" },
                  ]}
                />
              </div>
            }
            contentClassName="-mx-5 -mb-5"
          >
            <DataTable
              columns={studentPaymentColumns}
              data={filteredStudentPayments}
              getRowKey={(payment) => payment.id}
              emptyMessage={
                paymentSearch || paymentStatus !== "all" || paymentClass !== "all"
                  ? "Aucun paiement ne correspond aux filtres"
                  : "Aucun paiement enregistré"
              }
              emptyDescription={
                paymentSearch || paymentStatus !== "all" || paymentClass !== "all"
                  ? "Modifiez la recherche, la classe ou le statut sélectionné."
                  : "Les paiements des élèves apparaîtront ici dès leur enregistrement."
              }
              emptyAction={
                paymentSearch || paymentStatus !== "all" || paymentClass !== "all" ? (
                  <ProductActionButton
                    variant="secondary"
                    onClick={() => {
                      setPaymentSearch("");
                      setPaymentStatus("all");
                      setPaymentClass("all");
                    }}
                  >
                    Réinitialiser les filtres
                  </ProductActionButton>
                ) : (
                  <ProductActionButton>
                    Enregistrer un paiement
                  </ProductActionButton>
                )
              }
              embedded
            />
          </SectionCard>

          {/* Grille secondaire pour les activités et indicateurs en bas */}
          <DashboardGrid columns={2}>
            <SectionCard
              title="Activités récentes"
              description="Dernières opérations enregistrées"
            >
              <div className="mt-2">
                <ActivityItem
                  title="Nouvelle inscription"
                  description="Mariam Diallo a été inscrite en classe de 10e année."
                  time="Il y a 10 min"
                />

                <ActivityItem
                  title="Paiement enregistré"
                  description="Le paiement mensuel de Mamadou Bah a été confirmé."
                  time="Il y a 35 min"
                />

                <ActivityItem
                  title="Présences mises à jour"
                  description="Les présences de la classe de 9e année ont été enregistrées."
                  time="Il y a 1 h"
                />
              </div>
            </SectionCard>

            <SectionCard
              title="Indicateurs scolaires"
              description="Suivi des performances de l’établissement"
            >
              <div className="space-y-5">
                <ProgressBar
                  label="Taux de présence"
                  value={94}
                  helper="Objectif mensuel : 95 %"
                  variant="success"
                />

                  <ProgressBar
                    label="Paiements reçus"
                    value={86}
                    helper="12 paiements restent en attente"
                    variant="primary"
                  />

                  <ProgressBar
                    label="Notes enregistrées"
                    value={78}
                    helper="Les évaluations du second trimestre sont en cours"
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