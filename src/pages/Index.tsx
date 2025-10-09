import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactChat from "@/components/ContactChat";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <ContactChat />
    </main>
  );
};

export default Index;
