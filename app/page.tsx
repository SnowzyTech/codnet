import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero3D } from "@/components/hero-3d"
import { Testimonials } from "@/components/testimonials"
import { HomeClient } from "@/components/home-client"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero3D />
        <HomeClient />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
