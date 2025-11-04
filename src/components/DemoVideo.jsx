import { CheckCircle2 } from 'lucide-react';

export default function DemoVideo() {
  return (
    <section id="demo" className="bg-[#0d0d14] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Mira cómo agenda y cierra solo</h2>
          <p className="mt-3 text-white/70">
            En 60 segundos verás al agente atendiendo una llamada real, identificando la intención, calificando al lead y dejando la cita creada en tu calendario y CRM.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Agente de Voz AI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            '1. El agente atiende y entiende la intención',
            '2. Califica con preguntas clave y puntúa el lead',
            '3. Agenda la cita y actualiza tu CRM al instante',
          ].map((step) => (
            <div key={step} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-400" />
              <p className="text-sm text-white/80">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
