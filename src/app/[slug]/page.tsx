import { NAVI_MUMBAI_AREAS } from "@/lib/constants";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MobileCTABar from "@/components/MobileCTABar";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import ZodiacSection from "@/components/ZodiacSection";
import GemstonesSection from "@/components/GemstonesSection";
import AreasServed from "@/components/AreasServed";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Helper to slugify
const toSlug = (text: string) => `astrologer-in-${text.toLowerCase().replace(/\s+/g, '-')}`;

// Helper to get area from slug
const fromSlug = (slug: string) => {
    if (!slug || !slug.startsWith("astrologer-in-")) return null;
    const areaSlug = slug.replace("astrologer-in-", "");
    // Find matching area (case insensitiveish but we generated it from the list)
    return NAVI_MUMBAI_AREAS.find(
        (area) => area.toLowerCase().replace(/\s+/g, '-') === areaSlug
    );
};

export async function generateStaticParams() {
    return NAVI_MUMBAI_AREAS.map((area) => ({
        slug: toSlug(area),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const area = fromSlug(slug);

    if (!area) return { title: "Page Not Found" };

    const currentYear = new Date().getFullYear();

    return {
        title: `Best Astrologer in ${area} | Trusted & Expert Services ${currentYear}`,
        description: `Looking for the Best Astrologer in ${area}? Get expert guidance for Marriage, Career, Business & Health problems. 30+ Years Experience. 100% Confidential. Book Appointment Now!`,
        alternates: {
            canonical: `/${slug}`
        }
    };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const area = fromSlug(slug);

    if (!area) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Hero area={area} />



            <AboutSection area={area} />
            <Services />
            <GemstonesSection />
            <ZodiacSection />
            <WhyChooseUs area={area} />
            <AreasServed />
            <Testimonials area={area} />
            <FAQ area={area} />
            <CTASection area={area} />
            <MobileCTABar />
        </div>
    );
}
