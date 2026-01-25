"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function BookAppointmentPage() {
    return (
        <div className="min-h-screen bg-orange-50">
            {/* Hero Section */}
            <div className="bg-orange-900 text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
                    <p className="text-orange-100 max-w-2xl mx-auto">
                        Connect with the best astrologer in Navi Mumbai for insightful guidance on your life's path.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
                            <h2 className="text-2xl font-bold mb-6 text-orange-900">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-orange-50 rounded-full text-orange-600 shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-orange-600 font-medium transition-colors block">
                                            {CONTACT_INFO.phone}
                                        </a>
                                        <p className="text-sm text-gray-400 mt-1">Available 9 AM - 9 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-orange-50 rounded-full text-orange-600 shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-orange-600 font-medium transition-colors block">
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-orange-50 rounded-full text-orange-600 shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">
                                            {CONTACT_INFO.address.split(',').map((part, index) => (
                                                <span key={index} className="block">
                                                    {part.trim()}{index < CONTACT_INFO.address.split(',').length - 1 ? ',' : ''}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                        <h2 className="text-2xl font-bold mb-2 text-orange-900">Send Message</h2>
                        <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you shortly.</p>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-orange-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
