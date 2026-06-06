import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Coddnet — Nigerian Software Company",
  description:
    "Coddnet is a Nigerian software company that builds custom business management systems for African companies. We build CRMs, lead management tools, and automation software — not templates.",
  alternates: { canonical: "https://coddnet.com/about" },
  openGraph: {
    title: "About Coddnet | Nigerian Software Company",
    description: "We build custom software for Nigerian businesses — CRMs, lead management, payment systems, and WhatsApp automation.",
    url: "https://coddnet.com/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
