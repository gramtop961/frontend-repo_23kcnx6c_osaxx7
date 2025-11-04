import Spline from '@splinetool/react-spline';
import { PlayCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b10] text-white">
      {/* Decorative gradient aura behind content (non-interactive) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-50 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.35), rgba(6,182,212,0.25), rgba(249,115,22,0.15))' }} />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-24 md:grid-cols-2 md:gap-16 md:pt-28">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10">
            Agente de voz + automatizaciones
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Convierte leads en clientes sin intervención humana
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Implementamos un agente de voz real y flujos automáticos que atienden, califica y agenda 24/7. Menos fricción, más ventas.
          </p>
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
            <li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> Respuesta en <strong className="ml-1">segundos</strong>
            </li>
            <li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" /> Integrado a <strong className="ml-1">tu CRM</strong>
            </li>
            <li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> <strong className="ml-1">Califica</strong> y agenda
            </li>
            <li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> Seguridad <strong className="ml-1">enterprise</strong>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#reserva" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-400">
              <Calendar className="mr-2 h-5 w-5" /> Reservar cita
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan-400">
              <PlayCircle className="mr-2 h-5 w-5" /> Ver demo
            </a>
          </div>
          <p className="mt-3 text-xs text-white/60">Clientes: Real Estate, Ecommerce, Streamers, Influencers, Manufacturers</p>
        </div>
        <div className="relative h-[520px] w-full md:h-[640px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
