import Elsewhere from "@/components/Elsewhere";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-0 md:mx-20">
        <Hero />
        <Skills />
        <Projects />
        <Elsewhere />
        <Footer />
      </div>
    </div>
  );
}
