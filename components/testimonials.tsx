"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Linda Chikaodi",
    role: "CEO, Nutrihealth Consult.",
    image: "/myskinaeshetics.jpg",
    content:
      "Codnet transformed our online presence completely. Our conversion rates increased by 150% within the first month of launching our new website.",
  },
  {
    id: 2,
    name: "Chisom Geraldine",
    role: "CEO MyskinAeshtetics clinic",
    image: "/asian-businessman-headshot.png",
    content:
      "The sales funnel they built for us was a game-changer. We've seen a 3x increase in qualified leads since implementation.",
  },
  {
    id: 3,
    name: "Chidera Emmanuella",
    role: "Marketing Director, Bloom Beauty",
    image: "/latina-professional-headshot.png",
    content:
      "Working with Codnet was seamless. They understood our brand vision and delivered a website that perfectly represents who we are.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Owner, Elite Fitness",
    image: "/fit-man-professional-headshot.jpg",
    content:
      "Our membership sign-ups doubled after launching the new website. The team's attention to detail is unmatched.",
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "COO, HealthFirst Clinic",
    image: "/african-american-woman-doctor-headshot.jpg",
    content:
      "The booking system integration was flawless. Our patients love the new experience and our admin work has decreased significantly.",
  },
  {
    id: 6,
    name: "Robert Martinez",
    role: "Director, Urban Realty",
    image: "/hispanic-businessman-headshot.jpg",
    content:
      "Codnet delivered beyond our expectations. The property showcase features they built helped us close deals faster than ever.",
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Founder, Artisan Bakery",
    image: "/blonde-woman-chef-headshot.jpg",
    content:
      "Our online orders went from 10% to 60% of total sales. The e-commerce solution they built is exactly what we needed.",
  },
  {
    id: 8,
    name: "James Wilson",
    role: "CEO, CloudSync Solutions",
    image: "/tech-ceo-man-headshot.jpg",
    content:
      "Professional, responsive, and incredibly talented. They turned our complex requirements into a beautiful, functional platform.",
  },
  {
    id: 9,
    name: "Lisa Anderson",
    role: "Owner, Luxe Interior Design",
    image: "/elegant-woman-designer-headshot.jpg",
    content:
      "The portfolio website they created for us has attracted high-end clients we never reached before. Worth every penny.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
              transition={{ duration: 0.5 }}
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
