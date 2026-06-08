"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Database, Users, MessageSquare, CheckCircle, ArrowRight, ArrowRightCircle } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { ProjectCard } from "@/components/project-card"

export function HomeClient() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <>
      {/* Trusted By Section (From original page) */}
      <section className="bg-gradient-to-r from-blue-950/50 via-slate-900 to-cyan-950/50 max-w-7xl rounded mx-auto py-10 border-t border-slate-700 border-b relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-300 text-sm font-semibold uppercase tracking-wide mb-8">
            Trusted by Nigerian businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {[
              { name: "Nutriticare", logo: "/nutri.jpg" },
              { name: "MySkin Aesthetic Clinics", logo: "/myskin2.jpg" },
              { name: "Nutrihealth Consult", logo: "/nutrihealth.jpeg" },
              { name: "KeresGhost", initials: "KG" },
            ].map((company) => (
              <div
                key={company.name}
                className="w-26 h-26 bg-slate-100 rounded-full flex items-center justify-center border border-slate-600 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                {"logo" in company ? (
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="w-full h-full bg-gray-100 object-contain p-2"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 p-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                      {company.initials}
                    </div>
                    <span className="text-slate-700 text-[10px] font-medium text-center">{company.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Systems We Build</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We don't build generic websites. We build operational infrastructure that helps you manage leads, track payments, and automate daily tasks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="flex h-full">
            <ServiceCard 
              icon={Database}
              title="Custom CRM Systems"
              description="Built around how your business actually operates. Not a generic tool imported from America, but a system your team will actually use."
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex h-full">
            <ServiceCard 
              icon={Users}
              title="Lead Management Systems"
              description="Capture every lead automatically, assign them to the right person, and schedule follow-ups without anyone having to remember."
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex h-full">
            <ServiceCard 
              icon={MessageSquare}
              title="WhatsApp Automation"
              description="Connect your operations to WhatsApp — the platform your customers already live on. Automated responses and scheduled follow-ups."
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 font-semibold transition-colors">
            See all our services <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.section>

      {/* The Coddnet Difference */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 bg-slate-900/50 border-y border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Why we are not just another web design agency.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Most Nigerian businesses reach a point where WhatsApp threads and Excel sheets stop working. Orders get missed. Leads go cold. Payments fall through.
                <br/><br/>
                We build the systems that fix this chaos. We engineer robust, scalable software solutions tailored precisely to how your specific business operates in the real world.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Systems built for the Nigerian market context",
                  "No bloated templates or forced SaaS subscriptions",
                  "Automated workflows that save hours every day",
                  "Real-time visibility for management"
                ].map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Database className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Infrastructure</h3>
                <p className="text-slate-400">
                  When you outgrow your current tools, you need a foundation that can scale. We build the architecture that supports your growth for the next 5-10 years, not just a quick fix for today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Case Studies */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Systems. Real Results.</h2>
            <p className="text-lg text-slate-300">
              See how we've helped Nigerian businesses move from operational chaos to automated efficiency.
            </p>
          </div>
          <Link href="/case-studies" className="hidden md:inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700">
            View All Case Studies
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <ProjectCard
              title="Nutritcare CRM — Business Management Platform"
              category="CRM & Web System"
              image="/nutritcare-crm-orders.png"
              problem="Sales, packing, delivery, payments, inventory, and accounting were tracked on separate tools, making it impossible to follow an order's full journey or get a clear view of performance."
              built="A complete management platform that unifies the entire operation — tracking every order from sale to delivery and payment, giving each team its own dashboard, and surfacing real-time analytics for management."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectCard
              title="Nutrihealth Consult — Staff Management Platform"
              category="CRM & Web System"
              image="/nutrihealth-staff.png"
              problem="The company was struggling to manage its growing workforce, relying on manual processes for onboarding, document distribution, and staff tracking."
              built="A comprehensive staff management portal that digitizes the entire employee lifecycle, from recruitment and NDA signing to promotional letters and central directory."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProjectCard 
              title="MySkin Aesthetic Clinics — Clinic Management & E-Commerce"
              category="CRM & Web System"
              image="/myskinaeshetics.jpg"
              problem="The clinic needed a premium digital experience to match their high-end physical aesthetic, combining skincare product sales with appointment booking."
              built="An elegant, minimalist e-commerce store integrated with their clinic operations, providing a seamless buying experience that builds customer trust and visual appeal."
            />
          </motion.div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/case-studies" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700 w-full justify-center">
            View All Case Studies
          </Link>
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A transparent, structured approach to building your custom operational infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-cyan-500/0" />

            {[
              { step: "01", title: "Discovery", desc: "We map out your current operational chaos, identifying bottlenecks and what exactly needs automation." },
              { step: "02", title: "Architecture", desc: "We design the system's structure, databases, and user flows tailored entirely to your team." },
              { step: "03", title: "Development", desc: "We build the software using robust, modern technologies, keeping you updated at every milestone." },
              { step: "04", title: "Handover", desc: "We deploy the system, train your team, and provide ongoing support to ensure smooth adoption." }
            ].map((process, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-2xl font-black text-white mb-6 shadow-lg shadow-blue-500/20">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-slate-400 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Banner */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-cyan-900/80 rounded-2xl p-12 lg:p-16 border border-blue-700/50 text-center backdrop-blur-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to Fix How Your Business Operates?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto relative z-10">
            Stop relying on scattered tools and start scaling with a system built specifically for you. Let's discuss your custom solution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="https://wa.me/2348024945780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg shadow-green-900/40"
            >
              Message Us on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Fill Contact Form <ArrowRightCircle size={20} />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
