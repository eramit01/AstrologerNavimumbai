import { MetadataRoute } from "next";
import { NAVI_MUMBAI_AREAS } from "@/lib/constants";

const BASE_URL = "https://astrologerinnavimumbai.com"; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/contact",
        "/book-appointment",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const areaRoutes = NAVI_MUMBAI_AREAS.map((area) => ({
        url: `${BASE_URL}/astrologer-in-${area.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...areaRoutes];
}
