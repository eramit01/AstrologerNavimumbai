import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MobileCTABar from "@/components/MobileCTABar";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import ZodiacSection from "@/components/ZodiacSection";
import GemstonesSection from "@/components/GemstonesSection";
import { NAVI_MUMBAI_AREAS } from "@/lib/constants";
import Link from "next/link";
import { MapPin } from "lucide-react";
import AreasServed from "@/components/AreasServed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />

      {/* Intro Section */}
      <AboutSection />

      <Services />

      <GemstonesSection />

      <ZodiacSection />

      <WhyChooseUs />

      {/* Internal Linking / Areas Served */}

      <AreasServed />

      <Testimonials />
      <FAQ />
      <CTASection />
      <MobileCTABar />
    </div>
  );
}
