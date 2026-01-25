import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TESTIMONIALS = [
    { image: "/ReviewImg/rv.png" },
    { image: "/ReviewImg/rv1.png" },
    { image: "/ReviewImg/rv3.png" },
    { image: "/ReviewImg/rv4.png" },
    { image: "/ReviewImg/rv6.png" },
    { image: "/ReviewImg/rv7.png" },
];

export default function Testimonials({ area = "Navi Mumbai" }: { area?: string }) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold mb-4 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        What Our Clients in {area} Say
                    </h2>
                    <p className="text-gray-600 font-medium text-lg">
                        Trusted by thousands of families. Read our genuine reviews.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center">

                            {/* Google Header */}
                            <div className="w-full flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-2">
                                    {/* Google G Logo */}
                                    <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="https://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z" fill="#EA4335" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-700 text-xs">Google Reviews</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-3 w-3 fill-orange-500 text-orange-500" />
                                    ))}
                                </div>
                            </div>

                            {/* Review Image - Full Visibility - No Animation */}
                            <div className="relative w-full h-auto bg-gray-100 rounded-lg overflow-hidden border border-gray-100 p-1">
                                <Image
                                    src={t.image}
                                    alt="Client Review"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain rounded"
                                />
                            </div>

                        </div>
                    ))}
                </div>

                {/* Central View on Google Button */}
                <div className="flex justify-center">
                    <Link
                        href="#" // Link to Google Profile
                        className="inline-flex items-center justify-center gap-3 text-base font-bold text-gray-700 bg-white border border-gray-200 px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="https://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z" fill="#EA4335" />
                        </svg>
                        <span>See All Reviews on Google</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
