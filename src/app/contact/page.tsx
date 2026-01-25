import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-primary-900 text-center">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <div className="bg-primary-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-secondary-500 shadow-sm">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Phone</h3>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-secondary-600">
                                        {CONTACT_INFO.phone}
                                    </a>
                                    <p className="text-sm text-gray-500">Available 9 AM - 9 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-secondary-500 shadow-sm">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Email</h3>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-secondary-600">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-secondary-500 shadow-sm">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Location</h3>
                                    <p className="text-gray-600">
                                        Sector 17, Vashi,<br />
                                        Navi Mumbai, Maharashtra 400703
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                                placeholder="Your Phone"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-secondary-500 text-primary-950 font-bold py-3 rounded-md hover:bg-secondary-400 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
