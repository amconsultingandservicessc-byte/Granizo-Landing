"use client"

import { motion } from "framer-motion"
import { MapPin, MessageCircle } from "lucide-react"
import { PREAPRUEBA_URL, WHATSAPP_URL } from "@/lib/links"

/* Marca de 7 puntos (SOC / Sinergia), dibujada como SVG para que se vea nitida a cualquier tamano */
function SocMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 121 133"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <circle cx="60.2" cy="19.2" r="19.2" />
      <circle cx="19.3" cy="42.7" r="19.2" />
      <circle cx="101" cy="42.6" r="19.2" />
      <circle cx="60.1" cy="66.3" r="19.2" />
      <circle cx="19.3" cy="89.9" r="19.2" />
      <circle cx="101" cy="89.9" r="19.2" />
      <circle cx="60.2" cy="113.4" r="19.2" />
    </svg>
  )
}

/* Los dos botones comparten exactamente el mismo estilo */
const ctaClass =
  "inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-950/40 transition-colors hover:bg-emerald-400 sm:w-auto sm:min-w-[270px]"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950">
      <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-32">
        <div className="flex flex-col gap-6">
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
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            ¿Trabajas en San Diego pero sueñas con vivir frente al mar?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-slate-200"
          >
            Amplia residencia en la Sección Monumental de Playas de Tijuana.
            Tranquilidad del Pacífico + conectividad envidiable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-baseline gap-2"
          >
            <span className="text-4xl font-extrabold text-white sm:text-5xl">
              $439,000
            </span>
            <span className="text-lg font-semibold text-emerald-400">USD</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-2 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar visita por WhatsApp
            </a>
            <a
              href={PREAPRUEBA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              <SocMark className="h-6 w-auto" />
              Precalifícate gratis
            </a>
          </motion.div>

          <p className="text-xs text-slate-400">
            Precio en USD y condiciones de crédito sujetos a evaluación y a cambio sin previo aviso.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/15">
            <img
              src="/images/fachada.jpg"
              alt="Fachada de la residencia en la Sección Monumental, Playas de Tijuana"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
