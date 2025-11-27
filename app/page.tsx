"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero3D } from "@/components/hero-3d"
import { Testimonials } from "@/components/testimonials"

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
        <Hero3D />

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

        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
