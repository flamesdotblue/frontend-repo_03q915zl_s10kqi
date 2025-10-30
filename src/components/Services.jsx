import { Paintbrush, Sparkles, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Full-body repaint',
    desc: 'Factory-grade finishes with deep gloss and meticulous surface preparation.'
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
    <section id="services" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">Services</h2>
          <p className="mt-3 text-neutral-600">
            From subtle touch-ups to full transformations, we deliver showroom-grade results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-red-600/20 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600 ring-1 ring-red-600/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
