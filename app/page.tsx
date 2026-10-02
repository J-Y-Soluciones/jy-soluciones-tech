import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showroom from "@/components/Showroom";
import TrustSection from "@/components/TrustSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Showroom />
      <TrustSection />
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
