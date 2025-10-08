import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactChat from "@/components/ContactChat";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <Skills />
      <Tools />
      <Certifications />
      <Projects />
      <ContactChat />
    </main>
  );
};

export default Index;
