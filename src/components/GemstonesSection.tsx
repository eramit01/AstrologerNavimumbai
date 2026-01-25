"use client";

import { GEMSTONES_LIST, CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function GemstonesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -250 : 250;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
            const index = Math.round(scrollPercentage * (GEMSTONES_LIST.length - 1));
            // Ensure index is within bounds
            setActiveIndex(Math.min(Math.max(index, 0), GEMSTONES_LIST.length - 1));
        }
    };

    return (
        <section className="py-16 bg-orange-50 text-gray-900 overflow-hidden relative" id="gemstones">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-900 uppercase tracking-wide">
                        Gemstone Specialist <span className="text-orange-600">in Navi Mumbai</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium">
                        We obtain 100% Government Lab Certified Gemstones
                    </p>
                    <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mt-4" />
                </div>

                <div className="relative group">
                    {/* Scroll Buttons - Visible on Desktop */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-orange-900 hover:bg-orange-100 hidden md:flex items-center justify-center border border-orange-100 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-orange-900 hover:bg-orange-100 hidden md:flex items-center justify-center border border-orange-100 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Slider Container */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-5 py-6 px-2 scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {GEMSTONES_LIST.map((gem, index) => (
                            <div
                                key={index}
                                className="flex-none w-[170px] md:w-[200px] flex flex-col items-center bg-white rounded-2xl p-4 border border-orange-100 shadow-sm snap-start hover:shadow-lg transition-all duration-300 group/card"
                            >
                                {/* Image */}
                                <div className="relative h-36 w-full mb-4 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 group-hover/card:scale-105 transition-transform duration-500">
                                    <Image
                                        src={gem.image}
                                        alt={gem.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-sm font-bold text-gray-900 text-center uppercase tracking-wider mb-3 h-8 flex items-center justify-center">
                                    {gem.name}
                                </h3>

                                {/* Phone Contact - Brand Identity */}
                                <div className="mt-auto flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full text-orange-700 border border-orange-200 group-hover/card:bg-orange-600 group-hover/card:text-white transition-colors duration-300">
                                    <Phone className="h-3 w-3 fill-current" />
                                    <span className="text-[10px] font-bold tracking-wide">{CONTACT_INFO.phone}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {GEMSTONES_LIST.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "w-6 bg-orange-500"
                                    : "w-1.5 bg-orange-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
