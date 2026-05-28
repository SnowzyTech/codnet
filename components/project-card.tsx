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
  client?: string
  industry?: string
  problem?: string
  built?: string
  result?: string
}

export function ProjectCard({ title, category, image, link, client, industry, problem, built, result }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          {industry && <p className="text-blue-400 text-sm">{industry}</p>}
        </div>

        {problem && (
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">The Problem</p>
            <p className="text-slate-400 text-sm leading-relaxed">{problem}</p>
          </div>
        )}

        {built && (
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">What We Built</p>
            <p className="text-slate-400 text-sm leading-relaxed">{built}</p>
          </div>
        )}

        {result && (
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">The Result</p>
            <p className="text-green-400 text-sm leading-relaxed font-medium">{result}</p>
          </div>
        )}

        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium hover:text-cyan-400 transition-colors pt-2"
          >
            View Live <ExternalLink className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
