import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import TechCms from "@/components/TechCms";
import Projects from "@/components/Projects";
import AiExpertise from "@/components/AiExpertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Automation />
        <TechCms />
        <Projects />
        <AiExpertise />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
