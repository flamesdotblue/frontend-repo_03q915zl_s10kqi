import { Paintbrush, Sparkles, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Full-body repaint',
    desc: 'Factory-grade finishes with deep gloss and flawless surface preparation.'
  },
  {
    icon: Sparkles,
    title: 'Detail & correction',
    desc: 'Paint correction, polishing, and ceramic protection for a mirror-like shine.'
  },
  {
    icon: Shield,
    title: 'Scratch & dent repair',
    desc: 'Seamless spot repairs, blending, and color-matching for invisible fixes.'
  },
  {
    icon: Clock,
    title: 'Express respray',
    desc: 'Smart repairs with quick turnaround while maintaining premium quality.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Services</h2>
          <p className="mt-3 text-white/70">
            From subtle touch-ups to full transformations, we deliver showroom-grade results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
