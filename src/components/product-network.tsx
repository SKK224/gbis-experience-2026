"use client";

import { motion, useReducedMotion } from "motion/react";
import { BarChart3, Boxes, GraduationCap, Users } from "lucide-react";

const nodes = [
  { name: "SchoolFlow", icon: GraduationCap, className: "node-school" },
  { name: "ClientFlow", icon: Users, className: "node-client" },
  { name: "StockFlow", icon: Boxes, className: "node-stock" },
  { name: "Insight BI", icon: BarChart3, className: "node-insight" },
];

export function ProductNetwork() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="network-card" aria-label="Écosystème de produits GBIS">
      <div className="network-glow" />
      <svg className="network-lines" viewBox="0 0 600 460" aria-hidden="true">
        <motion.path d="M300 230 L150 105" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2 }} />
        <motion.path d="M300 230 L450 105" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: .15 }} />
        <motion.path d="M300 230 L150 355" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: .3 }} />
        <motion.path d="M300 230 L450 355" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: .45 }} />
      </svg>
      <div className="network-core"><span>GBIS</span><small>Digital Platform</small></div>
      {nodes.map(({ name, icon: Icon, className }, index) => (
        <motion.div key={name} className={`network-node ${className}`} initial={reduceMotion ? false : { opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25 + index * .12 }}>
          <Icon size={19} /><span>{name}</span>
        </motion.div>
      ))}
      <div className="mini-panel">
        <div><span>Processus connectés</span><strong>12</strong></div>
        <div className="mini-bars"><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
