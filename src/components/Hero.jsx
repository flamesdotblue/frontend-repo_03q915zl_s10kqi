import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Red-tinted gradient overlays to boost contrast over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-600/40 via-white/10 to-white" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-600/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block rounded-full border border-red-600/30 bg-red-600/10 px-3 py-1 text-xs font-semibold tracking-widest text-red-700">
            GLAZIC PAINT WORKSHOP
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Red & White precision. Showroom finishes.
          </h1>
          <p className="mt-4 text-lg text-neutral-800 sm:text-xl">
            Expert car painting, color-matching, and restoration. From subtle repairs to full-body repaints with a bold red signature.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-red-600/30 bg-white/80 px-5 py-3 font-semibold text-red-700 backdrop-blur transition hover:bg-white"
            >
              View services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
