'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Areas from '@/components/Areas';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import QuoteFormV2 from '@/components/QuoteFormV2';

export default function PreviewPage() {
  useEffect(() => {
    // Scroll Reveal via IntersectionObserver
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );

      revealEls.forEach((el) => observer.observe(el));

      return () => {
        revealEls.forEach((el) => observer.unobserve(el));
      };
    } else {
      // Fallback
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  return (
    <>
      <main id="main">
        {/* Preview Banner */}
        <div style={{ backgroundColor: 'var(--orange)', color: '#fff', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px', position: 'relative', zIndex: 9999 }}>
          Phase 1 Blueprint Preview Mode (Form & Badges Updated)
        </div>
        
        <Hero />

        <TrustBar />
        <Services />
        <Methodology />
        <WhyUs />
        <HowItWorks />
        <Areas />
        <Reviews />
        <About />
        <FAQ />
        
        {/* Bottom Quote Form Section */}
        <div style={{ backgroundColor: 'var(--navy)', paddingTop: '60px' }}>
          <QuoteFormV2 idPrefix="bottom" />
        </div>
      </main>
    </>
  );
}
