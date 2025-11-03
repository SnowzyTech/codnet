"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 py-20 border-b border-slate-700"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">About Codnet</h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Driving Business Growth Through Digital Excellence
            </h2>
            <p className="text-lg text-slate-300 text-balance">Your Partner in Web Development & Sales Funnel Design</p>
          </motion.div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                At Codnet, our mission is to empower businesses with high-performance websites and strategic sales
                funnels that convert visitors into loyal customers. We believe that a strong online presence is the
                cornerstone of modern success. Our team is dedicated to crafting bespoke digital solutions that not only
                look stunning but also deliver tangible results, driving growth and maximizing return on investment for
                our clients.
              </p>
              <p>
                We are a collective of passionate developers, designers, and strategists committed to innovation and
                excellence. We thrive on tackling complex challenges and building long-term partnerships, ensuring every
                project we undertake is a testament to our commitment to quality, integrity, and client success.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Web Development */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Web Development</h3>
                <ul className="space-y-3">
                  {["Custom Websites", "E-commerce Solutions", "CMS Development", "Responsive Design"].map(
                    (item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        {item}
                      </motion.li>
                    ),
                  )}
                </ul>
              </motion.div>

              {/* Sales Funnels */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Sales Funnels</h3>
                <ul className="space-y-3">
                  {["Funnel Strategy", "Landing Page Design", "Conversion Optimization", "A/B Testing"].map(
                    (item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        {item}
                      </motion.li>
                    ),
                  )}
                </ul>
              </motion.div>

              {/* Core Technologies */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Core Technologies</h3>
                <ul className="space-y-3">
                  {["JavaScript Frameworks", "Headless CMS", "Marketing Automation", "Analytics & Data"].map(
                    (item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        {item}
                      </motion.li>
                    ),
                  )}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Client Success",
                  description:
                    "Our primary goal is the success of our clients. We measure our achievements by the results we deliver for them.",
                },
                {
                  title: "Innovation",
                  description:
                    "We constantly explore new technologies and strategies to stay ahead of the curve and provide cutting-edge solutions.",
                },
                {
                  title: "Integrity",
                  description:
                    "We believe in transparent communication and ethical practices, building relationships based on trust and respect.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We work as a unified team, both internally and with our clients, to achieve shared goals and create exceptional outcomes.",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 rounded-lg p-12 border border-blue-700 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Your Digital Future</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              We are excited to learn about your project and discuss how Codnet can help you achieve your business
              objectives. Let's connect and start the conversation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Work
              </a>
              <a
                href="/contact"
                className="border-2 border-slate-300 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
