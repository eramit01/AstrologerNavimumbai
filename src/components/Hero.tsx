import Link from "next/link";
import { Star, ShieldCheck, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

interface HeroProps {
    area?: string;
}

export default function Hero({ area = "Navi Mumbai" }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-orange-50 text-gray-900 py-12 lg:py-16">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-200/40 via-white/0 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-orange-800 border border-orange-200 mb-6 shadow-sm backdrop-blur-sm">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <span className="tracking-wide">#1 Astrologer in {area}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 drop-shadow-sm leading-tight">
                    Best Astrologer in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">{area}</span>
                </h1>

                {/* Description */}
                <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                    With <span className="font-bold text-orange-700">30+ Years of Experience</span>, we are serving {area} & nearby areas with accurate predictions. Trusted by thousands for genuine guidance in Career, Marriage, Business & Health problems.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="group w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
                    >
                        Call Now: {CONTACT_INFO.phone}
                    </Link>
                    <Link
                        href="/book-appointment"
                        className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border-2 border-orange-100 bg-white px-8 text-base font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-orange-50 hover:border-orange-200 hover:-translate-y-1"
                    >
                        <span className="mr-2">Book Appointment</span>
                        <Clock className="h-5 w-5 text-orange-400" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
