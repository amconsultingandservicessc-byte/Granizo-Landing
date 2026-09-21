"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { PREAPRUEBA_URL } from "@/lib/links"

function scrollToContacto() {
  const el = document.getElementById("contacto")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image: fachada real de la casa */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/fachada.jpg"
          alt="Fachada de la residencia en la Sección Monumental, Playas de Tijuana"
          className="h-full w-full object-cover object-[65%_center] [filter:contrast(1.15)_saturate(1.35)_brightness(1.14)]"
        />
        {/* Sky-blue lift so the overcast photo reads bright and crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 via-transparent to-transparent mix-blend-soft-light" />
        {/* Light scrim only where the text sits: keeps the façade vivid and dominant */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/75 via-emerald-950/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/55 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:px-6 lg:py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400"
        >
          <MapPin className="h-4 w-4" />
          Playas de Tijuana · Sección Monumental
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          ¿Trabajas en San Diego pero sueñas con vivir frente al mar?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-pretty text-lg leading-relaxed text-slate-200"
        >
          Amplia residencia en la Sección Monumental de Playas de Tijuana.
          Tranquilidad del Pacífico + conectividad envidiable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-2 flex flex-col flex-wrap items-start gap-4 sm:flex-row sm:items-center"
        >
          <button
            onClick={scrollToContacto}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-900/40 transition-colors hover:bg-emerald-400"
          >
            Precalifícate Gratis en 3 Minutos
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 flex items-baseline gap-2"
        >
          <span className="text-4xl font-extrabold text-white sm:text-5xl">
            $439,000
          </span>
          <span className="text-lg font-semibold text-emerald-400">USD</span>
        </motion.div>
      </div>
    </section>
  )
}
