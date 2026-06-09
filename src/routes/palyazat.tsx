import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PalyazatContent } from "@/components/site/PalyazatContent";

import { useEffect } from "react";

export const Route = createFileRoute("/palyazat")({
  component: PalyazatPage,
});

function PalyazatPage() {
  useEffect(() => {
    document.title = "Pályázat – Patkó Car";
  }, []);
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
