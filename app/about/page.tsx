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
            <h1 className="text-5xl font-bold text-white mb-4">About Coddnet</h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              We Build Systems. Not Just Websites.
            </h2>
            <p className="text-lg text-slate-300 text-balance">A Nigerian software company specialising in custom business management systems for African companies.</p>
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
                At Coddnet, we build custom software for African businesses. We don't just design websites; we engineer comprehensive software systems — and the distinction matters.
              </p>
              <p>
                What we build is operational infrastructure. The systems that run your business behind the scenes. The platform that manages your clients, tracks your payments, automates your follow-ups, gives your team a single place to work, and gives management real-time visibility into everything.
              </p>
              <p>
                Most Nigerian businesses reach a point where WhatsApp threads and Excel sheets stop working. Orders get missed. Leads go cold. Payments fall through. Nobody knows what anybody else is doing. That point is where Coddnet comes in.
              </p>
              <p>
                We build across industries — real estate, health, e-commerce, professional services, logistics. Every system we deliver is built from scratch around how your specific business actually operates. Not a template adapted from a foreign market. Not a SaaS tool you've been trying to configure for six months. A system built for you, by people who understand your market.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Custom CRM Systems</h3>
                <ul className="space-y-3">
                  {["Next.js", "Node.js", "TypeScript", "Supabase", "PostgreSQL"].map((item, i) => (
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
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Lead Management</h3>
                <ul className="space-y-3">
                  {["Automated pipelines", "Assignment logic", "Follow-up scheduling", "Real-time dashboards"].map((item, i) => (
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
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">WhatsApp Automation</h3>
                <ul className="space-y-3">
                  {["WhatsApp Business API", "Broadcast messaging", "Auto-responses", "CRM integration"].map((item, i) => (
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
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Payment Tracking</h3>
                <ul className="space-y-3">
                  {["Installment management", "Automated reminders", "Receipt generation", "Real-time reporting"].map((item, i) => (
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
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">Web & Mobile Apps</h3>
                <ul className="space-y-3">
                  {["React Native", "Node.js Backends", "API Architecture", "Scalable Infrastructure"].map((item, i) => (
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
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-6">AI Integrations</h3>
                <ul className="space-y-3">
                  {["OpenAI APIs", "Custom AI Workflows", "Prompt Engineering", "Predictive Analytics"].map((item, i) => (
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
                  ))}
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready To Run Your Business On A Proper System?</h2>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Tell us what's broken in how you currently manage your business. We'll build the system that fixes it.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/case-studies"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                See Case Studies
              </a>
              <a
                href="https://wa.me/2347034912012"
                className="border-2 border-slate-300 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Us a WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
