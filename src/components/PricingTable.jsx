import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'USD 490-990 / mes',
    features: [
      'Agente de voz 1 flujo',
      'Integración CRM básica',
      'Agenda y recordatorios',
      'Dashboard esencial',
      'Soporte por email',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'USD 1.490-2.990 / mes',
    features: [
      '2-3 flujos + A/B',
      'Lead scoring + tags',
      'WhatsApp/SMS y emails',
      'Dashboards avanzados',
      'SLA 48h + onboarding',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'USD 4.990+ / mes',
    features: [
      'Multi-idioma y colas',
      'SSO, roles y auditoría',
      'Integraciones a medida',
      'Soporte dedicado',
      'SLA 24h + training',
    ],
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section id="precios" className="bg-[#0d0d14] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Planes simples, listos para crecer</h2>
          <p className="mt-3 text-white/70">Elige el plan que mejor se ajusta a tu volumen y velocidad.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-6 ring-1 ring-white/10 ${plan.highlight ? 'bg-gradient-to-b from-white/10 to-white/5' : 'bg-white/5'}`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 px-3 py-1 text-xs font-semibold">Más popular</span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/70">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400" /> {f}
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
  );
}
