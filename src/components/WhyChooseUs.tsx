import { CheckCircle2, Shield, Users, Clock } from "lucide-react";

const FEATURES = [
    {
        title: "30+ Years Experience",
        description: "Deep knowledge of Vedic astrology with thousands of accurate predictions.",
        icon: Clock
    },
    {
        title: "Accurate Predictions",
        description: "Scientific approach to horoscope analysis for precise future insights.",
        icon: CheckCircle2
    },
    {
        title: "100% Confidential",
        description: "Your personal details and consultation discussions remain strictly private.",
        icon: Shield
    },
    {
        title: "Trusted by Locals",
        description: "The most recommended astrologer by families across Navi Mumbai.",
        icon: Users
    }
];

interface WhyChooseUsProps {
    area?: string;
}

export default function WhyChooseUs({ area = "Navi Mumbai" }: WhyChooseUsProps) {
    return (
        <section className="py-20 bg-orange-50 border-t border-orange-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        Why Choose Us in {area}?
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        We combine ancient Vedic wisdom with a practical approach to provide effective solutions for modern life problems for families in {area}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 bg-orange-50/30 rounded-2xl border border-orange-100/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-orange-600 shadow-sm mb-6 border border-orange-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-orange-200">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-orange-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {feature.title === "Trusted by Locals" ? `The most recommended astrologer by families across ${area}.` : feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
