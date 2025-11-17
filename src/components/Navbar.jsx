import { useState } from 'react'
import { Menu, X, Hotel, Phone, CalendarDays } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#suites', label: 'Suites' },
    { href: '#dining', label: 'Gastronomie' },
    { href: '#spa', label: 'Spa & Bien-être' },
    { href: '#experiences', label: 'Expériences' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <Hotel className="h-6 w-6 text-white" />
              <span className="text-white font-semibold tracking-wide">Maison Élyseum</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm">
                <Phone className="h-4 w-4" /> +33 1 23 45 67 89
              </a>
              <a href="#reserver" className="inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-gray-900 px-4 py-2 text-sm font-medium transition">
                <CalendarDays className="h-4 w-4" /> Réserver
              </a>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/20 px-4 py-3">
              <nav className="grid gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-white/90 hover:text-white text-sm py-1">
                    {l.label}
                  </a>
                ))}
                <a href="#reserver" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-medium">
                  <CalendarDays className="h-4 w-4" /> Réserver
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
