import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {


  metadataBase: new URL("https://coddnet.com"),
  title: {
    default: "Coddnet | Custom Business Software & CRM Systems in Nigeria",
    template: "%s | Coddnet",
  },
  description:
    "Coddnet builds custom CRM systems, lead management software, WhatsApp automation, and payment tracking tools for Nigerian businesses. Built for how Africa operates.",
  keywords: [
    "CRM Nigeria",
    "lead management system Nigeria",
    "custom business software Nigeria",
    "real estate CRM Nigeria",
    "WhatsApp automation Nigeria",
    "business management software Nigeria",
    "custom CRM Africa",
    "payment tracking system Nigeria",
    "software company Nigeria",
    "Coddnet",
  ],
  authors: [{ name: "Coddnet", url: "https://coddnet.com" }],
  creator: "Coddnet",
  publisher: "Coddnet",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://coddnet.com",
    siteName: "Coddnet",
    title: "Coddnet | Custom Business Software & CRM Systems in Nigeria",
    description:
      "We build custom CRMs, lead management systems, WhatsApp automation, and payment tracking tools for Nigerian businesses that have outgrown WhatsApp and Excel.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coddnet — Custom Business Software for Nigerian Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coddnet | Custom Business Software & CRM Systems in Nigeria",
    description:
      "Custom CRM systems, lead management software, and WhatsApp automation for Nigerian businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

   verification: {
    google: 'bjUOJEg819krObgwDVzecsiF-ZGlgzUQt6RJo7Af1UU',  // ADD THIS
  },
  
  alternates: {
    canonical: "https://coddnet.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <head>
        <link rel="canonical" href="https://coddnet.com" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Nigeria" />
        <meta name="language" content="English" />
      </head>
      <body className={`${inter.className} font-sans antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coddnet",
              url: "https://coddnet.com",
              logo: "https://coddnet.com/logo.png",
              description:
                "Nigerian software company that builds custom CRM systems, lead management software, WhatsApp automation, and payment tracking tools for African businesses.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2347034912012",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
              sameAs: [
                "https://www.linkedin.com/company/codnet-ng/",
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
