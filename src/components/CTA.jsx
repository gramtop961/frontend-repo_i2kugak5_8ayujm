import { CalendarDays } from 'lucide-react'

export default function CTA() {
  return (
    <section id="reserver" className="relative bg-gradient-to-b from-black to-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-3">Réservations</p>
              <h3 className="text-2xl sm:text-3xl font-semibold">Votre adresse d’exception vous attend</h3>
              <p className="mt-2 text-white/70">Contactez nos équipes pour un accompagnement personnalisé.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
              <CalendarDays className="h-4 w-4" /> Demander une réservation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
