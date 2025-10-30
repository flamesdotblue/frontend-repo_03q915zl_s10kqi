import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Glazic Automotive Painting. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
