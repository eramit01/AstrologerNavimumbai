"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SERVICES_LIST = [
    "Marriage & Relationship Solutions",
    "Child Astrology & Future Guidance",
    "Kundali Matching & Horoscope Reading",
    "Name Suggestion for Newborns",
    "Vastu Consultation for Home & Business",
    "Gemstone & Rudraksha Recommendations",
];

interface AboutSectionProps {
    area?: string;
}

export default function AboutSection({ area = "Navi Mumbai" }: AboutSectionProps) {
    return (
        <section className="bg-white py-12 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left Side: Image */}
                    <div className="relative h-full min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10 order-first border-4 border-white/50">
                        <Image
                            src="/AboutImg.png"
                            alt={`Wise Indian Astrologer offering guidance in ${area}`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                30+ Years of <span className="text-orange-900">Trusted Experience in {area}</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                Helping thousands of families in {area} find clarity and peace through ancient Vedic wisdom.
                            </p>
                        </div>

                        {/* Services List */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-100 shadow-sm">
                            <h3 className="text-lg font-bold text-orange-900 mb-4 border-b border-orange-200 pb-2">
                                Expertise & Solutions:
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {SERVICES_LIST.map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                                        <span className="text-base text-gray-800 font-medium">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-700 italic border-l-4 border-orange-500 pl-4 py-1 font-medium text-lg bg-orange-50/50 rounded-r-lg">
                                "Accurate guidance, practical remedies, and honest solutions that bring peace, clarity, and positive results."
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a
                                    href="tel:+919323600011"
                                    className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700 hover:-translate-y-1 hover:shadow-xl group"
                                >
                                    Get Personal Consultation
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="tel:+919323600011"
                                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-bold text-gray-800 hover:text-orange-800 hover:bg-white/50 transition-colors border border-gray-300 hover:border-orange-200"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
