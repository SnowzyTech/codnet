import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services — CRM, Lead Management & WhatsApp Automation",
  description:
    "Coddnet builds custom CRM systems, lead management platforms, WhatsApp business automation, and payment tracking tools for Nigerian companies across real estate, health, and e-commerce.",
  alternates: { canonical: "https://coddnet.com/services" },
  openGraph: {
    title: "Business Software Services | Coddnet Nigeria",
    description: "Custom CRM, lead management, WhatsApp automation, and payment tracking — built for Nigerian businesses.",
    url: "https://coddnet.com/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
