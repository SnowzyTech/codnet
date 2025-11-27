"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link?: string
}

export function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
    >
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ExternalLink className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded text-sm font-medium">
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                View Project
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <>
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded text-sm font-medium">
              {category}
            </span>
          </div>
        </>
      )}
    </motion.div>
  )
}
