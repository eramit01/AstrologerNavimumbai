import Link from "next/link";
import { Moon, MapPin, Phone, Mail } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO, SERVICES_LIST, NAVI_MUMBAI_AREAS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white border-t border-orange-600/30">
            <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-10">
                    {/* Brand - Full width on mobile */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4 md:space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <Moon className="h-6 w-6 md:h-8 md:w-8 text-orange-500 group-hover:text-orange-400 transition-colors" fill="currentColor" />
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-orange-50 transition-colors">
                                Navi Mumbai <span className="text-orange-500">Astrologer</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Providing accurate astrological predictions and Vedic solutions in Navi Mumbai for over 15 years.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm text-gray-300">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:w-3 transition-all shrink-0"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Our Services</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm text-gray-300">
                            {SERVICES_LIST.slice(0, 5).map((service) => (
                                <li key={service.title}>
                                    <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover:w-3 transition-all shrink-0"></span>
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - Full width on mobile/tablet or just flow? 
                        User asked for "quick links and contact us colom show in one row if you can adjust then show three section in one row".
                        Trying 3 cols in one row on mobile:
                    */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1 mt-2 md:mt-0">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white border-b-2 border-orange-500 inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <span className="mt-1 leading-relaxed text-xs md:text-sm">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-400 transition-colors font-medium text-base md:text-lg">{CONTACT_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500/20 transition-colors shrink-0">
                                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                </div>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-400 transition-colors break-all text-xs md:text-sm">{CONTACT_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Locations List (SEO) */}
                <div className="mt-16 pt-10 border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Serving Areas in Navi Mumbai</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                        {NAVI_MUMBAI_AREAS.map((area, index) => (
                            <span key={area} className="flex items-center gap-2">
                                <Link href={`/astrologer-in-${area.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-orange-400 transition-colors">
                                    Astrologer in {area}
                                </Link>
                                {index < NAVI_MUMBAI_AREAS.length - 1 && <span className="text-gray-700">|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Navi Mumbai Astrologer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
