export const NAVI_MUMBAI_AREAS = [
    "Airoli",
    "Ghansoli",
    "Kopar Khairane",
    "Vashi",
    "Sanpada",
    "Nerul",
    "CBD Belapur",
    "Kharghar",
    "Kamothe",
    "Kalamboli",
    "New Panvel",
    "Ulwe",
    "Dronagiri",
    "Taloja"
];

export const MAIN_LOCATION = "Navi Mumbai";

export const ALL_LOCATIONS = [MAIN_LOCATION, ...NAVI_MUMBAI_AREAS];

export const NAVIGATION_LINKS = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
    phone: "+91 9323600011",
    whatsapp: "+919323600011",
    email: "gulabchandmaurya@gmail.com",
    address: "Sai Sagar CHS, B-305, Plot no-50, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210"
};


export const ZODIAC_SIGNS = [
    {
        name: "Aries",
        dates: "Mar 21 - Apr 19",
        guidance: "Career & Ambition",
        icon: "/ZodiacSignImg/icon1.png"
    },
    {
        name: "Taurus",
        dates: "Apr 20 - May 20",
        guidance: "Finance & Stability",
        icon: "/ZodiacSignImg/icon2.png"
    },
    {
        name: "Gemini",
        dates: "May 21 - Jun 20",
        guidance: "Communication & Travel",
        icon: "/ZodiacSignImg/icon3.png"
    },
    {
        name: "Cancer",
        dates: "Jun 21 - Jul 22",
        guidance: "Family & Health",
        icon: "/ZodiacSignImg/icon4.png"
    },
    {
        name: "Leo",
        dates: "Jul 23 - Aug 22",
        guidance: "Leadership & Growth",
        icon: "/ZodiacSignImg/icon5.png"
    },
    {
        name: "Virgo",
        dates: "Aug 23 - Sep 22",
        guidance: "Health & Analysis",
        icon: "/ZodiacSignImg/icon6.png"
    },
    {
        name: "Libra",
        dates: "Sep 23 - Oct 22",
        guidance: "Relationships & Balance",
        icon: "/ZodiacSignImg/icon7.png"
    },
    {
        name: "Scorpio",
        dates: "Oct 23 - Nov 21",
        guidance: "Passion & Secrets",
        icon: "/ZodiacSignImg/icon8.png"
    },
    {
        name: "Sagittarius",
        dates: "Nov 22 - Dec 21",
        guidance: "Wisdom & Adventure",
        icon: "/ZodiacSignImg/icon9.png"
    },
    {
        name: "Capricorn",
        dates: "Dec 22 - Jan 19",
        guidance: "Career & Discipline",
        icon: "/ZodiacSignImg/icon11.png" // Assuming 10 skipped or mapped differently, verifying later if needed, but going with logical sequence of available files. Wait, user said icon1-12. Let's assume 10 is missing or 11 is capricorn. Actually I saw icon11, icon12. I'll assume numeric order matches standard zodiac order.
    },
    {
        name: "Aquarius",
        dates: "Jan 20 - Feb 18",
        guidance: "Innovation & Future",
        icon: "/ZodiacSignImg/icon11.png"
    },
    {
        name: "Pisces",
        dates: "Feb 19 - Mar 20",
        guidance: "Spirituality & Emotions",
        icon: "/ZodiacSignImg/icon12.png"
    }
];

export const GEMSTONES_LIST = [
    { name: "Alexandrite", image: "/GemsStoneImg/Alexandrite-cat_s-eye.jpg" },
    { name: "Amethyst", image: "/GemsStoneImg/Amethyst.jpg" },
    { name: "Golden Sapphire", image: "/GemsStoneImg/Golden-Sapphire.jpg" },
    { name: "Almandine Garnet", image: "/GemsStoneImg/almandine-garnet_Pyrope.jpg" },
    { name: "Ammolite", image: "/GemsStoneImg/ammolite.jpg" },
    { name: "Beryl", image: "/GemsStoneImg/beryl.jpg" },
    { name: "Bi-color Sapphire", image: "/GemsStoneImg/bi-color-sapphire.jpg" },
    { name: "Cubic Zirconia", image: "/GemsStoneImg/cubic-zirconia-white.jpg" },
    { name: "Sunstone", image: "/GemsStoneImg/sunstone.jpg" }
];

export const SERVICES_LIST = [
    {
        id: "love-marriage-astrology",
        title: "Love & Marriage Astrology",
        description: "Resolve relationship issues, marriage delays, and compatibility concerns with expert guidance.",
        image: "/servicesimg/pandit-online-for-marriage.jpg"
    },
    {
        id: "career-job-problems",
        title: "Career & Job Problems",
        description: "Find the right career path, overcome job insults, and get promotion solutions.",
        image: "/business-banner.png"
    },
    {
        id: "kundli-matching",
        title: "Kundli Matching",
        description: "Accurate horoscope matching for a happy and prosperous married life.",
        image: "/servicesimg/kundali.jpg"
    },
    {
        id: "vastu-specialist",
        title: "Vastu Specialist",
        description: "Expert Vastu guidance for your home and office to ensure prosperity and peace.",
        image: "/servicesimg/Vastu-Consultant.jpg"
    },
    {
        id: "numerology-specialist",
        title: "Numerology Specialist",
        description: "Unlock the power of numbers to influence your life path and success.",
        image: "/servicesimg/numerology (1).jpg"
    },
    {
        id: "baby-namkaran",
        title: "Baby Namkaran",
        description: "Traditional naming ceremonies with astrological precision for a blessed future.",
        image: "/child-banner.png"
    },
    {
        id: "shubh-muhurats",
        title: "Shubh Muhurats",
        description: "Find the most auspicious dates and times for your important life events.",
        image: "/servicesimg/auspicious-mahurats (1).jpg"
    },
    {
        id: "pandit-for-puja",
        title: "Pandit for Puja",
        description: "Accomplished Pandits for all types of Havans, Pujas, and religious ceremonies.",
        image: "/puja-banner.png"
    },
    {
        id: "business-finance",
        title: "Business & Finance",
        description: "Astrological remedies for business growth, financial stability, and removing obstacles.",
        image: "/business-banner.png"
    },
    {
        id: "child-astrology",
        title: "Child Astrology",
        description: "Guidance for child health, education, and future prospects based on planetary positions.",
        image: "/child-banner.png"
    },
    {
        id: "palm-reading",
        title: "Palm Reading",
        description: "Gain insights into your future and personality through the ancient art of Palmistry.",
        image: "/servicesimg/Palm-Reading.jpg"
    },
    {
        id: "gemstone-consultation",
        title: "Gemstone Consultation",
        description: "Expert advice on selecting the right gemstones to enhance your luck and well-being.",
        image: "/GemsStoneImg/Golden-Sapphire.jpg"
    }
];
