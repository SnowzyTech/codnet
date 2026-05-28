"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Users, CreditCard, MessageSquare, Globe } from "lucide-react"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    icon: Database,
    title: "Custom CRM Systems",
    description:
      "Built around how your business actually operates. Not a generic tool imported from America and adapted poorly for Nigeria. A system your team will actually use because it was built for your specific workflow.",
  },
  {
    icon: Users,
    title: "Lead Management Systems",
    description:
      "Capture every lead automatically the moment it comes in. Assign to the right person. Follow up on a schedule without anyone having to remember. Give management real-time visibility into everything happening in the pipeline.",
  },
  {
    icon: CreditCard,
    title: "Payment and Subscriber Tracking",
    description:
      "Manage installment payments and subscriber schedules. Send automatic WhatsApp reminders before payments are due. Generate and send receipts automatically. Track exactly who has paid, who is behind, and how much is outstanding — in real time.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business Automation",
    description:
      "Connect your business operations to WhatsApp — the platform your customers and team already live on. Automatic responses. Scheduled follow-ups. Broadcast messaging. All integrated with your business system.",
  },
  {
    icon: Globe,
    title: "Web and Mobile Applications",
    description:
      "Custom-built for your specific business needs. Not a template. Built from scratch around exactly what your business requires.",
  },
]

export function ServicesClient() {
  const [isLoading, setIsLoading] = useState(true)

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeIn" },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-white rounded-full animate-spin" />
            <p className="text-slate-300">Loading services...</p>
          </div>
        </div>
      )}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => setIsLoading(false)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="text-center mb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900"
        >
          <h1 className="text-5xl font-bold italic text-white mb-6">What We Build</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
            Custom systems built for how Nigerian businesses actually operate — not generic tools that almost fit.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} custom={index} variants={cardVariants} className="flex h-full">
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="mt-40 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-cyan-900/80 rounded-lg p-12 border border-blue-700/50 text-center max-w-7xl mx-auto backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Fix How Your Business Operates?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">Tell us what's broken. We'll build the system that fixes it.</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.section>
    </>
  )
}
