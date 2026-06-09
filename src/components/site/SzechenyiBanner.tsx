import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Award, FileText, Landmark, Cpu, ShieldAlert } from "lucide-react";
import szechenyiLogoImg from "../../assets/szechenyi-logo.png";

// Helper for drawing the EU flag
function EUFlag({ width = 54, height = 36 }: { width?: number; height?: number }) {
  const starsCount = 12;
  const cx = width / 2;
  const cy = height / 2;
  const r = height * 0.25;
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    const angle = (i * 2 * Math.PI) / starsCount - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    const starScale = height / 36;
    stars.push(
      <path
        key={i}
        d="M 0,-2.5 L 0.75,-0.75 L 2.5,-0.75 L 1.12,0.37 L 1.57,2.12 L 0,1.06 L -1.57,2.12 L -1.12,0.37 L -2.5,-0.75 L -0.75,-0.75 Z"
        fill="#FFCC00"
        transform={`translate(${x}, ${y}) scale(${starScale})`}
      />
    );
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="shrink-0 border border-slate-200 rounded-sm">
      <rect width={width} height={height} fill="#003399" />
      {stars}
    </svg>
  );
}

// Helper for drawing the Hungarian Coat of Arms
function HungarianCoatOfArms({ height = 48 }: { height?: number }) {
  const width = (height * 32) / 42;
  return (
    <svg width={width} height={height} viewBox="0 0 32 42" className="shrink-0" fill="none">
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
      <path d="M22 25 H24 V27 H22 Z" fill="#FFD700" />
      <path d="M23 15 H24 V25 H23 Z M21 17 H26 V18.5 H21 Z M21.5 20 H25.5 V21.5 H21.5 Z" fill="#FFFFFF" />
      
      {/* Golden border */}
      <path d="M8 12 H24 V24 C24 30 16 35 16 35 C16 35 8 30 8 24 Z" stroke="#D4AF37" strokeWidth="1" />
    </svg>
  );
}

// Helper for drawing the Szechenyi Terv Swoosh
function SzechenyiLogo({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className="shrink-0" fill="none">
      <path
        d="M20 5 C28 5 35 12 35 20 C35 28 28 35 20 35 C12 35 5 28 5 20 C5 15 10 10 15 8 C12 11 10 15 10 20 C10 26 14 30 20 30 C26 30 30 26 30 20 C30 14 26 10 20 10"
        stroke="#228B22"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 13 C24 13 27 16 27 20 C27 24 24 27 20 27"
        stroke="#0055A5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SzechenyiBanner({ className }: { className?: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const equipment = [
    "Msi Katana GF66 12UD.",
    "FASEP RASE. 2249 - Szuperautomata kerékszerelő segédkarral.",
    "BRIGHT LC885N AUTOMATA KERÉKSZERELŐ",
    "FASEP RGU56E.XL TEHERSZERELŐ",
    "JEMA JA3000S-E MOBIL 8425 OLLÓS EMELŐ",
  ];

  return (
    <>
      {/* Clickable exact image banner next to brand logo */}
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setModalOpen(true);
        }}
        className={className || "hidden md:block shrink-0 cursor-pointer select-none bg-white p-1 rounded border border-zinc-200 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all ml-1 md:ml-2"}
        title="Pályázati információk megnyitása"
      >
        <img
          src={szechenyiLogoImg}
          alt="Széchenyi Terv Plusz - Európai Unió"
          className="h-7 md:h-8 w-auto object-contain block"
        />
      </div>

      {/* Elegant Modal Backdrop */}
      {modalOpen && mounted && createPortal(
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          {/* Modal Container */}
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-2.5 transition-colors z-50"
              aria-label="Bezárás"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10">
              {/* Poster Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                <div className="flex items-center gap-2">
                  <SzechenyiLogo size={32} />
                  <div className="flex flex-col leading-none">
                    <span className="text-xs font-black tracking-tight text-[#0055A5]">SZÉCHENYI</span>
                    <span className="text-[9px] font-extrabold tracking-widest text-[#228B22]">TERV</span>
                    <span className="text-[8px] font-bold text-slate-500">PLUSZ</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <HungarianCoatOfArms height={34} />
                  <div className="hidden sm:flex flex-col leading-none text-left">
                    <span className="text-[8px] font-extrabold tracking-wider text-slate-700">MAGYARORSZÁG</span>
                    <span className="text-[7px] font-bold text-slate-400">KORMÁNYA</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex flex-col text-right leading-none mr-1.5">
                    <span className="text-[8px] font-extrabold text-[#003399]">EURÓPAI UNIÓ</span>
                    <span className="text-[7px] text-slate-400 font-semibold mt-0.5 max-w-[80px]">
                      Társfinanszírozta az Európai Unió
                    </span>
                  </div>
                  <EUFlag width={42} height={28} />
                </div>
              </div>

              {/* Title Section */}
              <div className="my-8 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0055A5] block mb-2">PÁLYÁZAT</span>
                <h3 className="text-lg font-black tracking-tight leading-snug text-slate-800 uppercase">
                  Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél
                </h3>
              </div>

              {/* Official Text Content (Word-for-word as requested) */}
              <div className="space-y-5 text-sm text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200/60 leading-relaxed">
                <div>
                  <strong className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Kedvezményezett</strong>
                  <p className="font-extrabold text-slate-800">
                    A kedvezményezett neve: PATKÓ-CAR Gépjárműjavító, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság
                  </p>
                </div>

                <ul className="space-y-3 font-semibold text-slate-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0055A5] mt-1 shrink-0">•</span>
                    <span>A projekt címe: Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0055A5] mt-1 shrink-0">•</span>
                    <span>A szerződött támogatás összege: 9,06 millió Ft.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0055A5] mt-1 shrink-0">•</span>
                    <span>Projekt azonosítószáma: GINOP_PLUSZ-1.2.2-22-2022-02216.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0055A5] mt-1 shrink-0">•</span>
                    <span>A támogatás mértéke (%-ban): 70%-ban.</span>
                  </li>
                  <li className="flex items-start gap-2 flex-col">
                    <div className="flex items-start gap-2">
                      <span className="text-[#0055A5] mt-1 shrink-0">•</span>
                      <span>A projekt tartalmának bemutatása: A projekt célja az alábbi fejlesztések megvalósítása:</span>
                    </div>
                    
                    {/* Equipment sub-list */}
                    <div className="mt-2 pl-6 w-full">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Eszközbeszerzés:</span>
                      <ul className="space-y-1.5 font-medium text-slate-700 text-xs">
                        {equipment.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                            <span className="text-[#228B22] shrink-0 font-bold">–</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Official footer decoration inside modal */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-[10px] text-slate-400">
                <span className="font-extrabold tracking-widest text-[#003399] uppercase">BEFEKTETÉS A JÖVŐBE</span>
                <span className="font-extrabold text-[#228B22]">Széchenyi Terv Plusz</span>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100 shrink-0">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-[#003399] hover:bg-[#002266] text-white font-bold text-xs py-3 px-6 rounded-full transition-colors tracking-wider uppercase"
              >
                Megértettem / Bezárás
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
