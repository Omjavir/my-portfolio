import Elsewhere from "@/components/Elsewhere";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-0 md:mx-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Elsewhere />
        <Footer />
      </div>
    </div>
  );
}
