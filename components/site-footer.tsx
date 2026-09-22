export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-lg font-bold text-slate-800">
          Granizo Properties
        </span>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Asesoría hipotecaria a cargo de Alejandro González, asesor de
          SOC AM Consulting (Red SOC). Precio expresado en dólares
          americanos (USD). Las fotografías son de referencia. Precio,
          disponibilidad, condiciones de crédito y tasas están sujetos a
          cambio sin previo aviso y a la evaluación crediticia de cada
          solicitante.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          <a
            href="/docs/AVISO-DE-PRIVACIDAD-SOC-AM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-emerald-700"
          >
            Aviso de privacidad
          </a>
        </p>
        <p className="mt-4 text-sm text-slate-500">
          © 2026 Granizo Properties. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
