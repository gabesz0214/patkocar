import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Gumiabroncs kereskedelem & Szerelés",
  "Motorkerékpár gumiabroncs szerelés",
  "Alufelnik és lemezfelnik javítása & forgalmazása",
  "Hidraulika tömlők gyártása, javítása & forgalmazása",
  "Autóápolási és autókozmetikai termékek",
  "Egyéb kérdés",
];

export function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="idopont" className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Online időpontkérés
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
              Kérj időpontot vagy árajánlatot — 24 órán belül válaszolunk.
            </h2>
            <p className="mt-5 text-white/70">
              Töltsd ki a rövid űrlapot, és hamarosan keresünk a részletekkel. Telefonon és e-mailben is elérhetőek vagyunk.
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+3645570144" className="flex items-center gap-4 group">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Telefon (Kossuth u. / Gyorsszerviz)</div>
                  <div className="font-semibold text-white group-hover:text-primary transition-colors">+36 45 570 144</div>
                </div>
              </a>
              <a href="tel:+36202227750" className="flex items-center gap-4 group">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Mobil (Árpád u. / Felnijavítás)</div>
                  <div className="font-semibold text-white group-hover:text-primary transition-colors">+36 20 222 7750</div>
                </div>
              </a>
              <a href="mailto:info@patkocar.hu" className="flex items-center gap-4 group">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">E-mail</div>
                  <div className="font-semibold">info@patkocar.hu</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+Kossuth+%C3%BAt+49,+4800/@48.1302135,22.3077389,17z/data=!3m1!4b1!4m6!3m5!1s0x47388abbc71ce5e7:0x868fe20a613fcb14!8m2!3d48.1302099!4d22.3103138!16s%2Fg%2F11j6_bh9bx?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">I. Telephely (Gumi- & Gyorsszerviz)</div>
                  <div className="font-semibold text-white group-hover:text-primary transition-colors">Vásárosnamény, Kossuth út 49.</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+%C3%81rp%C3%A1d+%C3%BAt+40,+4800/@48.132773,22.3006241,17z/data=!3m1!4b1!4m6!3m5!1s0x47388ab87c23a87d:0x75260ed4d2a0d66!8m2!3d48.1327694!4d22.303199!16s%2Fg%2F11kbq1l587?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">II. Telephely (Felnijavítás & Tömlőgyártás)</div>
                  <div className="font-semibold text-white group-hover:text-primary transition-colors">Vásárosnamény, Árpád út 40.</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Köszönjük!</h3>
                <p className="mt-2 text-white/70">Hamarosan keresünk a megadott elérhetőségen.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Teljes név" name="name" placeholder="Kovács János" required />
                  <Field label="Telefonszám" name="phone" type="tel" placeholder="+36 30 …" required />
                </div>
                <Field label="E-mail cím" name="email" type="email" placeholder="email@pelda.hu" required />
                <Field label="Autó típusa, évjárata" name="car" placeholder="VW Golf 7, 2017" required />

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    Kívánt szolgáltatás
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled className="text-foreground">Válassz egyet…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-foreground">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    Üzenet / Hibajelenség
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Pl. furcsa zaj fékezésnél…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Időpont / Árajánlat kérése
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
      />
    </div>
  );
}
