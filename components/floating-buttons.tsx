import { MessageCircle } from "lucide-react"
import { PREAPRUEBA_URL, WHATSAPP_URL } from "@/lib/links"

export function FloatingButtons() {
  return (
    <>
      <a
        href={PREAPRUEBA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105 hover:bg-emerald-500"
      >
        PreAprueba.com
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-xl transition-transform hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  )
}
