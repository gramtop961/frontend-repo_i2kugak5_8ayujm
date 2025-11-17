import { motion } from 'framer-motion'

const items = [
  {
    title: 'Penthouse Panoramique',
    desc: 'Un étage entier dédié à la lumière. Salon cheminée, terrasse privée, salle de bains marbrée.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Piscine & Spa',
    desc: 'Un cocon minéral aux reflets d’azur. Soins holistiques et rituels sur‑mesure.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gastronomie',
    desc: 'Une table audacieuse, signée par notre Chef. Produits d’exception, accords inspirés.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="experiences" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-white/60 text-xs mb-3">Expériences</p>
          <h2 className="text-3xl sm:text-5xl font-semibold">Vivre l’exception</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#reserver"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={it.image} alt={it.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-white/80 max-w-sm">{it.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
