import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Reveals from "@/components/Reveals";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <Header />
      <main id="main" className="main">
        <Hero />
        <Statement />
        <Work />
        <Marquee />
        <Services />
        <About />
      </main>
      <Contact />
      <Reveals />
    </>
  );
}
