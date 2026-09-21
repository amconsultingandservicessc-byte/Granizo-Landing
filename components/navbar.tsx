"use client"

import { Waves } from "lucide-react"
import { PREAPRUEBA_URL } from "@/lib/links"

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
            <Waves className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            GRANIZO.
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo("ubicacion")}
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            Ubicación
          </button>
          <button
            onClick={() => scrollTo("espacios")}
            className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
          >
            La propiedad
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PREAPRUEBA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 sm:inline-flex"
          >
            Pre-aprueba tu crédito
          </a>
          <button
            onClick={() => scrollTo("contacto")}
            className="rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            Agendar visita
          </button>
        </div>
      </nav>
    </header>
  )
}
