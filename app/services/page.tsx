import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesClient } from "@/components/services-client"

export default function Services() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen">
        <ServicesClient />
      </main>
      <Footer />
    </>
  )
}
