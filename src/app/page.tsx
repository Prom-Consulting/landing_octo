import Navbar from "@/components/Navbar";
import KineticBackground from "@/components/KineticBackground";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import Segments from "@/components/Segments";
import Migration from "@/components/Migration";
import AIAssistant from "@/components/AIAssistant";
import Pricing from "@/components/Pricing";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Login from "@/components/Login";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <KineticBackground />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Capabilities />
      <Segments />
      <Migration />
      <AIAssistant />
      <Pricing />
      <Cases />
      <Testimonials />
      <Faq />
      <Login />
      <CTA />
      <Footer />
    </main>
  );
}
