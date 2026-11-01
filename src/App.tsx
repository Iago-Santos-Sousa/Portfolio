import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

/** Composto raiz: a página é a composição de layout + seções. */
export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-100 rounded-full bg-primary-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
