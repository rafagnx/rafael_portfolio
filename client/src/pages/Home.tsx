import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

