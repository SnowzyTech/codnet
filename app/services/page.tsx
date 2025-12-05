"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Zap, Palette, Smartphone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom-built websites using modern technologies and best practices. Fully responsive, optimized for speed, and designed for conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Seamless user experiences with modern design and robust performance.",
  },
  {
    icon: Zap,
    title: "Sales Funnel Design",
    description:
      "Strategic sales funnels that guide customers through the buying journey. Optimized for maximum conversions and customer lifetime value.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that engage users and drive action. User-centered design that combines aesthetics with functionality.",
  },
]

export default function Services() {
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
      <Header />
      <main className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen">
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
              We offer comprehensive solutions tailored to help your business succeed online.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={index} custom={index} variants={cardVariants}>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start a Project?</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">Let's work together to bring your ideas to life.</p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
