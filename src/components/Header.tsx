"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Moon } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Moon className="h-6 w-6 text-primary-600" fill="currentColor" />
                            <span className="text-xl font-bold tracking-tight text-primary-900">
                                Navi Mumbai Astrologer
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {NAVIGATION_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-primary-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={`tel:${CONTACT_INFO.phone}`}
                            className={cn(
                                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                                "bg-primary-600 text-white shadow hover:bg-primary-700 h-9 px-4 py-2 gap-2"
                            )}
                        >
                            <Phone className="h-4 w-4" />
                            <span className="hidden lg:inline">Call Now</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center p-2 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-primary-900" />
                        ) : (
                            <Menu className="h-6 w-6 text-primary-900" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background p-4 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        {NAVIGATION_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium hover:text-primary-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={`tel:${CONTACT_INFO.phone}`}
                            className="flex items-center justify-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
