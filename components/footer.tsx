"use client"

import Link from "next/link"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/codnet-ng/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Dribbble" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div>
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-slate-400 font-medium">
            &copy; 2025 Codnet. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
