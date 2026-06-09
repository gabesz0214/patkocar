import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PalyazatContent } from "@/components/site/PalyazatContent";

export const Route = createFileRoute("/palyazat")({
  head: () => ({
    meta: [
      { title: "Pályázat – Patkó Car" },
      { name: "description", content: "Magyar Falu Vállalkozás-újraindítási Program a Patkó Car Kft-nél. GINOP_PLUSZ-1.2.2-22-2022-02216." },
    ],
  }),
  component: PalyazatPage,
});

function PalyazatPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />
        <main className="py-12 md:py-20">
          <PalyazatContent />
        </main>
      </div>
      <Footer />
    </div>
  );
}
