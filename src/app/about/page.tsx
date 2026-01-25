import { Star, Award, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary-900 text-center">About Us</h1>

            <div className="prose prose-lg mx-auto text-gray-700">
                <p className="lead text-xl text-center mb-12">
                    With over 15 years of dedicated practice, we successfully guide individuals through life's challenges using the ancient wisdom of Vedic Astrology.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16 not-prose">
                    <div className="text-center p-6 bg-primary-50 rounded-xl">
                        <Award className="h-10 w-10 mx-auto text-secondary-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                        <p className="text-sm">Certified astrologer with deep knowledge of planets and horoscopes.</p>
                    </div>
                    <div className="text-center p-6 bg-primary-50 rounded-xl">
                        <Users className="h-10 w-10 mx-auto text-secondary-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">5000+ Clients</h3>
                        <p className="text-sm">Trusted by families across Navi Mumbai and Maharashtra.</p>
                    </div>
                    <div className="text-center p-6 bg-primary-50 rounded-xl">
                        <Star className="h-10 w-10 mx-auto text-secondary-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Genuine Remedies</h3>
                        <p className="text-sm">Practical and effective solutions without unnecessary rituals.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-primary-800">Our Mission</h2>
                <p>
                    Our mission is to bring peace and clarity to people's lives. We believe that astrology is not just about prediction, but about guidance. By understanding the planetary influences, we empower you to make better decisions in your career, relationships, and personal growth.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary-800">Why Navi Mumbai Chooses Us</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Detailed and accurate Horoscope Analysis</li>
                    <li>Specific solutions for Job and Business growth</li>
                    <li>Expertise in Match Making and Marriage Consultation</li>
                    <li>Vastu Shastra Consultation for Homes and Offices</li>
                    <li>Complete confidentiality and privacy</li>
                </ul>
            </div>
        </div>
    );
}
