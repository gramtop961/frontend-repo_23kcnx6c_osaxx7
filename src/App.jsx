import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import FeatureGrid from './components/FeatureGrid';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0b10] font-sans text-white">
      {/* Nav simple */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b10]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">AI Voice Agent</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#caracteristicas" className="hover:text-white">Características</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#precios" className="hover:text-white">Precios</a>
          </nav>
          <a href="#reserva" className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/15 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan-400">
            Reservar cita
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <DemoVideo />
        <FeatureGrid />

        {/* Casos de uso (inline) */}
        <section id="casos" className="bg-[#0d0d14] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Casos de uso por nicho</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{
                title: 'Real Estate',
                desc: 'Llamadas a leads entrantes, calificación por presupuesto y zona, agenda visitas.',
                ex: 'Oferta: Tour en 24h + simulación de hipoteca.'
              },{
                title: 'Ecommerce',
                desc: 'Recupera carritos y resuelve dudas de producto, dispara códigos personalizados.',
                ex: 'Oferta: 10% off si compras en la llamada.'
              },{
                title: 'Streamers',
                desc: 'Gestiona patrocinios y reservas de slots con marcas, sin DMs eternos.',
                ex: 'Oferta: Pack mensual con 3 menciones + CTA.'
              },{
                title: 'Influencers',
                desc: 'Precalifica colaboraciones y filtra fraudes, envía media kit automático.',
                ex: 'Oferta: Agenda discovery call de 15min.'
              },{
                title: 'Manufacturers',
                desc: 'Distribuidores y B2B: toma especificaciones y genera cotización inicial.',
                ex: 'Oferta: Cotización preliminar en 12h.'
              }].map((c) => (
                <div key={c.title} className="rounded-xl bg-white/5 p-5 text-white ring-1 ring-white/10">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                  <div className="mt-3 rounded-md bg-white/5 p-3 text-xs text-white/80 ring-1 ring-white/10">
                    <span className="font-medium text-white">Ejemplo: </span>{c.ex}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios (inline) */}
        <section id="precios" className="bg-[#0b0b10] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Planes simples, listos para crecer</h2>
              <p className="mt-3 text-white/70">Elige el plan que mejor se ajusta a tu volumen y velocidad.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[{
                name: 'Starter',
                price: 'USD 490-990 / mes',
                features: ['Agente de voz 1 flujo','Integración CRM básica','Agenda y recordatorios','Dashboard esencial','Soporte por email'],
                highlight: false
              },{
                name: 'Growth',
                price: 'USD 1.490-2.990 / mes',
                features: ['2-3 flujos + A/B','Lead scoring + tags','WhatsApp/SMS y emails','Dashboards avanzados','SLA 48h + onboarding'],
                highlight: true
              },{
                name: 'Enterprise',
                price: 'USD 4.990+ / mes',
                features: ['Multi-idioma y colas','SSO, roles y auditoría','Integraciones a medida','Soporte dedicado','SLA 24h + training'],
                highlight: false
              }].map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-6 ring-1 ring-white/10 ${plan.highlight ? 'bg-gradient-to-b from-white/10 to-white/5' : 'bg-white/5'}`}>
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 px-3 py-1 text-xs font-semibold">Más popular</span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{plan.price}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"/> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#reserva" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-cyan-400">
                    Reservar cita
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de reserva */}
        <section id="reserva" className="bg-[#0d0d14] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Reserva tu cita</h2>
              <p className="mt-3 text-white/70">Cuéntanos tu contexto y nos coordinamos por email y WhatsApp en minutos.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm onSuccess={() => {}} />
              <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold">¿Qué ocurre después?</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/80">
                  <li>Confirmación por email + WhatsApp.</li>
                  <li>Creación de contacto en tu CRM (si aplica).</li>
                  <li>Recordatorio 24h y 1h antes de la reunión.</li>
                  <li>Resumen de la llamada en tu dashboard.</li>
                </ol>
                <p className="mt-4 text-sm text-white/60">¿Prefieres que te llamemos? Déjanos tu número y horario.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0d0d14] py-10 text-white/80">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          <div>
            <p className="text-sm">© {new Date().getFullYear()} AI Voice Agent</p>
            <p className="mt-2 text-xs">WhatsApp: +1 (202) 555-0147</p>
          </div>
          <div className="text-sm">
            <a className="block hover:text-white" href="#">Privacidad</a>
            <a className="block hover:text-white" href="#">Términos</a>
          </div>
          <form className="flex items-center gap-2">
            <input type="email" placeholder="Tu email" className="flex-1 rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/15 hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-cyan-400">Suscribirme</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
