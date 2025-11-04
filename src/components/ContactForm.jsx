import { useState } from 'react';

export default function ContactForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    // Simulación de envío. Integra tu API o calendario aquí.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setStatus('ok');
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 rounded-xl bg-white/5 p-6 text-white ring-1 ring-white/10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white/80">Nombre</label>
          <input id="name" name="name" required placeholder="Tu nombre" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm text-white/80">Empresa / Marca</label>
          <input id="company" name="company" required placeholder="Ej. Acme Co" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-white/80">Email</label>
          <input id="email" name="email" type="email" required placeholder="tu@email.com" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-white/80">WhatsApp / Teléfono</label>
          <input id="phone" name="phone" required placeholder="+1 202 555 0101" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label htmlFor="industry" className="mb-1 block text-sm text-white/80">Industria</label>
          <select id="industry" name="industry" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option className="text-black">Real Estate</option>
            <option className="text-black">Ecommerce</option>
            <option className="text-black">Streamers</option>
            <option className="text-black">Influencers</option>
            <option className="text-black">Manufacturers</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1 block text-sm text-white/80">Ticket objetivo</label>
          <select id="budget" name="budget" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option className="text-black">USD 500 - 1.000</option>
            <option className="text-black">USD 1.000 - 5.000</option>
            <option className="text-black">USD 5.000 - 20.000</option>
            <option className="text-black">USD 20.000+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white/80">¿Qué quieres lograr?</label>
        <textarea id="message" name="message" rows={4} placeholder="Cuéntanos el problema y el objetivo" className="block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-inset ring-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
      <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-violet-500 via-cyan-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60">
        {loading ? 'Enviando…' : 'Enviar y agendar'}
      </button>
      {status === 'ok' && (
        <p className="text-center text-sm text-green-400">¡Listo! Te enviamos confirmación por email y WhatsApp.</p>
      )}
    </form>
  );
}
