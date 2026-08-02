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

type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
  status: "Actif" | "En congé" | "Absent";
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Aminata Diallo",
    department: "Ressources humaines",
    position: "Responsable RH",
    status: "Actif",
  },
  {
    id: 2,
    name: "Mamadou Bah",
    department: "Finance",
    position: "Comptable",
    status: "En congé",
  },
  {
    id: 3,
    name: "Fatoumata Camara",
    department: "Commercial",
    position: "Chargée clientèle",
    status: "Actif",
  },
  {
    id: 4,
    name: "Ibrahima Barry",
    department: "Opérations",
    position: "Superviseur",
    status: "Absent",
  },
];

function getEmployeeStatusVariant(
  status: Employee["status"],
): "success" | "warning" | "danger" {
  switch (status) {
    case "Actif":
      return "success";
    case "En congé":
      return "warning";
    case "Absent":
      return "danger";
  }
}

const employeeColumns: DataTableColumn<Employee>[] = [
  {
    key: "name",
    label: "Employé",
    className: "font-medium text-[#102F50]",
  },
  {
    key: "department",
    label: "Département",
  },
  {
    key: "position",
    label: "Poste",
  },
  {
    key: "status",
    label: "Statut",
    render: (employee) => (
      <StatusBadge variant={getEmployeeStatusVariant(employee.status)}>
        {employee.status}
      </StatusBadge>
    ),
  },
];

