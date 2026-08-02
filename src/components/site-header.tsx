"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Solutions", "#solutions"],
  ["Secteurs", "#secteurs"],
  ["Méthode", "#methode"],
  ["À propos", "#apropos"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="Accueil GBIS">
          <Image src="/images/gbis-horizontal.webp" width={145} height={40} alt="GBIS" priority />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="btn btn-primary desktop-cta" href="#contact">Demander une démo</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Demander une démo</a>
        </nav>
      )}
    </header>
  );
}
