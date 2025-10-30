import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Get a quote</h2>
            <p className="mt-3 text-white/70">
              Tell us about your vehicle and desired finish. We’ll get back with a tailored estimate.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@glazicpaint.com"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                <span>hello@glazicpaint.com</span>
              </a>
              <a
                href="#map"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <MapPin className="h-5 w-5" />
                <span>Find our workshop</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Vehicle</label>
                <input
                  type="text"
                  placeholder="Make, model, year"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Project details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need — full repaint, correction, repair, etc."
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/90"
            >
              Send request
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div id="map" className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-white/70">
          <p>
            Workshop: 123 Finisher Ave, Auto City. Open Mon–Sat, 9am–6pm.
          </p>
        </div>
      </div>
    </section>
  );
}
