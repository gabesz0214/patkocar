import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Wrench, Clock, Phone, Mail, MapPin, X } from "lucide-react";
import { SzechenyiBanner } from "./SzechenyiBanner";

export function Footer() {
  const [activeModal, setActiveModal] = useState<"aszf" | "gdpr" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer id="kapcsolat" className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-primary">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">Patkó Car</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Prémium gumi- és gyorsszerviz, alufelni javítás, azonnali hidraulika tömlő gyártás és autókozmetikai termékek Vásárosnaményban.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Nyitvatartás</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> H–P: 8:00 – 17:00</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Szombat: 8:00 – 12:00</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Vasárnap: Zárva</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Kapcsolat</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+3645570144" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +36 45 570 144
                </a>
              </li>
              <li>
                <a href="tel:+36202227750" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +36 20 222 7750
                </a>
              </li>
              <li>
                <a href="mailto:info@patkocar.hu" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" /> info@patkocar.hu
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+Kossuth+%C3%BAt+49,+4800/@48.1302135,22.3077389,17z/data=!3m1!4b1!4m6!3m5!1s0x47388abbc71ce5e7:0x868fe20a613fcb14!8m2!3d48.1302099!4d22.3103138!16s%2Fg%2F11j6_bh9bx?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>I. Telephely: Kossuth u. 49.</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+%C3%81rp%C3%A1d+%C3%BAt+40,+4800/@48.132773,22.3006241,17z/data=!3m1!4b1!4m6!3m5!1s0x47388ab87c23a87d:0x75260ed4d2a0d66!8m2!3d48.1327694!4d22.303199!16s%2Fg%2F11kbq1l587?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>II. Telephely: Árpád u. 40.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Patkó Car — patkocar.hu. Minden jog fenntartva.</span>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveModal("aszf")}
              className="hover:text-primary hover:underline transition-colors cursor-pointer text-zinc-400"
            >
              Általános Szerződési Feltételek (ÁSZF)
            </button>
            <button
              onClick={() => setActiveModal("gdpr")}
              className="hover:text-primary hover:underline transition-colors cursor-pointer text-zinc-400"
            >
              Adatkezelési Tájékoztató (GDPR)
            </button>
          </div>
        </div>

        {/* Regulatory Banner */}
        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="bg-white p-1 rounded border border-zinc-200 shadow-sm shrink-0">
              <SzechenyiBanner className="shrink-0 cursor-pointer select-none bg-white p-0.5 rounded hover:opacity-90 active:scale-[0.98] transition-all" />
            </div>
            <div className="text-[10px] text-muted-foreground max-w-xl leading-normal">
              <strong>Támogatott projekt:</strong> Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél.<br />
              Azonosítószám: GINOP_PLUSZ-1.2.2-22-2022-02216 · Támogatás összege: 9,06 millió Ft.
            </div>
          </div>
          <span className="text-[10px] font-extrabold tracking-widest text-[#003399] uppercase shrink-0">
            BEFEKTETÉS A JÖVŐBE
          </span>
        </div>
      </div>

      {activeModal && mounted && createPortal(
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-zinc-950 text-zinc-100 rounded-3xl max-w-2xl w-full border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
              <h3 className="text-sm md:text-base font-bold text-white">
                {activeModal === "aszf" ? "Általános Szerződési Feltételek (ÁSZF)" : "Adatkezelési Tájékoztató (GDPR)"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Bezárás"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 space-y-4 text-xs md:text-sm leading-relaxed text-zinc-300">
              {activeModal === "aszf" ? (
                <>
                  <p className="font-semibold text-white">Üdvözöljük a Patkó Car Általános Szerződési Feltételeiben!</p>
                  <p>A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a PATKÓ-CAR Kft. (székhely: 4800 Vásárosnamény, Kossuth út 49., a továbbiakban: Szolgáltató) által nyújtott gumiabroncs szerelési, felnijavítási, hidraulika tömlő gyártási és autókozmetikai szolgáltatások igénybevételének feltételeit szabályozza.</p>
                  
                  <h4 className="font-bold text-white mt-4">1. Szolgáltató adatai</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Cégnév:</strong> PATKÓ-CAR Kft.</li>
                    <li><strong>Székhely:</strong> 4800 Vásárosnamény, Kossuth út 49.</li>
                    <li><strong>Telephelyek:</strong> I. Kossuth út 49., II. Árpád út 40.</li>
                    <li><strong>E-mail:</strong> info@patkocar.hu</li>
                  </ul>

                  <h4 className="font-bold text-white mt-4">2. Szolgáltatások igénybevétele</h4>
                  <p>A Szolgáltató műhelyeiben elvégzett munkák (pl. gumiabroncs szerelés, alufelni javítás, hidraulika tömlő roppantás) a felek közötti megállapodás alapján, megrendelőlappal vagy számlaadással történnek. Az online időpontfoglaló vagy ajánlatkérő űrlap kitöltése nem minősül automatikus szerződéskötésnek, az csupán előzetes időpontkérésnek vagy ajánlatkérésnek minősül, amelyet a Szolgáltató visszaigazol.</p>

                  <h4 className="font-bold text-white mt-4">3. Fizetési feltételek</h4>
                  <p>A szolgáltatások ellenértéke a telephelyeken készpénzben vagy bankkártyával egyenlíthető ki a munka elvégzését követően.</p>

                  <h4 className="font-bold text-white mt-4">4. Felelősségvállalás és Garancia</h4>
                  <p>A Szolgáltató szavatolja az általa elvégzett munkák szakszerűségét és a beépített anyagok minőségét. Bármilyen észlelt hiba esetén a megrendelő jogosult panasszal élni a Szolgáltató felé, a számla vagy munkalap bemutatásával.</p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-white">Adatkezelési Tájékoztató</p>
                  <p>A PATKÓ-CAR Kft. (a továbbiakban: Adatkezelő) kiemelten fontosnak tartja a személyes adatok védelmét. Ez a tájékoztató ismerteti, hogy az online időpontfoglaló és ajánlatkérő rendszerben megadott adatokat hogyan kezeljük.</p>

                  <h4 className="font-bold text-white mt-4">1. Adatkezelő adatai</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Adatkezelő:</strong> PATKÓ-CAR Kft.</li>
                    <li><strong>Székhely:</strong> 4800 Vásárosnamény, Kossuth út 49.</li>
                    <li><strong>E-mail:</strong> info@patkocar.hu</li>
                  </ul>

                  <h4 className="font-bold text-white mt-4">2. Az adatkezelés célja és jogalapja</h4>
                  <p>Az adatkezelés célja a weboldalon kezdeményezett online időpontfoglalások és ajánlatkérések lebonyolítása, a kapcsolatfelvétel és a megrendelővel való egyeztetés. Az adatkezelés jogalapja az Ön kifejezett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).</p>

                  <h4 className="font-bold text-white mt-4">3. A kezelt adatok köre</h4>
                  <p>Kizárólag azokat az adatokat kezeljük, amelyeket az űrlapon megad: Név, telefonszám, e-mail cím, a gépjármű típusa/évjárata, valamint az üzenet vagy hibajelenség leírása.</p>

                  <h4 className="font-bold text-white mt-4">4. Az adatkezelés időtartama</h4>
                  <p>Az adatokat az időpontfoglalás teljesítésétől számított 1 évig, vagy a hozzájárulás visszavonásáig kezeljük, ezt követően biztonságosan töröljük.</p>

                  <h4 className="font-bold text-white mt-4">5. Az Ön jogai</h4>
                  <p>Ön bármikor kérhet tájékoztatást a kezelt adatairól, kérheti azok helyesbítését, korlátozását vagy törlését az info@patkocar.hu e-mail címen.</p>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="bg-zinc-900 px-6 py-4 flex justify-end border-t border-zinc-800">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs py-2 px-5 rounded-full transition-colors tracking-wider uppercase cursor-pointer"
              >
                Bezárás
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </footer>
  );
}
