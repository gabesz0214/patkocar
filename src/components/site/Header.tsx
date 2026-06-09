import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { SzechenyiBanner } from "./SzechenyiBanner";

const links = [
  { href: "/#", label: "Főoldal" },
  { href: "/#szolgaltatasok", label: "Szolgáltatásaink" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/#galeria", label: "Galéria" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
  { href: "/palyazat", label: "Pályázat" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/#");

  useEffect(() => {
    const handleScroll = () => {
      const path = location.pathname;
      if (path === "/palyazat") {
        setActiveLink("/palyazat");
        return;
      }

      const sections = ["home", "szolgaltatasok", "rolunk", "galeria", "kapcsolat"];
      
      // If we are at the very bottom of the page, highlight Kapcsolat
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveLink("/#kapcsolat");
        return;
      }

      let currentSection = "home";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
          }
        }
      }
      setActiveLink(currentSection === "home" ? "/#" : `/#${currentSection}`);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-900">
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <a href="/#" className="flex items-center gap-2.5 group shrink-0">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800 text-primary transition-transform group-hover:scale-105">
              <Wrench className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight text-white font-sans">Patkó Car</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">Gumi- és gyorsszerviz</span>
            </span>
          </a>
          <SzechenyiBanner />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeLink === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "text-primary bg-white/5"
                    : "text-zinc-300 hover:text-primary hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#idopont"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-100"
          >
            Időpontfoglalás
          </a>
          <button
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950 animate-fade-in">
          <nav className="container-px mx-auto max-w-7xl flex flex-col py-3">
            {links.map((l) => {
              const isActive = activeLink === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-white/5"
                      : "text-zinc-300 hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="/#idopont"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] active:scale-100 transition-transform"
            >
              Időpontfoglalás
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
