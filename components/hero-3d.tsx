"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  }

  return (
    <section
      ref={containerRef}
      className="min-h-[82vh] pt-7 pb-6 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-x-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />

      {/* Mobile/Tablet - Standard Hero */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4 pt-6 sm:pt-12 md:pt-16 pb-6"
      >
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Launch Your Success</span>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black text-white mb-6 text-balance leading-tight"
        >
          Build, Launch, and Grow Your Online Presence
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 mb-8 text-balance leading-relaxed max-w-2xl mx-auto"
        >
          We create high-performance websites and strategic sales funnels that convert visitors into loyal customers.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r cursor-pointer from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-blue-500/50 transition-all w-full sm:w-auto"
            >
              View Our Work
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900 border-2 border-blue-500/50 text-white px-8 py-3 rounded-lg font-semibold text-base hover:border-blue-500 transition-colors w-full sm:w-auto"
            >
              Get a Quote
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
