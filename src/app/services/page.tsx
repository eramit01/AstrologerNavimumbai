import Services from "@/components/Services";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div>
            <div className="bg-primary-950 text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-primary-200 max-w-2xl mx-auto px-4">
                    Comprehensive Vedic Astrology solutions for all aspects of your life.
                </p>
            </div>

            <Services />

            <section className="py-16 bg-primary-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">Need Personalized Consultation?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-secondary-500 text-primary-950 px-8 py-3 rounded-full font-bold hover:bg-secondary-400 transition-colors"
                    >
                        Contact Now <MoveRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
