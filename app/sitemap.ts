import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.coddnet.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.coddnet.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.coddnet.com/case-studies", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.coddnet.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.coddnet.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}