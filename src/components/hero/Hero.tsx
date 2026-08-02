import Dashboard from "./Dashboard";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-[#F3F6F8] pt-32"
    >
      {/* Halos lumineux d'ambiance de marque (Ambient Glows) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#20C96B]/15 blur-[120px] animate-gbis-pulse-glow"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-[#163B61]/15 blur-[140px] animate-gbis-pulse-glow animation-delay-500"
      />

      {/* Fond de grille technique (Grid Background) */}
      <div
        aria-hidden="true"
        className="gbis-grid-background pointer-events-none absolute inset-0 opacity-70"
      />

      {/* Fondu de transition linéaire avec la Navbar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/70 to-transparent"
      />

      {/* Conteneur principal (Layout responsive à double colonne) */}
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-16 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        {/* Colonne Gauche : Messages et Accroches de Marque */}
        <div className="min-w-0">
          {/* Badge de sur-titre */}
          <div className="animate-gbis-fade-up inline-flex items-center gap-2 rounded-full border border-[#20C96B]/30 bg-white/85 px-4 py-2 text-sm font-semibold text-[#102F50] shadow-sm backdrop-blur">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[#20C96B] shadow-[0_0_0_5px_rgba(32,201,107,0.12)]"
            />
            Digital Innovation Studio
          </div>

          {/* Titre principal H1 avec dégradé GBIS */}
          <h1 className="animate-gbis-fade-left mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#102F50] sm:text-6xl lg:text-7xl">
            Transformer les organisations africaines grâce à des solutions{" "}
            <span className="gbis-gradient-text">
              numériques intelligentes.
            </span>
          </h1>

          {/* Description à contraste ajusté */}
          <p className="animate-gbis-fade-up animation-delay-200 mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            GBIS conçoit des applications métiers, automatise les processus et
            transforme les données en décisions utiles pour les entreprises,
            les écoles et les institutions.
          </p>

          {/* Sous-composant d'appels à l'action */}
          <div className="animate-gbis-fade-up animation-delay-300">
            <HeroButtons />
          </div>

          {/* Sous-composant des indicateurs statistiques de réassurance */}
          <div className="animate-gbis-fade-up animation-delay-500">
            <HeroStats />
          </div>
        </div>

        {/* Colonne Droite : Rendu du Dashboard UI */}
        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-[#20C96B]/10 via-transparent to-[#102F50]/10 blur-2xl"
          />

          <div className="relative">
            <Dashboard />
          </div>
        </div>
      </div>

      {/* Ligne de délimitation de section estompée */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#102F50]/15 to-transparent"
      />
    </section>
  );
}