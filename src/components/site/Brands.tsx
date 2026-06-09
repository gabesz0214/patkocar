import React from "react";

// 1. AUTÓKOZMETIKAI MÁRKÁK
function DeturnerLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-9 w-auto" fill="currentColor">
      {/* Sleek Diamond Emblem */}
      <path d="M 15 5 L 25 22.5 L 15 40 L 5 22.5 Z" className="text-white/60 group-hover:text-amber-500 transition-colors duration-300" />
      <path d="M 15 12 L 20 22.5 L 15 33 L 10 22.5 Z" className="fill-[#121318] group-hover:fill-white transition-colors duration-300" />
      {/* Styled Text */}
      <text x="35" y="27" fontSize="18" fontWeight="900" letterSpacing="0.2em" className="fill-white/75 group-hover:fill-white font-sans transition-colors duration-300">
        DETURNER
      </text>
      <text x="35" y="38" fontSize="7" fontWeight="700" letterSpacing="0.4em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        Premium Detailing
      </text>
    </svg>
  );
}

function K2Logo() {
  return (
    <svg viewBox="0 0 120 45" className="h-9 w-auto" fill="currentColor">
      {/* Racing Slanted Shield */}
      <polygon points="5,5 45,5 35,40 5,40" className="text-white/60 group-hover:text-red-600 transition-colors duration-300" />
      {/* White 'K' inside the shield */}
      <path d="M 14 12 L 20 12 L 20 20 L 25 12 L 31 12 L 24 22 L 32 33 L 26 33 L 20 24 L 20 33 L 14 33 Z" className="fill-[#121318] group-hover:fill-white transition-colors duration-300" />
      {/* '2' and 'PRO' outside */}
      <text x="48" y="32" fontSize="30" fontWeight="900" className="fill-white/75 group-hover:fill-yellow-400 italic transition-colors duration-300">
        2
      </text>
      <text x="70" y="30" fontSize="10" fontWeight="800" className="fill-white/40 group-hover:fill-white tracking-widest transition-colors duration-300">
        CAR CARE
      </text>
    </svg>
  );
}

function KochChemieLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-9 w-auto" fill="currentColor">
      {/* Chemistry flask / emblem */}
      <circle cx="20" cy="22.5" r="16" className="text-white/60 group-hover:text-sky-500 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="20" y="27" fontSize="13" fontWeight="900" textAnchor="middle" className="fill-white/75 group-hover:fill-sky-500 transition-colors duration-300">
        Kcx
      </text>
      {/* Koch Chemie text */}
      <text x="44" y="22" fontSize="14" fontWeight="800" letterSpacing="0.05em" className="fill-white/75 group-hover:fill-white font-sans transition-colors duration-300">
        Koch Chemie
      </text>
      <text x="44" y="34" fontSize="8" fontWeight="600" letterSpacing="0.25em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        ExcellenceForExperts
      </text>
    </svg>
  );
}

function TurtleWaxLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-9 w-auto" fill="currentColor">
      {/* Green Turtle Shell outline */}
      <path d="M 20 5 C 10 5 6 12 6 22 C 6 32 10 39 20 39 C 30 39 34 32 34 22 C 34 12 30 5 20 5 Z" className="text-white/60 group-hover:text-emerald-600 transition-colors duration-300" />
      <path d="M 20 10 C 14 10 11 15 11 22 C 11 29 14 34 20 34 C 26 34 29 29 29 22 C 29 15 26 10 20 10 Z" className="fill-[#121318] group-hover:fill-white transition-colors duration-300" />
      <path d="M 20 14 C 18 14 16 17 16 22 C 16 27 18 30 20 30 C 22 30 24 27 24 22 C 24 17 22 14 20 14 Z" className="text-white/60 group-hover:text-emerald-600 transition-colors duration-300" />
      {/* Text */}
      <text x="44" y="23" fontSize="16" fontWeight="900" letterSpacing="0.05em" className="fill-white/75 group-hover:fill-white transition-colors duration-300">
        Turtle
      </text>
      <text x="44" y="36" fontSize="11" fontWeight="800" letterSpacing="0.2em" className="fill-white/60 group-hover:fill-emerald-600 uppercase transition-colors duration-300">
        Wax
      </text>
    </svg>
  );
}

// 2. GUMIABRONCS MÁRKÁK
function PirelliLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-8 w-auto" fill="currentColor">
      {/* Iconic elongated P stretching over the text */}
      <path d="M 5 36 L 14 36 L 14 16 L 68 16 C 90 16 102 11 102 5 L 5 5 Z" className="text-white/60 group-hover:text-red-600 transition-colors duration-300" />
      <path d="M 16 36 L 24 36 L 24 20 L 16 20 Z" className="fill-white/75 group-hover:fill-white transition-colors duration-300" />
      <text x="24" y="36" fontSize="22" fontWeight="900" letterSpacing="-0.02em" className="fill-white/75 group-hover:fill-white italic font-serif transition-colors duration-300">
        IRELLI
      </text>
      <text x="106" y="30" fontSize="8" fontWeight="700" letterSpacing="0.3em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        TYRES
      </text>
    </svg>
  );
}

function NexenLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-8 w-auto" fill="currentColor">
      {/* Purple Tire tread arrow */}
      <path d="M 10 5 L 25 22.5 L 10 40 L 22 40 L 37 22.5 L 22 5 Z" className="text-white/60 group-hover:text-purple-600 transition-colors duration-300" />
      <path d="M 23 5 L 38 22.5 L 23 40 L 29 40 L 44 22.5 L 29 5 Z" className="text-white/45 group-hover:text-purple-400 transition-colors duration-300" />
      {/* Nexen text */}
      <text x="48" y="27" fontSize="20" fontWeight="900" letterSpacing="0.08em" className="fill-white/75 group-hover:fill-white font-sans transition-colors duration-300">
        NEXEN
      </text>
      <text x="48" y="37" fontSize="8" fontWeight="700" letterSpacing="0.35em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        NEXEN TIRE
      </text>
    </svg>
  );
}

function ToyoLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-8 w-auto" fill="currentColor">
      {/* Bold styled text TOYO TIRES */}
      <text x="5" y="28" fontSize="23" fontWeight="950" className="fill-white/75 group-hover:fill-white tracking-tighter italic transition-colors duration-300">
        TOYO
      </text>
      <text x="72" y="28" fontSize="23" fontWeight="950" className="fill-white/60 group-hover:fill-sky-500 tracking-tighter italic transition-colors duration-300">
        TIRES
      </text>
      <text x="5" y="39" fontSize="8" fontWeight="700" letterSpacing="0.45em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        driven to perform
      </text>
    </svg>
  );
}

function KumhoLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-8 w-auto" fill="currentColor">
      {/* Red Kumho Wing */}
      <path d="M 5 5 L 25 5 L 15 35 L 5 35 Z" className="text-white/60 group-hover:text-red-600 transition-colors duration-300" />
      <path d="M 20 5 L 35 5 L 30 20 L 15 20 Z" className="text-white/45 group-hover:text-red-500 transition-colors duration-300" opacity="0.8" />
      {/* Kumho text */}
      <text x="42" y="25" fontSize="18" fontWeight="900" letterSpacing="0.05em" className="fill-white/75 group-hover:fill-white transition-colors duration-300">
        KUMHO
      </text>
      <text x="42" y="37" fontSize="10" fontWeight="800" letterSpacing="0.25em" className="fill-white/60 group-hover:fill-red-600 uppercase transition-colors duration-300">
        TYRE
      </text>
    </svg>
  );
}

function FalkenLogo() {
  return (
    <svg viewBox="0 0 160 45" className="h-8 w-auto" fill="currentColor">
      {/* Slanted Teal/Blue Bars representing Falken wings */}
      <path d="M 5 35 L 12 5 L 22 5 L 15 35 Z" className="text-white/60 group-hover:text-teal-500 transition-colors duration-300" />
      <path d="M 18 35 L 25 5 L 35 5 L 28 35 Z" className="text-white/45 group-hover:text-blue-500 transition-colors duration-300" />
      {/* Falken text */}
      <text x="42" y="30" fontSize="22" fontWeight="900" className="fill-white/75 group-hover:fill-white italic tracking-tight font-sans transition-colors duration-300">
        FALKEN
      </text>
      <text x="42" y="40" fontSize="7" fontWeight="700" letterSpacing="0.3em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        High Performance Tyres
      </text>
    </svg>
  );
}

// 3. FELNI MÁRKÁK
function MomoLogo() {
  return (
    <svg viewBox="0 0 140 45" className="h-8 w-auto" fill="currentColor">
      {/* Momo bold block yellow text */}
      <rect x="5" y="5" width="130" height="35" rx="4" className="text-white/10 group-hover:text-yellow-500 transition-colors duration-300" />
      <text x="70" y="30" fontSize="22" fontWeight="950" textAnchor="middle" className="fill-white/75 group-hover:fill-black transition-colors duration-300" letterSpacing="0.05em">
        momo
      </text>
      <text x="70" y="38" fontSize="6" fontWeight="900" textAnchor="middle" className="fill-white/40 group-hover:fill-black transition-colors duration-300 uppercase" letterSpacing="0.4em">
        Italy
      </text>
    </svg>
  );
}

function BBSLogo() {
  return (
    <svg viewBox="0 0 140 45" className="h-9 w-auto" fill="currentColor">
      {/* BBS in classic bold serif font with double offset outline */}
      <text x="70" y="33" fontSize="32" fontWeight="950" textAnchor="middle" className="fill-white/75 group-hover:fill-amber-500 font-serif italic tracking-tighter transition-colors duration-300" stroke="#7f1d1d" strokeWidth="0">
        BBS
      </text>
      <text x="70" y="41" fontSize="7" fontWeight="800" textAnchor="middle" className="fill-white/40 group-hover:fill-slate-400 uppercase tracking-widest transition-colors duration-300">
        Kraftrad
      </text>
    </svg>
  );
}

