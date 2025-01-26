import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Faqs from "@/components/Faqs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
    </>
  );
}
