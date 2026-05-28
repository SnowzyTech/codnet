import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactClient } from "@/components/contact-client"

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen">
        <ContactClient />
      </main>
      <Footer />
    </>
  )
}
