import {
  Disc3,
  Bike,
  Wrench,
  Droplet,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Disc3,
    title: "Gumiabroncs kereskedelem & Szerelés",
    desc: "Prémium és minőségi személy- és kisteherautó gumiabroncsok értékesítése, szerelése és centírozása.",
  },
  {
    icon: Bike,
    title: "Motorkerékpár gumiabroncs szerelés",
    desc: "Motorkerékpár abroncsok szakszerű szerelése, centírozása és egyensúlyozása modern berendezésekkel.",
  },
  {
    icon: Wrench,
    title: "Alufelnik és lemezfelnik javítása & forgalmazása",
    desc: "Sérült felnik professzionális javítása, görgőzése, egyengetése és új felnik értékesítése.",
  },
  {
    icon: Droplet,
    title: "Hidraulika tömlők gyártása, javítása & forgalmazása",
    desc: "Azonnali hidraulika tömlő roppantás, méretre gyártás és javítás vásárosnaményi telephelyeinken.",
  },
  {
    icon: Sparkles,
    title: "Autóápolási és autókozmetikai termékek",
    desc: "Minőségi autóápolási szerek, viaszok, tisztítószerek, Koch-Chemie termékek és kiegészítők forgalmazása.",
  },
];

export function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Szolgáltatásaink
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
              Minden, amire az autódnak szüksége van — egy helyen.
            </h2>
          </div>
          <a
            href="#idopont"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            Ajánlatkérés <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
              <div className="relative flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-primary transition-transform group-hover:scale-105 group-hover:rotate-3">
                  <s.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="relative mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
