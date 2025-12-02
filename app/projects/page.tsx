"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const allProjects = [
  {
    id: 1,
    title: "NutriHealth - Wellness",
    category: "Web Development",
    image: "/nutrihealth.jpg",
    link: "https://nutriticare.vercel.app/",
  },
  {
    id: 2,
    title: "MySkin Aesthetics - Beauty Clinic",
    category: "Web Development",
    image: "/myskinaeshetics.jpg",
    link: "https://www.myskinaestheticsclinic.com/",
  },

  {
    id: 3,
    title: "Shushiman - Japanese Restaurant",
    category: "Web Development",
    image: "/japanese.png",
    link: "https://japanese-restaurantt.netlify.app/",
  },

  {
    id: 4,
    title: "Regime - Dermatology Skincare",
    category: "Web Development",
    image: "/regime.png",
    link: "https://regime-one.vercel.app/",
  },
  {
    id: 5,
    title: "Realtor - Real Estate Platform",
    category: "Web Development",
    image: "/real-estate.png",
    link: "https://exc-real-estate-7.vercel.app/",
  },
  {
    id: 6,
    title: "HooBank - Fintech Platform",
    category: "Web Development",
    image: "/banking.png",
    link: "https://modern-banking-website.vercel.app/",
  },
  {
    id: 7,
    title: "XORA - AI Video Editor",
    category: "Web Development",
    image: "/xora.jpg",
    link: "https://xora-gold-delta.vercel.app/",
  },
  {
    id: 8,
    title: "GPT-3 OpenAI",
    category: "Web Development",
    image: "/gpt.png",
    link: "https://gptui.netlify.app/",
  },
  {
    id: 9,
    title: "Fresh Coffee - Coffee Shop",
    category: "Web Development",
    image: "/coffee.png",
    link: "https://cofee-shop-vert.vercel.app/",
  },
  {
    id: 10,
    title: "Metaverse Explorer",
    category: "Web Development",
    image: "/metaverse.png",
    link: "https://metaversuswebsite.netlify.app/",
  },
  {
    id: 11,
    title: "CarHub - Car Rental",
    category: "Web Development",
    image: "/car-showcase.png",
    link: "https://car-showcase-sand.vercel.app/",
  },
  {
    id: 12,
    title: "BrainWave - Possibbilities of AI",
    category: "Web Development",
    image: "/brainw.png",
    link: "https://brain-w.vercel.app/",
  },

  { 
    id: 13, 
    title: "Smart-watch Sales Funnel Design", 
    category: "Sales Funnels", 
    image: "/smartwatch.jpg" ,
    link: "https://kindiestore.com.ng/s/q-smartwatch/",
    
  },
 
  
  { 
    id: 14, 
    title: "Sales Funnel Design", 
    category: "Sales Funnels", 
    image: "/timeless.jpg",
    link: "https://kindiestore.com.ng/s/ww/",
  },
  { 
    id: 15, 
    title: "Sales Funnel Design", 
    category: "Sales Funnels", 
    image: "/prosxact.jpg",
    link: "https://kindiestore.com.ng/s/prosxact/", 
  },
  { 
    id: 16, 
    title: "Juice-Extractor Sales Funnel Design", 
    category: "Sales Funnels", 
    image: "/juice.jpg",
    link: "https://kindiestore.com.ng/s/juicee/", 
  },
   {
    id: 17,
    title: "Landing Page Design",
    category: "Sales Funnels",
    image: "/gpt.png",
    link: "https://gptui.netlify.app/",
  },
  
]

const categories = ["All Projects", "Web Development", "Sales Funnels"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects")
  const [isLoading, setIsLoading] = useState(true)

  const filteredProjects =
    activeCategory === "All Projects" ? allProjects : allProjects.filter((p) => p.category === activeCategory)

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => setIsLoading(false)}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Our Work</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
              Explore our portfolio of successful projects that have helped businesses grow.
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
      </main>
      <Footer />
    </>
  )
}
