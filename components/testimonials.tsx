"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Linda Chikaodi",
    role: "CEO, Nutrihealth Consult.",
    image: "\linda.jpg",
    content:
      "Working with Coddnet was a turning point for our online business. We needed a custom e-commerce solution that could handle our specific inventory needs while keeping the customer journey smooth. Coddnet delivered a site that is not only fast and secure but has also directly contributed to a 40% increase in our online sales since launch. They built a platform that scales with us.",
  },
  {
    id: 2,
    name: "Chisom Geraldine",
    role: "CEO MyskinAeshtetics clinic",
    image: "\chisom.jpg",
    content:
      "In the skincare industry, visual trust is everything. Coddnet understood exactly how to translate our brand's aesthetic into a digital store. The website they built is elegant, minimalist, and beautifully showcases our products. It’s not just a shop; it’s an experience that makes our customers feel confident in buying from us",
  },
  {
    id: 3,
    name: "Chidera Emmanuella",
    role: "Marketing Director, Bloom Beauty",
    image: "/ella.jpg",
    content:
      "Working with Coddnet was seamless. They understood our brand vision and delivered a website that perfectly represents who we are.",
  },
  {
    id: 4,
    name: "Samuel Segun",
    role: "Owner, Consultant Marketing",
    image: "/segun.jpg",
    content:
      "Our membership sign-ups doubled after launching the new website. The team's attention to detail is unmatched.",
  },
  {
    id: 5,
    name: "Architect Chimeka",
    role: "CEO, Emarch",
    image: "/emeka.jpg",
    content:
      "Coddnet delivered a masterfully crafted website that perfectly reflects the precision and creativity of my architectural work. Highly professional and a pleasure to work with.",
  },
  {
    id: 6,
    name: "Austin Chuks",
    role: "Director, Urban Realty",
    image: "/austin.jpg",
    content:
      "Coddnet delivered beyond our expectations. The property showcase features they built helped us close deals faster than ever.",
  },
  {
    id: 7,
    name: "Okoye Chi",
    role: "Founder, Artisan Bakery",
    image: "/administrator.jpg",
    content:
      "Our online orders went from 10% to 60% of total sales. The e-commerce solution they built is exactly what we needed.",
  },
 
  {
    id: 8,
    name: "Mary Ogochukwu",
    role: "Owner, Luxe Interior Design",
    image: "/mary.jpg",
    content:
      "The portfolio website they created for us has attracted high-end clients we never reached before. Worth every penny.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white pt-10 mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 pt-3 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="relative min-h-[200px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Client image on the left */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-blue-500/50">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content on the right */}
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-4 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-400 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 w-8"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
