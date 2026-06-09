import { Award, FileText, Landmark, ShieldAlert, Cpu } from "lucide-react";

// Dynamically draws the EU flag stars using trigonometry
function EUFlag() {
  const starsCount = 12;
  const cx = 24;
  const cy = 16;
  const r = 8;
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    const angle = (i * 2 * Math.PI) / starsCount - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    stars.push(
      <path
        key={i}
        d="M 0,-2.5 L 0.75,-0.75 L 2.5,-0.75 L 1.12,0.37 L 1.57,2.12 L 0,1.06 L -1.57,2.12 L -1.12,0.37 L -2.5,-0.75 L -0.75,-0.75 Z"
        fill="#FFCC00"
        transform={`translate(${x}, ${y})`}
      />
    );
  }

  return (
    <svg width="48" height="32" viewBox="0 0 48 32" className="shrink-0 border border-white/10 rounded-sm">
      <rect width="48" height="32" fill="#003399" />
      {stars}
    </svg>
  );
}

function HungarianCoatOfArms() {
  return (
    <svg width="32" height="42" viewBox="0 0 32 42" className="shrink-0" fill="none">
      {/* Crown */}
      <path d="M16 2 L20 6 L16 8 L12 6 Z M13 8 L16 7 L19 8 L19 11 L13 11 Z" fill="#D4AF37" stroke="#8B6508" strokeWidth="0.5" />
      <circle cx="16" cy="2" r="1" fill="#FFD700" />
      
      {/* Shield Body */}
      <path d="M8 12 H24 V24 C24 30 16 35 16 35 C16 35 8 30 8 24 Z" fill="#B22222" stroke="#8B1A1A" strokeWidth="0.5" />
      
      {/* Left side: Red and Silver stripes */}
      <path d="M8 15 H16 M8 21 H16 M8 27 H16 M8 33 H14" stroke="#FFFFFF" strokeWidth="2.5" />
      
      {/* Right side: Green Triple Mount, Golden Crown and Silver Double Cross */}
      <path d="M20 28 C20 25 21 24 23 25 C25 24 25 26 25 28 Z" fill="#228B22" />
      <path d="M19 29 H27 V30 H19 Z" fill="#228B22" />
      <path d="M22 25 H24 V27 H22 Z" fill="#FFD700" /> {/* Mini Crown */}
      <path d="M23 15 H24 V25 H23 Z M21 17 H26 V18.5 H21 Z M21.5 20 H25.5 V21.5 H21.5 Z" fill="#FFFFFF" /> {/* Double Cross */}
      
      {/* Golden border */}
      <path d="M8 12 H24 V24 C24 30 16 35 16 35 C16 35 8 30 8 24 Z" stroke="#D4AF37" strokeWidth="1" />
    </svg>
  );
}

function SzechenyiLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0" fill="none">
      {/* Green Swirl representing the S / leaf */}
      <path
        d="M20 5 C28 5 35 12 35 20 C35 28 28 35 20 35 C12 35 5 28 5 20 C5 15 10 10 15 8 C12 11 10 15 10 20 C10 26 14 30 20 30 C26 30 30 26 30 20 C30 14 26 10 20 10"
        stroke="#228B22"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Blue inner arch */}
      <path
        d="M20 13 C24 13 27 16 27 20 C27 24 24 27 20 27"
        stroke="#0055A5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PalyazatContent() {
  const equipment = [
    "Msi Katana GF66 12UD",
    "FASEP RASE. 2249 - Szuperautomata kerékszerelő segédkarral",
    "BRIGHT LC885N AUTOMATA KERÉKSZERELŐ",
    "FASEP RGU56E.XL TEHERSZERELŐ",
    "JEMA JA3000S-E MOBIL 8425 OLLÓS EMELŐ",
  ];

  return (
    <div className="container-px mx-auto max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Hivatalos Hirdetőtábla
        </span>
        <h1 className="mt-3 text-balance text-3xl font-extrabold md:text-5xl">
          Európai Uniós Pályázat
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A PATKÓ-CAR Kft. fejlesztési projektjének adatai a Széchenyi Terv Plusz program keretében.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Side: Modern Details Card */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <Landmark className="h-5 w-5 text-primary" />
              Projekt Alapadatok
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Kedvezményezett neve</span>
                <p className="mt-1 font-semibold text-foreground">
                  PATKÓ-CAR Gépjárműjavító, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">A projekt azonosítószáma</span>
                  <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                    GINOP_PLUSZ-1.2.2-22-2022-02216
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Támogatás mértéke</span>
                  <p className="mt-1 font-semibold text-foreground">
                    70%-ban
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Szerződött támogatás összege</span>
                  <p className="mt-1 text-lg font-extrabold text-foreground">
                    9,06 millió Ft
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Projekt címe</span>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content Card */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              A projekt tartalmának bemutatása
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A projekt célja az alábbi fejlesztések megvalósítása a vállalkozás hatékonyságának növelése érdekében, modern eszközök beszerzésével:
            </p>
            
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary" /> Beszerzett Eszközök:
              </h3>
              <ul className="space-y-2.5">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground bg-surface p-3 rounded-xl border border-border/40 hover:border-primary/40 transition-colors">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[10px] font-extrabold text-primary-foreground mt-0.5">
                      {index + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Official EU Poster Billboard (Clean White Card design as requested) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-elegant md:p-8">
            {/* Logo Row: Széchenyi, HU coat of arms, EU Flag */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <div className="flex items-center gap-2">
                <SzechenyiLogo />
                <div className="flex flex-col leading-none">
                  <span className="text-xs font-black tracking-tight text-[#0055A5]">SZÉCHENYI</span>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#228B22]">TERV</span>
                  <span className="text-[8px] font-bold text-slate-500 tracking-wider">PLUSZ</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <HungarianCoatOfArms />
                <div className="hidden sm:flex flex-col leading-none text-left">
                  <span className="text-[9px] font-extrabold tracking-wider text-slate-700">MAGYARORSZÁG</span>
                  <span className="text-[8px] font-bold text-slate-500">KORMÁNYA</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex flex-col text-right leading-none">
                  <span className="text-[9px] font-extrabold text-[#003399]">EURÓPAI UNIÓ</span>
                  <span className="text-[7px] text-slate-500 font-semibold mt-0.5 max-w-[90px]">
                    Társfinanszírozta az Európai Unió
                  </span>
                </div>
                <EUFlag />
              </div>
            </div>

            {/* Poster Main Headline */}
            <div className="my-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0055A5] block mb-2">PÁLYÁZAT</span>
              <h2 className="text-lg font-black tracking-tight leading-snug text-slate-800 uppercase">
                Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél
              </h2>
            </div>

            {/* Poster Details list */}
            <div className="space-y-4 text-xs border-y border-slate-100 py-6">
              <div>
                <span className="font-bold text-slate-500">Kedvezményezett neve:</span>
                <p className="font-extrabold text-slate-800 mt-0.5">
                  PATKÓ-CAR Gépjárműjavító, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-slate-500">Támogatás összege:</span>
                  <p className="font-extrabold text-slate-800 text-sm mt-0.5">9,06 millió Ft</p>
                </div>
                <div>
                  <span className="font-bold text-slate-500">Támogatás mértéke:</span>
                  <p className="font-extrabold text-slate-800 text-sm mt-0.5">70%</p>
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-500">Projekt azonosítószáma:</span>
                <p className="font-mono font-bold text-slate-700 mt-0.5">GINOP_PLUSZ-1.2.2-22-2022-02216</p>
              </div>

              <div>
                <span className="font-bold text-slate-500">Fejlesztés célja (Eszközbeszerzés):</span>
                <ul className="list-disc pl-4 mt-1 space-y-1 font-medium text-slate-700">
                  <li>Msi Katana GF66 12UD</li>
                  <li>FASEP RASE. 2249 - szuperautomata kerékszerelő segédkarral</li>
                  <li>BRIGHT LC885N automata kerékszerelő</li>
                  <li>FASEP RGU56E.XL teherszerelő</li>
                  <li>JEMA JA3000S-E mobil ollós emelő</li>
                </ul>
              </div>
            </div>

            {/* Poster Footer: Investment in the future */}
            <div className="mt-6 flex items-center justify-between bg-[#003399]/5 rounded-xl px-4 py-3.5 border border-[#003399]/10">
              <span className="text-[10px] font-black tracking-widest text-[#003399] uppercase">
                Befektetés a jövőbe
              </span>
              <span className="text-[9px] font-extrabold text-[#228B22] flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" /> Széchenyi Terv Plusz
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* EU Publicity Banner Footer Message */}
      <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 flex items-start gap-3 text-xs text-yellow-600 dark:text-yellow-500 max-w-3xl">
        <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          <strong>Figyelem:</strong> Ez a felület a GINOP_PLUSZ-1.2.2-22-2022-02216 számú projekt hivatalos,
          szabályzat szerinti webes közzétételét valósítja meg, eleget téve a kedvezményezetti tájékoztatási kötelezettségeknek.
        </p>
      </div>
    </div>
  );
}