export default function HRFlowPreview() {
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState("all");
  const [employeeDepartment, setEmployeeDepartment] = useState("all");

  const filteredEmployees = useMemo(() => {
    const normalizedSearch = employeeSearch.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch =
        !normalizedSearch ||
        employee.name.toLowerCase().includes(normalizedSearch) ||
        employee.department.toLowerCase().includes(normalizedSearch) ||
        employee.position.toLowerCase().includes(normalizedSearch) ||
        employee.status.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        employeeStatus === "all" || employee.status === employeeStatus;

      const matchesDepartment =
        employeeDepartment === "all" ||
        employee.department === employeeDepartment;

      return matchesSearch && matchesStatus && matchesDepartment;
    });
  }, [employeeSearch, employeeStatus, employeeDepartment]);

  return (
    <div className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      {/* En-tête globale de l'application */}
      <ProductHeader
        initials="HF"
        name="HRFlow"
        description="Gestion des ressources humaines"
        status="Opérationnel"
      />

      <div className="grid min-h-[760px] lg:grid-cols-[250px_minmax(0,1fr)]">
        {/* Menu latéral gauche */}
        <SidebarMenu
          items={[
            "Vue d’ensemble",
            "Employés",
            "Présences",
            "Congés",
            "Paie",
            "Performance",
          ]}
          footerTitle="Effectif total"
          footerValue="248 employés"
          progress={82}
        />

        {/* Zone centrale du tableau de bord */}
        <div className="flex min-w-0 flex-col gap-5 bg-[#F3F6F8] p-5 sm:p-6 lg:p-7">
          {/* Titre de section et action principale */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Pilotage des ressources humaines
              </p>
              <h3 className="mt-1 text-2xl font-bold text-[#102F50]">
                Vue d’ensemble
              </h3>
            </div>

            <ProductActionButton>
              Ajouter un employé
            </ProductActionButton>
          </div>

          {/* Grille des cartes statistiques clés */}
          <DashboardGrid columns={4}>
            <StatCard label="Employés" value="248" change="+6 ce mois" />
            <StatCard label="Présence" value="96 %" change="+2,4 %" />
            <StatCard label="Congés" value="18" change="7 en attente" />
            <StatCard label="Paie" value="98 %" change="Cycle presque terminé" />
          </DashboardGrid>

          {/* Table principale de gestion des collaborateurs */}
          <SectionCard
            title="Gestion des employés"
            description="Suivi des collaborateurs et de leur situation actuelle"
            action={
              <div className="flex w-full flex-col gap-2 lg:w-auto lg:flex-row">
                <SearchInput
                  value={employeeSearch}
                  onChange={(event) => setEmployeeSearch(event.target.value)}
                  placeholder="Rechercher..."
                  aria-label="Rechercher dans les employés"
                  containerClassName="w-full lg:w-56"
                />

                <SelectFilter
                  value={employeeDepartment}
                  onChange={(event) => setEmployeeDepartment(event.target.value)}
                  aria-label="Filtrer les employés par département"
                  containerClassName="w-full lg:w-52"
                  options={[
                    { value: "all", label: "Tous les départements" },
                    { value: "Ressources humaines", label: "Ressources humaines" },
                    { value: "Finance", label: "Finance" },
                    { value: "Commercial", label: "Commercial" },
                    { value: "Opérations", label: "Opérations" },
                  ]}
                />

                <SelectFilter
                  value={employeeStatus}
                  onChange={(event) => setEmployeeStatus(event.target.value)}
                  aria-label="Filtrer les employés par statut"
                  containerClassName="w-full lg:w-44"
                  options={[
                    { value: "all", label: "Tous les statuts" },
                    { value: "Actif", label: "Actif" },
                    { value: "En congé", label: "En congé" },
                    { value: "Absent", label: "Absent" },
                  ]}
                />
              </div>
            }
            contentClassName="-mx-5 -mb-5"
          >
            <DataTable
              columns={employeeColumns}
              data={filteredEmployees}
              getRowKey={(employee) => employee.id}
              emptyMessage={
                employeeSearch || employeeStatus !== "all" || employeeDepartment !== "all"
                  ? "Aucun employé ne correspond aux filtres"
                  : "Aucun employé enregistré"
              }
              emptyDescription={
                employeeSearch || employeeStatus !== "all" || employeeDepartment !== "all"
                  ? "Modifiez la recherche, le département ou le statut sélectionné."
                  : "Les collaborateurs apparaîtront ici après leur enregistrement."
              }
              emptyAction={
                employeeSearch || employeeStatus !== "all" || employeeDepartment !== "all" ? (
                  <ProductActionButton
                    variant="secondary"
                    onClick={() => {
                      setEmployeeSearch("");
                      setEmployeeStatus("all");
                      setEmployeeDepartment("all");
                    }}
                  >
                    Réinitialiser les filtres
                  </ProductActionButton>
                ) : (
                  <ProductActionButton>
                    Ajouter un employé
                  </ProductActionButton>
                )
              }
              embedded
            />
          </SectionCard>

          {/* Grille secondaire inférieure (Activités + Progressions) */}
          <DashboardGrid columns={2}>
            <SectionCard
              title="Activités RH récentes"
              description="Dernières opérations enregistrées"
            >
              <div className="mt-2">
                <ActivityItem
                  title="Nouvel employé ajouté"
                  description="Fatoumata Camara a rejoint le département commercial."
                  time="Il y a 15 min"
                />
                <ActivityItem
                  title="Demande de congé"
                  description="Mamadou Bah a soumis une demande de congé annuel."
                  time="Il y a 45 min"
                />
                <ActivityItem
                  title="Paie validée"
                  description="Le cycle de paie du mois a été validé à 98 %."
                  time="Il y a 2 h"
                />
              </div>
            </SectionCard>

            <SectionCard
              title="Indicateurs RH"
              description="Suivi des principaux objectifs sociaux"
            >
              <div className="space-y-5">
                <ProgressBar
                  label="Taux de présence"
                  value={96}
                  helper="Objectif mensuel : 95 %"
                  variant="success"
                />
                <ProgressBar
                  label="Traitement de la paie"
                  value={98}
                  helper="La majorité des bulletins ont été générés"
                  variant="primary"
                />
                <ProgressBar
                  label="Plan de formation"
                  value={72}
                  helper="18 employés restent à former"
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