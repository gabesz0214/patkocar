import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Galeria } from "@/components/site/Galeria";
import { BookingForm } from "@/components/site/BookingForm";
import { Brands } from "@/components/site/Brands";
import { Footer } from "@/components/site/Footer";

import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = "Patkó Car – Gumi-, Gyorsszerviz és Hidraulika Vásárosnamény";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Galeria />
        <BookingForm />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
