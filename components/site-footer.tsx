const hashtags = [
  "#PlayasDeTijuana",
  "#CasaEnVentaTijuana",
  "#SanDiegoCommuters",
  "#InversionInmobiliaria",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="text-lg font-bold text-slate-800">
          Granizo Properties
        </span>
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-emerald-700">
          {hashtags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          © 2026 Granizo Properties. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
