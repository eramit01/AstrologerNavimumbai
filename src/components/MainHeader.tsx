"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Moon, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const NAVIGATION_MENU = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Marriage Services",
        href: "/services",
        dropdown: [
            { name: "Marriage Specialist", href: "/#love-marriage-astrology" },
            { name: "Late Marriage Solution", href: "/#love-marriage-astrology" },
            { name: "Family Problem Solution", href: "/#love-marriage-astrology" },
        ],
    },
    {
        name: "Horoscope",
        href: "/services",
        dropdown: [
            { name: "Horoscope", href: "/#kundli-matching" },
            { name: "Kundali Making", href: "/#kundli-matching" },
            { name: "Horoscope Reading", href: "/#kundli-matching" },
            { name: "Palm Reading", href: "/#palm-reading" },
            { name: "Numerologist", href: "/#numerology-specialist" },
        ],
    },
    {
        name: "Puja & Vastu",
        href: "/services",
        dropdown: [
            { name: "Vastu Consultant", href: "/#vastu-specialist" },
            { name: "Pandit For Puja", href: "/#pandit-for-puja" },
            { name: "Shubh Muhurats", href: "/#shubh-muhurats" },
            { name: "Grah Pravesh", href: "/#shubh-muhurats" },
            { name: "Gemstone Specialist", href: "/#gemstone-consultation" },
        ],
    },
    {
        name: "Career",
        href: "/services",
        dropdown: [
            { name: "Job Problem Solution", href: "/#career-job-problems" },
            { name: "Business Problem Solution", href: "/#business-finance" },
        ],
    },
    { name: "Contact", href: "/contact" },
];

export default function MainHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null); // Reset dropdowns on close/open
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav
            className={cn(
                "sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300",
                scrolled ? "shadow-lg py-1 border-b border-orange-100" : "border-b border-gray-100 py-3"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 md:h-20 items-center justify-between">
                    {/* Logo Section */}
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                        <div className="relative h-12 w-32 md:h-24 md:w-64 transition-transform hover:scale-105 duration-300">
                            <img
                                src="/Logos/mainLogo.png"
                                alt="Astrologer in Navi Mumbai"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 items-center justify-center gap-2 xl:gap-8">
                        {NAVIGATION_MENU.filter(item => item.name !== "Contact").map((item) => (
                            <div
                                key={item.name}
                                className="relative group px-3 py-3"
                            >
                                {item.dropdown ? (
                                    <>
                                        <button
                                            className="flex items-center gap-1.5 text-[15px] font-bold text-slate-700 hover:text-orange-600 transition-colors tracking-wide group-hover:bg-orange-50 px-3 py-1.5 rounded-lg whitespace-nowrap"
                                        >
                                            {item.name}
                                            <ChevronDown className="h-4 w-4 stroke-[3px] transition-transform duration-300 group-hover:rotate-180 text-orange-400 group-hover:text-orange-600" />
                                        </button>
                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                                            <div className="bg-white rounded-2xl shadow-xl border border-orange-100/80 overflow-hidden py-2 ring-1 ring-black/5 transform origin-top w-full">
                                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-6 py-3.5 text-sm font-semibold text-slate-600 hover:bg-orange-50 hover:text-orange-700 transition-all border-l-4 border-transparent hover:border-orange-500 whitespace-nowrap"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-[15px] font-bold text-slate-700 hover:text-orange-600 transition-colors block tracking-wide hover:bg-orange-50 px-3 py-1.5 rounded-lg whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Section: CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://wa.me/919323600011?text=Hello%20Panditji,%20I%20want%20to%20book%20an%20appointment.%20%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AA%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%A4%E0%A4%9C%E0%A5%80,%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%85%E0%A4%AA%E0%A5%89%E0%A4%87%E0%A4%82%E0%A4%9F%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
                            target="_blank"
                            className="hidden lg:inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 shadow-md shadow-orange-100 whitespace-nowrap"
                        >
                            <Calendar className="h-4 w-4" />
                            <span>Book Appointment</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-8 w-8" />
                            ) : (
                                <Menu className="h-8 w-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden fixed inset-x-0 top-[64px] md:top-20 bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out origin-top",
                    isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 invisible"
                )}
            >
                <div className="px-6 py-6 space-y-3">
                    {NAVIGATION_MENU.map((item) => (
                        <div key={item.name} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => toggleDropdown(item.name)}
                                        className="flex w-full items-center justify-between py-3 text-lg font-bold text-gray-900"
                                    >
                                        {item.name}
                                        <ChevronDown
                                            className={cn(
                                                "h-6 w-6 text-gray-500 transition-transform duration-200 stroke-[3px]",
                                                activeDropdown === item.name && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    <div
                                        className={cn(
                                            "pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
                                            activeDropdown === item.name ? "max-h-[500px] opacity-100 pb-3" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-3 text-base font-semibold text-gray-600 hover:text-orange-600 pl-4 border-l-2 border-gray-100 hover:border-orange-500"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-3 text-lg font-bold text-gray-900 hover:text-orange-600"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
