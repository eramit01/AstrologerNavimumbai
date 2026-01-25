"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "How quickly can I expect results after the consultation?",
        answer: "Many clients in experienced positive changes within 21-45 days. However, results vary based on individual horoscopes and dedication."
    },
    {
        question: "Are the astrological remedies expensive or difficult to follow?",
        answer: "Not at all. We focus on simple, practical, and affordable remedies like Mantra chanting and lifestyle changes that easily fit into your daily routine."
    },
    {
        question: "Do you offer online consultations for clients?",
        answer: "Yes, we provide highly accurate online consultations via Video Call (Zoom/WhatsApp) and Phone for clients unable to visit our center."
    },
    {
        question: "Is my personal birth detail and discussion kept confidential?",
        answer: "Your privacy is our top priority. All discussions, birth details, and personal problems shared during the consultation remain 100% confidential and secure."
    },
    {
        question: "Can astrology help with career gaps or job loss?",
        answer: "Yes, astrology can pinpoint the planetary causes for career setbacks. We provide specific remedies to strengthen your 10th house (Career) to attract new opportunities."
    }
];

export default function FAQ({ area = "Navi Mumbai" }: { area?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-12 bg-white relative">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-900 uppercase tracking-wide inline-block border-b-2 border-orange-500 pb-1">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-gray-600 font-medium">
                        Quick answers to your consultations in {area}.
                    </p>
                </div>

                <div className="space-y-3">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-lg px-5 py-0 transition-all duration-300 overflow-hidden",
                                openIndex === index
                                    ? "bg-orange-50 border-orange-300 shadow-sm"
                                    : "bg-white border-orange-100 hover:border-orange-300 hover:bg-orange-50/30"
                            )}
                        >
                            <button
                                className="flex w-full items-center justify-between py-3 text-left font-semibold text-gray-800 transition-all"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={cn("text-base md:text-lg", openIndex === index ? "text-orange-800" : "text-gray-700")}>
                                    {faq.question.includes("clients") ? faq.question.replace("clients", `clients in ${area}`) : faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden text-sm md:text-base text-gray-600 transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-40 pb-3 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="pt-1 border-t border-orange-200/50 mt-1">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
