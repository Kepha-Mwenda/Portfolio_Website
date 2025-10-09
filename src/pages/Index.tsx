import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactChat from "@/components/ContactChat";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Navigation />
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
      <ScrollToTop />
    </>
  );
};

export default Index;
