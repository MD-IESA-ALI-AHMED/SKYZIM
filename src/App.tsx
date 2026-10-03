import { useEffect } from 'react';
import { About } from './components/About';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { Founder } from './components/Founder';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { OurApproach } from './components/OurApproach';
import { ProjectsPlaceholder } from './components/ProjectsPlaceholder';
import { Services } from './components/Services';
import { WhySkyzim } from './components/WhySkyzim';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <WhySkyzim />
        <ProjectsPlaceholder />
        <OurApproach />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
