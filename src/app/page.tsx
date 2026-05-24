import { Interventions } from "@/components/Interventions";
import { Contact } from "@/components/Contact";
import { FAQSection } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { SeoArticle } from "@/components/SeoArticle";
import { Services } from "@/components/Services";
import { StickyPhone } from "@/components/StickyPhone";
import { Tarifs } from "@/components/Tarifs";
import { WhyUs } from "@/components/WhyUs";
import { Zones } from "@/components/Zones";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Tarifs />
        <WhyUs />
        <Interventions />
        <Zones />
        <Reviews />
        <SeoArticle />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <StickyPhone />
    </>
  );
}
