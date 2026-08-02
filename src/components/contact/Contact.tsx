"use client"; // 💡 Cette ligne résout l'erreur d'interactivité

import Button from "@/components/ui/Button";

const contacts = [
  {
    title: "Email",
    value: "sekoukabamsk@gmail.com",
  },
  {
    title: "Téléphone",
    value: "+224 627 83 81 25",
  },
  {
    title: "Disponibilité",
    value: "Lun - Ven • 09h00 - 18h00",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#081C2F] py-28 text-white"
    >
      <div className="gbis-grid-background absolute inset-0 opacity-10" />

      <div className="absolute -left-44 top-0 h-[450px] w-[450px] rounded-full bg-[#20C96B]/10 blur-[150px]" />

      <div className="absolute -right-44 bottom-0 h-[500px] w-[500px] rounded-full bg-[#163B61]/40 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#20C96B]/30 bg-[#20C96B]/10 px-4 py-2 text-sm font-semibold text-[#20C96B]">
              Contact
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Construisons votre prochain projet digital.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              GBIS accompagne les entreprises, écoles, administrations et
              institutions dans leur transformation digitale.
              <br /><br />
              Nous concevons des logiciels modernes, évolutifs et adaptés aux
              réalités africaines.
            </p>

            <div className="mt-12 space-y-6">
              {contacts.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors duration-300 hover:border-white/20"
                >
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur shadow-2xl">
            <h3 className="text-2xl font-bold">
              Demander une démonstration
            </h3>

            <p className="mt-3 text-slate-300">
              Répondez à quelques questions. Nous reviendrons vers vous rapidement.
            </p>

            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-400 outline-none transition focus:border-[#20C96B] focus:bg-white/10"
              />

              <input
                type="text"
                placeholder="Entreprise / Institution"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-400 outline-none transition focus:border-[#20C96B] focus:bg-white/10"
              />

              <input
                type="email"
                placeholder="Adresse email professionnelle"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-400 outline-none transition focus:border-[#20C96B] focus:bg-white/10"
              />

              <textarea
                rows={5}
                placeholder="Décrivez votre projet ou le produit qui vous intéresse..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-400 outline-none transition focus:border-[#20C96B] focus:bg-white/10 resize-none"
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#20C96B] font-bold text-[#102F50] shadow-lg shadow-[#20C96B]/20 transition-all duration-300 hover:bg-[#1DBA63] hover:shadow-xl"
                >
                  Envoyer la demande de démo →
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}