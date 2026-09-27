import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import TechCms from "@/components/TechCms";
import Projects from "@/components/Projects";
import LiveOps from "@/components/LiveOps";
import AiExpertise from "@/components/AiExpertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Automation />
        <TechCms />
        <Projects />
        <LiveOps />
        <AiExpertise />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
