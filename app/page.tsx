import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImageStrip from "@/components/ImageStrip";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import LazyMarquee from "@/components/motion/LazyMarquee";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Separate Suspense boundaries let React hydrate the page in small chunks after the hero has painted
          (selective hydration), instead of one long task that delays first paint. Nothing here suspends,
          so the server HTML is unchanged. */}
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <ImageStrip />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <Process />
      </Suspense>
      <Suspense>
        <Testimonials />
      </Suspense>
      <Suspense>
        <LazyMarquee />
      </Suspense>
      <Suspense>
        <TechStack />
      </Suspense>
      <Suspense>
        <Team />
      </Suspense>
      <Suspense>
        <WhyUs />
      </Suspense>
      <Suspense>
        <FAQ />
      </Suspense>
      <Suspense>
        <CTA />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
