import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 sm:pt-48 sm:pb-28 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.35em] text-white/70 text-xs mb-4">Hôtel de grand luxe</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white">
            L'art de vivre au sommet
          </h1>
          <p className="mt-6 text-white/80 text-base sm:text-lg">
            Une adresse rare au coeur de la ville. Suites lumineuses, vues panoramiques, service signature.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#reserver" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
              Réserver votre séjour
            </a>
            <a href="#suites" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition">
              Découvrir les suites
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
