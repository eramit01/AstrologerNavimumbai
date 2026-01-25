import { ZODIAC_SIGNS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function ZodiacSection() {
    return (
        <section className="py-20 bg-white text-gray-900" id="zodiac-guidance">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-900 uppercase tracking-wide inline-block relative">
                        Zodiac Sign Guidance
                        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg font-medium mt-4">
                        Discover your destiny with localized reading.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {ZODIAC_SIGNS.map((sign, index) => (
                        <Link
                            key={index}
                            href={`/zodiac/${sign.name.toLowerCase()}`}
                            className="flex flex-col items-center text-center bg-white rounded-2xl p-4 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/20 group"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-3 relative h-14 w-14 p-2 bg-gray-50 rounded-full group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                                <Image
                                    src={sign.icon}
                                    alt={sign.name}
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-sm font-bold text-gray-900 group-hover:text-orange-700 transition-colors mb-1">
                                {sign.name}
                            </h3>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold group-hover:text-orange-500/80">
                                {sign.dates}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
