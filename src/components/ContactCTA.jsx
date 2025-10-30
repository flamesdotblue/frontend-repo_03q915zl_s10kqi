import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-red-600 sm:text-4xl">Get a quote</h2>
            <p className="mt-3 text-neutral-700">
              Tell us about your vehicle and desired finish. We’ll reply with a tailored estimate.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 rounded-lg border border-red-600/20 bg-red-50 p-4 text-red-700 transition hover:bg-red-100"
              >
                <Phone className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@glazicpaint.com"
                className="flex items-center gap-3 rounded-lg border border-red-600/20 bg-red-50 p-4 text-red-700 transition hover:bg-red-100"
              >
                <Mail className="h-5 w-5" />
                <span>hello@glazicpaint.com</span>
              </a>
              <a
                href="#map"
                className="flex items-center gap-3 rounded-lg border border-red-600/20 bg-red-50 p-4 text-red-700 transition hover:bg-red-100"
              >
                <MapPin className="h-5 w-5" />
                <span>Find our workshop</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-red-600/20 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-700">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-700">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-700">Vehicle</label>
                <input
                  type="text"
                  placeholder="Make, model, year"
                  className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-700">Project details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need — full repaint, correction, repair, etc."
                  className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 outline-none focus:border-red-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Send request
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div id="map" className="mt-6 rounded-xl border border-red-600/20 bg-red-50 p-6 text-red-700">
          <p>
            Workshop: 123 Finisher Ave, Auto City. Open Mon–Sat, 9am–6pm.
          </p>
        </div>
      </div>
    </section>
  );
}
