import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

interface CTASectionProps {
    area?: string;
}

export default function CTASection({ area = "Navi Mumbai" }: CTASectionProps) {
    return (
        <section className="py-16 md:py-20 bg-orange-50 text-gray-900 border-t border-orange-100">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto mb-10">
                    <h2 className="text-xl font-bold text-orange-600 uppercase tracking-widest mb-3">
                        Astrology Consultation
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Are you looking for best astrologer in {area}?
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                        Consult top astrologer in {area} to resolve your issues and get rid from all problems to make your life simple & happy!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-orange-600 text-white px-8 text-lg font-bold shadow-lg shadow-orange-600/20 transition-transform hover:scale-105 hover:bg-orange-700"
                    >
                        <Phone className="mr-2 h-5 w-5 fill-current" />
                        Call Now: {CONTACT_INFO.phone}
                    </Link>
                    <Link
                        href="https://wa.me/919323600011?text=Hello%20Panditji,%20I%20want%20to%20book%20an%20appointment.%20%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%89%E0%A4%87%E0%A4%82%E0%A4%9F%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
                        target="_blank"
                        className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 text-lg font-semibold text-gray-700 transition-colors hover:border-orange-500 hover:text-orange-600"
                    >
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Appointment
                    </Link>
                </div>
            </div>
        </section>
    );
}
