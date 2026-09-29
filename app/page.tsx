import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Pricing />
      <ServiceArea />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
