import { Car, Waves, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  {
    icon: Car,
    title: "10 minutos de la frontera",
    description:
      "A solo 10 minutos de la línea fronteriza. ¡Ideal para un cruce eficiente hacia San Diego!",
  },
  {
    icon: Waves,
    title: "3 cuadras del nuevo Malecón",
    description:
      "En plena remodelación, lo que garantiza el aumento de tu plusvalía con el paso del tiempo.",
  },
  {
    icon: MapPin,
    title: "Todo a la redonda",
    description:
      "A unos pasos del Blvd. Paseo Playas de Tijuana y la Plaza Monumental. Walmart, cines, bancos y cafés cerca.",
  },
]

export function Ubicacion() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Una ubicación que lo tiene todo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Conectividad envidiable, playa cerca y todos los servicios a tu
            alcance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
