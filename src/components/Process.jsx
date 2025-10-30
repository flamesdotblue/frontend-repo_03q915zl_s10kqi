const steps = [
  {
    number: '01',
    title: 'Consult & color match',
    desc: 'We inspect your vehicle, discuss goals, and perform digital color-matching for a perfect tone.'
  },
  {
    number: '02',
    title: 'Preparation',
    desc: 'Surface repair, sanding, masking, and panel prep to ensure a flawless base.'
  },
  {
    number: '03',
    title: 'Painting & curing',
    desc: 'Multi-layer application in a controlled booth, followed by curing for lasting durability.'
  },
  {
    number: '04',
    title: 'Finishing & quality check',
    desc: 'Polish, protection, and rigorous inspection before delivery.'
  }
];

export default function Process() {
  return (
    <section className="relative w-full bg-red-50 py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">Our process</h2>
          <p className="mt-3 text-neutral-700">
            Transparent, careful, and engineered for results that last.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.number}
              className="relative overflow-hidden rounded-2xl border border-red-600/20 bg-white p-6 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-sm font-semibold text-red-600">{s.number}</span>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-neutral-700">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
