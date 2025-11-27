"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// Service cards that float in 3D space
const services = [
  { title: "Web Development", description: "Custom websites built for performance", x: -35, y: -25, z: 100 },
  { title: "Sales Funnels", description: "Convert visitors into customers", x: 35, y: -20, z: 120 },
  { title: "E-commerce", description: "Online stores that drive sales", x: -40, y: 15, z: 80 },
  { title: "UI/UX Design", description: "Beautiful, intuitive interfaces", x: 40, y: 20, z: 90 },
  { title: "SEO Optimization", description: "Rank higher, get found", x: -25, y: 35, z: 110 },
  { title: "Brand Strategy", description: "Build a memorable identity", x: 30, y: 38, z: 70 },
]

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePosition({ x, y })
    }

    const container = containerRef.current
    container?.addEventListener("mousemove", handleMouseMove)
    return () => container?.removeEventListener("mousemove", handleMouseMove)
  }, [isDesktop])

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

  // Calculate 3D rotation based on mouse position
  const rotateX = mousePosition.y * -15
  const rotateY = mousePosition.x * 15

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />

      {/* Mobile/Tablet - Standard Hero */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden text-center max-w-4xl mx-auto px-4 py-20"
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
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-blue-500/50 transition-all w-full sm:w-auto"
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

      {/* Desktop - 3D Interactive Experience */}
      <div
        className="hidden lg:flex flex-col items-center justify-center w-full h-screen"
        style={{ perspective: "1200px" }}
      >
        {/* 3D Scene Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Central Content */}
          <div
            className="text-center z-10 px-4"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(50px)",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl xl:text-7xl font-black mb-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                style={{ transform: "translateZ(80px)" }}
              >
                BUILD
              </span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 my-2"
                style={{ transform: "translateZ(60px)" }}
              >
                LAUNCH
              </span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600"
                style={{ transform: "translateZ(40px)" }}
              >
                GROW
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-slate-300 text-lg max-w-xl mx-auto mb-8"
              style={{ transform: "translateZ(30px)" }}
            >
              We create high-performance websites and strategic sales funnels that convert visitors into loyal
              customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 justify-center"
              style={{ transform: "translateZ(20px)" }}
            >
              <Link href="/projects">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  View Our Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-slate-900 border-2 border-blue-500/50 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 transition-colors">
                  Get a Quote
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Service Cards in 3D Space */}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: "backOut" }}
              className="absolute w-48 p-4 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:scale-110 transition-all cursor-pointer"
              style={{
                left: `calc(44% + ${service.x}%)`,
                top: `calc(40% + ${service.y}%)`,
                transform: `translate(-50%, -50%) translateZ(${service.z}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-white font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-slate-400 text-xs">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Instruction text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 text-slate-500 text-sm"
        >
          Move your cursor to explore the 3D space
        </motion.p>
      </div>
    </section>
  )
}
