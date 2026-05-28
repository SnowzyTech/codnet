import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://coddnet.com.ng", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://coddnet.com.ng/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://coddnet.com.ng/case-studies", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://coddnet.com.ng/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://coddnet.com.ng/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}