function MakLogo() {
  return (
    <svg viewBox="0 0 140 45" className="h-8 w-auto" fill="currentColor">
      {/* Sharp geometric MAK */}
      <path d="M 10 5 L 22 5 L 28 22 L 34 5 L 46 5 L 46 40 L 37 40 L 37 18 L 31 32 L 25 32 L 19 18 L 19 40 L 10 40 Z" className="text-white/75 group-hover:text-white transition-colors duration-300" />
      <path d="M 50 40 L 58 5 L 68 5 L 76 40 L 66 40 L 64 30 L 54 30 L 52 40 Z M 56 22 L 62 22 L 59 12 Z" className="text-white/75 group-hover:text-rose-600 transition-colors duration-300" />
      <path d="M 82 5 L 91 5 L 91 20 L 102 5 L 114 5 L 102 22 L 115 40 L 103 40 L 91 25 L 91 40 L 82 40 Z" className="text-white/75 group-hover:text-white transition-colors duration-300" />
    </svg>
  );
}

function OzLogo() {
  return (
    <svg viewBox="0 0 140 45" className="h-8 w-auto" fill="currentColor">
      {/* O.Z. Racing logo */}
      <circle cx="20" cy="22.5" r="15" className="text-white/60 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 12 12 L 28 12 L 28 16 L 20 28 L 28 28 L 28 32 L 12 32 L 12 28 L 20 16 L 12 16 Z" className="text-white/60 group-hover:text-red-600 transition-colors duration-300" />
      <text x="42" y="27" fontSize="24" fontWeight="950" className="fill-white/75 group-hover:fill-white tracking-tight transition-colors duration-300">
        RACING
      </text>
      <text x="42" y="37" fontSize="8" fontWeight="800" letterSpacing="0.3em" className="fill-white/40 group-hover:fill-slate-400 uppercase transition-colors duration-300">
        wheels
      </text>
    </svg>
  );
}

function DezentLogo() {
  return (
    <svg viewBox="0 0 140 45" className="h-7 w-auto" fill="currentColor">
      {/* DEZENT in clean wide font */}
      <text x="70" y="32" fontSize="24" fontWeight="900" textAnchor="middle" className="fill-white/75 group-hover:fill-white tracking-widest font-sans transition-colors duration-300">
        DEZENT
      </text>
      <line x1="10" y1="38" x2="130" y2="38" stroke="currentColor" strokeWidth="2.5" className="text-white/20 group-hover:text-slate-500 transition-colors duration-300" />
    </svg>
  );
}

interface BrandItem {
  name: string;
  component: React.ComponentType;
}

interface BrandCategory {
  title: string;
  brands: BrandItem[];
}

const CATEGORIES: BrandCategory[] = [
  {
    title: "FORGALMAZOTT AUTÓKOZMETIKAI MÁRKÁK",
    brands: [
      { name: "Deturner", component: DeturnerLogo },
      { name: "K2", component: K2Logo },
      { name: "Koch-Chemie", component: KochChemieLogo },
      { name: "Turtle Wax", component: TurtleWaxLogo },
    ],
  },
  {
    title: "PRÉMIUM ÉS MINŐSÉGI GUMIABRONCSOK",
    brands: [
      { name: "Pirelli", component: PirelliLogo },
      { name: "Nexen Tire", component: NexenLogo },
      { name: "Toyo Tires", component: ToyoLogo },
      { name: "Kumho Tyre", component: KumhoLogo },
      { name: "Falken", component: FalkenLogo },
    ],
  },
  {
    title: "NÉPSZERŰ FELNI MÁRKÁINK",
    brands: [
      { name: "Momo Italy", component: MomoLogo },
      { name: "BBS", component: BBSLogo },
      { name: "Mak Performance", component: MakLogo },
      { name: "O.Z. Racing", component: OzLogo },
      { name: "Dezent", component: DezentLogo },
    ],
  },
];

export function Brands() {
  return (
    <section className="bg-[#0b0c0f] border-t border-border/40 py-12 md:py-16 overflow-hidden relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container-px mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3 animate-pulse">
            Partnerhálózat
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Kiemelt Prémium Márkáink
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              {/* Category Title & Separator */}
              <div className="flex items-center gap-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 shrink-0">
                  {cat.title}
                </h3>
                <div className="h-[1px] w-full bg-linear-to-r from-primary/30 to-transparent" />
              </div>

              {/* Brands Grid Layout */}
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                {cat.brands.map((brand, bIdx) => {
                  const LogoComponent = brand.component;
                  return (
                    <div
                      key={bIdx}
                      className="w-full flex items-center justify-center py-3 px-5 md:py-3.5 md:px-6 bg-[#121318] border border-border/20 rounded-2xl transition-all duration-300 ease-out cursor-pointer hover:border-primary/40 hover:bg-[#16171d] active:scale-98 shadow-sm hover:shadow-glow/10 group"
                      title={brand.name}
                    >
                      <div className="w-full flex items-center justify-center transition-all duration-300 filter brightness-0 invert opacity-70 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-110">
                        <LogoComponent />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
