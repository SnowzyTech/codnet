"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  }

  return (
    <>
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 py-20 relative overflow-hidden"
        >
          {/* Gradient accent elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl relative z-10"
          >
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 mb-8 md:-mt-0 -mt-30">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Launch Your Success</span>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 text-balance leading-tight"
            >
              Build, Launch, and Grow Your Online Presence
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-300 mb-8 text-balance leading-relaxed max-w-2xl mx-auto"
            >
              We create high-performance websites and strategic sales funnels that convert visitors into loyal
              customers. Let's build your digital success story together.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-blue-500/50 transition-all w-full sm:w-auto"
                >
                  View Our Work
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-900 border-2 border-blue-500/50 text-white px-8 py-3 rounded-lg font-semibold text-base hover:border-blue-500 transition-colors w-full sm:w-auto"
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="bg-gradient-to-r from-blue-950/50 via-slate-900 to-cyan-950/50 max-w-7xl rounded mx-auto py-16 border-t border-slate-700 mt-[-10px] border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-300 text-sm font-semibold uppercase tracking-wide mb-12">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              {[
                { name: "Nutriticare", initials: "NC" },
                { name: "MySkinclinics", initials: "MS" },
                { name: "NutrihealthConsult", initials: "NH" },
                { name: "KeresGhost", initials: "KG" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="w-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center border border-slate-600 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex flex-col items-center gap-1 p-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                      {company.initials}
                    </div>
                    <span className="text-slate-300 text-xs font-medium text-center px-2">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
