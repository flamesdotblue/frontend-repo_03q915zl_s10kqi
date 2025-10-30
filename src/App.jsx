import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <footer className="border-t border-red-600/20 bg-white py-8 text-center text-neutral-600">
        <p>
          © {new Date().getFullYear()} Glazic Automotive Painting — Crafted with precision in red & white.
        </p>
      </footer>
    </div>
  );
}

export default App;
