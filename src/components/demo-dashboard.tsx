"use client";

import { useState } from "react";
import { BarChart3, CreditCard, LayoutDashboard, Users } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "students", label: "Élèves", icon: Users },
  { id: "payments", label: "Paiements", icon: CreditCard },
  { id: "reports", label: "Rapports", icon: BarChart3 },
];

const data = {
  dashboard: { title: "Vue d'ensemble", value: "1 245", note: "élèves inscrits", percent: "94 %" },
  students: { title: "Suivi des élèves", value: "38", note: "nouvelles inscriptions", percent: "97 %" },
  payments: { title: "Suivi des paiements", value: "86 %", note: "frais collectés", percent: "86 %" },
  reports: { title: "Rapports scolaires", value: "24", note: "rapports générés", percent: "91 %" },
};

export function DemoDashboard() {
  const [active, setActive] = useState<keyof typeof data>("dashboard");
  const item = data[active];
  return (
    <div className="demo-shell">
      <aside className="demo-sidebar">
        <div className="demo-brand">SF</div>
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => setActive(id as keyof typeof data)}>
            <Icon size={17} /><span>{label}</span>
          </button>
        ))}
      </aside>
      <div className="demo-main">
        <div className="demo-topbar"><div><small>SchoolFlow</small><h3>{item.title}</h3></div><span className="status-dot">En ligne</span></div>
        <div className="kpi-grid">
          <div className="kpi-card"><small>Indicateur principal</small><strong>{item.value}</strong><span>{item.note}</span></div>
          <div className="kpi-card"><small>Performance</small><strong>{item.percent}</strong><div className="progress"><i style={{ width: item.percent }} /></div></div>
          <div className="kpi-card wide"><small>Évolution mensuelle</small><div className="chart-bars">{[42,60,48,74,68,88,79,95].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
        </div>
      </div>
    </div>
  );
}
