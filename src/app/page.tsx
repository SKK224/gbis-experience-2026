import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

import Solutions from "@/components/sections/Solutions";
import WhyGBIS from "@/components/sections/WhyGBIS";

import SchoolFlowShowcase from "@/components/sections/SchoolFlowShowcase";
import ClientFlowShowcase from "@/components/sections/ClientFlowShowcase";
import HRFlowShowcase from "@/components/sections/HRFlowShowcase";
import InsightBIShowcase from "@/components/sections/InsightBIShowcase";

import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Solutions />

        <WhyGBIS />

        <SchoolFlowShowcase />

        <ClientFlowShowcase />

        <HRFlowShowcase />

        <InsightBIShowcase />

        <Contact />
      </main>
    </>
  );
}