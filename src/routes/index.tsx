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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patkó Car – Prémium gumi- és gyorsszerviz Vásárosnamény" },
      { name: "description", content: "Prémium gumi- és gyorsszerviz, alufelni és lemezfelni javítás, azonnali hidraulika tömlő gyártás és autókozmetikai termékek Vásárosnaményban." },
      { property: "og:title", content: "Patkó Car – Prémium gumi- és gyorsszerviz" },
      { property: "og:description", content: "Gumiabroncs szerelés, felnijavítás és azonnali hidraulika tömlő roppantás Vásárosnaményban. Foglalj időpontot online." },
    ],
  }),
  component: Index,
});

function Index() {
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
