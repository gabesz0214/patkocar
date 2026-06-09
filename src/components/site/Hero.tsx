import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-logo-bg.jpg";
import mobileTexture from "@/assets/mobile-texture.png";
import { SzechenyiBanner } from "./SzechenyiBanner";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-gradient text-ink-foreground min-h-[calc(100vh-4.5rem+3rem)] md:min-h-[calc(100vh-4.5rem+4rem)] flex flex-col justify-start">
      <div className="absolute inset-0">
        <img
          src={mobileTexture}
          alt="Patkó-Car Kft textúrázott háttér"
          width={1920}
          height={1280}
          className="block md:hidden h-full w-full object-cover object-center transition-all duration-300"
        />
        <img
          src={heroImg}
          alt="Patkó-Car Kft céglogós háttér"
          width={1920}
          height={1280}
          className="hidden md:block h-full w-full object-cover object-center transition-all duration-300"
        />
        {/* Dark overlay: solid on mobile/tablet for readability, gradient on desktop to expose the golden logo on the right */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/75 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/55 lg:to-black/25" />
      </div>

      <div className="w-full container-px relative mx-auto max-w-7xl pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl md:-mt-3 lg:-mt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Vásárosnamény · Márkafüggetlen
          </span>
          <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl">
            Profi gumiszerviz és hidraulika,{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              ahol a biztonságod az első.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            Gumi- és gyorsszerviz, felnijavítás és azonnali hidraulika tömlő gyártás Vásárosnaményban.
            Precíz munka, modern eszközökkel, rejtett költségek nélkül.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#idopont"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl md:rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] w-full sm:w-auto"
            >
              Online Időpontkérés
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#szolgaltatasok"
              className="inline-flex items-center justify-center gap-2 rounded-2xl md:rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 w-full sm:w-auto"
            >
              Szolgáltatások böngészése
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Garancia minden elvégzett munkára
          </div>
        </div>
      </div>
    </section>
  );
}
