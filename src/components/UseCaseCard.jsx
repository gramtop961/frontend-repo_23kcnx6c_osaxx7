export default function UseCaseCard({ title, description, example }) {
  return (
    <div className="rounded-xl bg-white/5 p-5 text-white ring-1 ring-white/10">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      {example && (
        <div className="mt-3 rounded-md bg-white/5 p-3 text-xs text-white/80 ring-1 ring-white/10">
          <span className="font-medium text-white">Ejemplo: </span>
          {example}
        </div>
      )}
    </div>
  );
}
