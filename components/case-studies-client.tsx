"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

interface Project {
  id: number
  title: string
  category: string
  image: string
  link: string
  client: string
  industry: string
  problem: string
  built: string
  result: string
}

interface CaseStudiesClientProps {
  allProjects: Project[]
  categories: string[]
}

export function CaseStudiesClient({ allProjects, categories }: CaseStudiesClientProps) {
  const [activeCategory, setActiveCategory] = useState("All Work")
  const [isLoading, setIsLoading] = useState(true)

  const filteredProjects =
    activeCategory === "All Work" ? allProjects : allProjects.filter((p) => p.category === activeCategory)

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
          Real systems built for real Nigerian businesses. Here's the problem, what we built, and what changed after.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={categoryVariants}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} link={project.link} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
