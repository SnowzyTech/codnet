import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies — Nigerian Business Systems Built by Coddnet",
  description:
    "See how Coddnet has built CRM systems, lead management tools, and clinic management platforms for Nigerian businesses. Real problems. Real systems. Real results.",
  alternates: { canonical: "https://coddnet.com.ng/case-studies" },
  openGraph: {
    title: "Case Studies | Coddnet Nigeria",
    description: "Real systems built for real Nigerian businesses — health, real estate, and e-commerce.",
    url: "https://coddnet.com.ng/case-studies",
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
