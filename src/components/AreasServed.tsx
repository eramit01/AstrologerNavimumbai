"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { NAVI_MUMBAI_AREAS } from "@/lib/constants";

export default function AreasServed() {
    return (
        <section className="py-16 bg-white border-t border-orange-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-3xl font-bold mb-4 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        Serving All Areas in Navi Mumbai
                    </h2>
                    <p className="text-gray-600 font-medium">
                        Expert astrological guidance available across all major locations.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {NAVI_MUMBAI_AREAS.map((area) => (
                        <Link
                            key={area}
                            href={`/astrologer-in-${area.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center justify-center p-4 bg-orange-50 rounded-xl border border-orange-100 transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <MapPin className="h-4 w-4 mr-2 text-orange-600 group-hover:text-white transition-colors" />
                            <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-white transition-colors">
                                {area}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
