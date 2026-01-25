import { SERVICES_LIST } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <section className="py-16 bg-orange-50 text-gray-900" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        Our Expert Astrology Services
                    </h2>
                    <p className="text-gray-800 text-lg md:text-xl font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive astrological solutions tailored to your life's unique journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_LIST.map((service, index) => (
                        <div
                            key={index}
                            id={service.id}
                            className="flex flex-col rounded-xl overflow-hidden shadow-lg scroll-mt-28"
                        >
                            {/* Image Section with White Border Effect */}
                            <div className="bg-white p-2 pb-0">
                                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section with Gradient */}
                            <div className="flex flex-col flex-grow p-6 bg-gradient-to-br from-yellow-50 to-orange-50 relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-b border-orange-200 pb-4">
                                    {service.description}
                                </p>

                                {/* CTA Button - Orange Style */}
                                <a
                                    href="tel:+919323600011"
                                    className="inline-flex items-center justify-center self-start bg-orange-500 text-white text-sm font-bold uppercase tracking-wider py-2 px-6 rounded hover:bg-orange-600 transition-colors shadow-md"
                                >
                                    Know More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
