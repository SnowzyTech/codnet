import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Coddnet — Talk To Us On WhatsApp",
  description:
    "Get in touch with Coddnet to discuss building a custom CRM, lead management system, or business automation tool for your Nigerian company. WhatsApp preferred.",
  alternates: { canonical: "https://coddnet.com.ng/contact" },
  openGraph: {
    title: "Contact Coddnet | Nigerian Software Company",
    description: "Send us a WhatsApp message or fill the contact form. Let's discuss building a system for your business.",
    url: "https://coddnet.com.ng/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
