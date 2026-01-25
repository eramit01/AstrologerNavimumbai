"use client";

import { CONTACT_INFO } from "@/lib/constants";

export default function TrustStrip() {
    // Combine all messages into one single sentence string
    const fullMessage = `📞 Call/WhatsApp Now for Personalized Guidance! ${CONTACT_INFO.phone} | 30+ Years Trusted Experience, Puja-Paath, Kundali Matching, Accurate Horoscope, Gemstones, Vastu for Home/Business | Serving Navi Mumbai – Transform Your Life Today!`;

    return (
        <div className="w-full bg-orange-500 text-white overflow-hidden py-2.5 border-b border-orange-600 relative z-30">
            <div className="pause-on-hover flex whitespace-nowrap overflow-hidden">
                <div className="animate-marquee flex gap-[100vw] items-center min-w-full pl-4">
                    {/* Display message once, then a large gap (handled by gap in parent), then repeat */}
                    <span className="text-sm md:text-[15px] font-medium tracking-wide inline-block">
                        {fullMessage}
                    </span>
                    <span className="text-sm md:text-[15px] font-medium tracking-wide inline-block">
                        {fullMessage}
                    </span>
                </div>
            </div>
        </div>
    );
}
