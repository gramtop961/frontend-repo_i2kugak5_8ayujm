import { motion } from 'framer-motion'
import { Bath, BedDouble, Wifi, Sparkles, Coffee, Waves, Crown, ConciergeBell } from 'lucide-react'

const features = [
  { icon: BedDouble, title: 'Suites Iconiques', desc: 'Volumes aériens, matières nobles, vue imprenable sur la ville.' },
  { icon: Bath, title: 'Salles de bain marbre', desc: 'Baignoires îlot, douches à effet pluie, linge d’exception.' },
  { icon: Wifi, title: 'Technologie discrète', desc: 'Domotique intuitive, Wi‑Fi très haut débit, streaming sécurisé.' },
  { icon: Sparkles, title: 'Détails couture', desc: 'Parfums de maison exclusifs, literie sur‑mesure, art floral.' },
  { icon: Coffee, title: 'Gastronomie', desc: 'Chef étoilé, cave d’auteur, petit‑déjeuner signature.' },
  { icon: Waves, title: 'Spa & Piscine', desc: 'Espace bien‑être, soins holistiques, bassin intérieur.' },
  { icon: Crown, title: 'Service Majordome', desc: 'Discret, attentif, 24/7. Votre confort, nos attentions.' },
  { icon: ConciergeBell, title: 'Conciergerie Clefs d’Or', desc: 'Accès privilégiés aux plus belles adresses de la ville.' },
]

export default function Features() {
  return (
    <section id="suites" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-3">Signature</p>
          <h2 className="text-3xl sm:text-5xl font-semibold">Le raffinement dans chaque détail</h2>
          <p className="mt-4 text-white/70 max-w-2xl">Une orchestration d’espaces lumineux, de textures sensuelles et de gestes de service qui magnifient chaque instant.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <Icon className="h-6 w-6 text-white mb-4" />
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
