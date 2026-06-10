import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Gumiabroncs kereskedelem & Szerelés",
  "Autóápolási termékek",
  "Alufelnik, lemezfelnik javítása és forgalmazása",
  "Hidraulika tömlők gyártása, javítása és forgalmazása",
  "Kerékanyák, kerékcsavarok, kerékőrök",
  "Nyomtávszélesítők, tehermentesítő gyűrűk",
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      car: formData.get("car") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    const apiKey = (import.meta.env.VITE_BREVO_API_KEY || 
                    import.meta.env.BREVO_API_KEY || 
                    (typeof process !== "undefined" && process.env ? process.env.BREVO_API_KEY : "")) as string;

    if (!apiKey) {
      console.error("Missing Brevo API key.");
      setError("Az e-mail küldési konfiguráció hiányzik. Kérjük, vegye fel velünk a kapcsolatot telefonon!");
      setIsSubmitting(false);
      return;
    }

    const sendEmail = async (body: any) => {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Brevo API hiba: ${res.status} - ${errText}`);
      }
      return res.json();
    };

    // 1. LEVÉL NEKEM (Értesítés)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background-color: #f4f4f5; color: #18181b; padding: 20px; margin: 0; }
          .card { background-color: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; border-top: 4px solid #eab308; }
          h2 { color: #09090b; margin-top: 0; font-size: 20px; border-bottom: 1px solid #e4e4e7; padding-bottom: 12px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          td { padding: 12px 8px; border-bottom: 1px solid #e4e4e7; vertical-align: top; }
          .label { font-weight: bold; color: #71717a; width: 35%; }
          .value { color: #18181b; }
          .message-box { background-color: #f4f4f5; padding: 12px; border-radius: 6px; border-left: 3px solid #d4d4d8; font-style: italic; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Új ajánlatkérés érkezett - Patkó Car</h2>
          <p>A weboldalon új ajánlatkérés / időpontfoglalás űrlapot küldtek be:</p>
          <table>
            <tr>
              <td class="label">Név:</td>
              <td class="value"><strong>${data.name}</strong></td>
            </tr>
            <tr>
              <td class="label">Telefonszám:</td>
              <td class="value"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td class="label">E-mail cím:</td>
              <td class="value"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td class="label">Autó típusa:</td>
              <td class="value">${data.car || "Nincs megadva"}</td>
            </tr>
            <tr>
              <td class="label">Szolgáltatás:</td>
              <td class="value"><strong>${data.service}</strong></td>
            </tr>
            <tr>
              <td class="label">Megjegyzés / Üzenet:</td>
              <td class="value">
                <div class="message-box">${data.message ? data.message : "Nem adott meg üzenetet."}</div>
              </td>
            </tr>
          </table>
        </div>
      </body>
      </html>
    `;

    const adminEmailPayload = {
      sender: { name: "Patkó Car Weboldal", email: "ronaldo02149@gmail.com" },
      to: [{ email: "ronaldo02149@gmail.com" }],
      subject: "Új ajánlatkérés érkezett - Patkó Car",
      htmlContent: adminEmailHtml,
    };

    // 2. LEVÉL A VEVŐNEK (Automatikus visszaigazolás)
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background-color: #0c0a09; color: #f5f5f4; padding: 40px 20px; margin: 0; }
          .card { background-color: #1c1917; border: 1px solid #2e2a24; border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; text-align: center; }
          .logo { color: #eab308; font-size: 24px; font-weight: 800; letter-spacing: 0.1em; margin-bottom: 24px; text-transform: uppercase; }
          h2 { color: #ffffff; font-size: 20px; margin-top: 0; font-weight: 700; }
          p { color: #d6d3d1; font-size: 15px; line-height: 1.6; margin: 16px 0; text-align: left; }
          .highlight-box { background-color: #2e2a24; border-left: 4px solid #eab308; padding: 16px; border-radius: 8px; margin: 20px 0; text-align: left; }
          .highlight-box p { margin: 4px 0; font-size: 14px; color: #e4e4e7; }
          .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #2e2a24; color: #78716c; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">Patkó Car</div>
          <h2>Kedves ${data.name}!</h2>
          <p>Köszönjük a megkeresést! Értesítünk, hogy az ajánlatkérésedet sikeresen fogadtuk.</p>
          <p>Kollégánk hamarosan átnézi a részleteket, és a megadott telefonszámon (<strong style="color: #eab308;">${data.phone}</strong>) keresni fog az időpont véglegesítésével kapcsolatban.</p>
          
          <div class="highlight-box">
            <p><strong>A megadott adatok:</strong></p>
            <p>• Szolgáltatás: ${data.service}</p>
            <p>• Autó típusa: ${data.car || "Nincs megadva"}</p>
          </div>

          <p>Üdvözlettel,<br><strong style="color: #ffffff;">Patkó Car csapata</strong></p>
          
          <div class="footer">
            Ez egy automatikus visszaigazoló e-mail. Kérjük, ne válaszolj rá közvetlenül.<br>
            Patkó Car Vásárosnamény
          </div>
        </div>
      </body>
      </html>
    `;

    const customerEmailPayload = {
      sender: { name: "Patkó Car", email: "ronaldo02149@gmail.com" },
      to: [{ email: data.email }],
      subject: "Sikeres ajánlatkérés – Patkó Car",
      htmlContent: customerEmailHtml,
    };

    try {
      await Promise.all([
        sendEmail(adminEmailPayload),
        sendEmail(customerEmailPayload),
      ]);
      setSuccess(true);
      formElement.reset();
    } catch (err: any) {
      console.error("Submission failed:", err);
      setError(err?.message || "Hiba történt az ajánlatkérés elküldése során. Kérjük, próbálkozzon újra!");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          >
            {success && (
              <div className="mb-6 rounded-2xl border border-primary bg-primary/10 p-5 text-primary shadow-glow transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shrink-0 mt-0.5">
                    <Send className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-white">Sikeres ajánlatkérés!</h4>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">
                      Az ajánlatkérést sikeresen fogadtuk. Megerősítő e-mailt küldtünk a megadott e-mail címre. Kollégánk hamarosan keresni fog a megadott telefonszámon!
                    </p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setSuccess(false)}
                    className="text-white/50 hover:text-white transition-colors cursor-pointer text-xs p-1"
                  >
                    Bezárás
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-2xl border border-destructive bg-destructive/10 p-5 text-destructive-foreground transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-white">Hiba történt!</h4>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">{error}</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setError(null)}
                    className="text-white/50 hover:text-white transition-colors cursor-pointer text-xs p-1"
                  >
                    Bezárás
                  </button>
                </div>
              </div>
            )}

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
                  className="w-full rounded-2xl md:rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled className="bg-zinc-900 text-white">Válassz egyet…</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>
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
                  className="w-full resize-none rounded-2xl md:rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-2xl md:rounded-full bg-primary px-6 py-5 md:py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Küldés folyamatban..." : "Időpont / Árajánlat kérése"}
                {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </div>
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
        className="w-full rounded-2xl md:rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
      />
    </div>
  );
}
