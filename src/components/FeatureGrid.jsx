import { PhoneCall, Workflow, BarChart3, Shield, Gauge, PlugZap } from 'lucide-react';

const features = [
  {
    title: 'Voz natural e IVR inteligente',
    desc: 'Atiende, entiende contexto y enruta sin espera.',
    icon: PhoneCall,
  },
  {
    title: 'Integraciones CRM',
    desc: 'HubSpot, Pipedrive, Salesforce, Notion y más.',
    icon: PlugZap,
  },
  {
    title: 'Dashboards en tiempo real',
    desc: 'Tasa de conexión, conversión y motivos de pérdida.',
    icon: BarChart3,
  },
  {
    title: 'Lead scoring automático',
    desc: 'Prioriza oportunidades con datos de conversación.',
    icon: Gauge,
  },
  {
    title: 'Automatizaciones',
    desc: 'Emails, WhatsApp/SMS, calendarios y notas.',
    icon: Workflow,
  },
  {
    title: 'Seguridad enterprise',
    desc: 'Cifrado en tránsito y en reposo, control de acceso.',
    icon: Shield,
  },
];

export default function FeatureGrid() {
  return (
    <section id="caracteristicas" className="bg-[#0b0b10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Características técnicas</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Infraestructura lista para producción con analítica, seguridad y automatizaciones que escalan con tu negocio.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-violet-500/30 via-cyan-500/30 to-orange-500/30 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
