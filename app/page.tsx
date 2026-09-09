import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import CFDSimulations from "@/components/CFDSimulations";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Snapshot />
        <CFDSimulations />
        <Skills />
        <Workflow />
        <Projects />
        <Education />
        <Publications />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
