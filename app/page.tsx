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
      <main className="overflow-x-hidden">
        <Hero3D />

        <section className="bg-gradient-to-r from-blue-950/50 via-slate-900 to-cyan-950/50 max-w-7xl rounded mx-auto py-10 border-t border-slate-700 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-300 text-sm font-semibold uppercase tracking-wide mb-8">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              {[
                {
                  name: "Nutriticare",
                  logo: "/nutri.jpg",
                },
                {
                  name: "MySkin Aesthetic Clinics",
                  logo: "/myskin2.jpg",
                },
                {
                  name: "Nutrihealth Consult",
                  logo: "/nutrihealth.jpeg",
                },
                { name: "KeresGhost", initials: "KG" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="w-36 h-24 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-600 hover:border-blue-500/50 transition-all overflow-hidden"
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
                      <span className="text-slate-700 text-xs font-medium text-center">{company.name}</span>
                    </div>
                  )}
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
