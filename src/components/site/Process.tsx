import { CalendarCheck, FileSearch, KeyRound } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Bejelentkezés",
    desc: "Foglalj időpontot online egy perc alatt, vagy hívj minket telefonon. Rugalmasan alkalmazkodunk.",
  },
  {
    icon: FileSearch,
    title: "Állapotfelmérés",
    desc: "Pontos diagnosztika és előzetes árajánlat. Nálunk nincs meglepetés számla — minden tételt egyeztetünk.",
  },
  {
    icon: KeyRound,
    title: "Precíz javítás",
    desc: "Szakszerű javítás minőségi alkatrészekkel, és a kulcsok átadása a megbeszélt időpontban — garanciával.",
  },
];

export function Process() {
  return (
    <section id="rolunk" className="bg-surface pt-24 pb-36 md:pt-32 md:pb-48 relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Hogyan dolgozunk
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
            Három lépés. Zéró meglepetés.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Átlátható folyamat, amiben minden ügyfelünk pontosan tudja, mi történik az autójával.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="absolute -top-4 left-8 grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                {i + 1}
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth fade gradient transitioning to #0b0c0f */}
      <div className="absolute left-0 right-0 bottom-0 h-24 md:h-36 pointer-events-none bg-gradient-to-b from-transparent to-[#0b0c0f]" />
    </section>
  );
}
