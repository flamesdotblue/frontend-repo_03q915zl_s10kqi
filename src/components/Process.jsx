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
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our process</h2>
          <p className="mt-3 text-white/70">
            Transparent, careful, and engineered for results that last.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.number}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-sm text-white/60">{s.number}</span>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-white/75">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
