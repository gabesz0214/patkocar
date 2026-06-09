import { Award, Smile, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "év szakmai tapasztalat" },
  { icon: Smile, value: "100%", label: "elégedett ügyfél" },
  { icon: Zap, value: "Azonnali", label: "tömlőgyártás & javítás" },
  { icon: ShieldCheck, value: "Garancia", label: "minden munkára" },
];

export function Stats() {
  return (
    <section className="relative -mt-12 md:-mt-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-card p-3 shadow-elegant md:grid-cols-4 md:gap-4 md:p-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group flex items-center gap-4 rounded-2xl bg-surface p-5 transition-colors hover:bg-accent"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xl font-extrabold tracking-tight text-foreground">{s.value}</div>
                <div className="text-xs font-medium text-muted-foreground md:text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
