'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Areas from '@/components/Areas';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import QuoteFormV2 from '@/components/QuoteFormV2';

export default function Home() {
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
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
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

  useEffect(() => {
    let hasPlayed = false;
    let isAttemptingPlay = false;
    let audio: HTMLAudioElement | null = null;

    const playIntro = () => {
      if (hasPlayed || isAttemptingPlay) return;
      
      if (typeof window !== 'undefined') {
        isAttemptingPlay = true;
        
        if (!audio) {
          audio = new Audio('/welcome.wav');
        }
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Successfully played
            hasPlayed = true;
            isAttemptingPlay = false;
            cleanup();
          }).catch((err) => {
            // Browser autoplay policy blocked it, wait for next user interaction
            isAttemptingPlay = false;
          });
        } else {
           isAttemptingPlay = false;
        }
      }
    };

    const cleanup = () => {
      document.removeEventListener('click', playIntro);
      document.removeEventListener('keydown', playIntro);
      document.removeEventListener('touchstart', playIntro);
      document.removeEventListener('scroll', playIntro);
      document.removeEventListener('mousemove', playIntro);
      document.removeEventListener('pointerdown', playIntro);
    };

    // Try playing automatically after a short delay
    const timer = setTimeout(playIntro, 800);

    // Bind to EVERY possible first interaction aggressively on the document
    document.addEventListener('click', playIntro);
    document.addEventListener('keydown', playIntro);
    document.addEventListener('touchstart', playIntro);
    document.addEventListener('scroll', playIntro);
    document.addEventListener('mousemove', playIntro);
    document.addEventListener('pointerdown', playIntro);

    return () => {
      clearTimeout(timer);
      cleanup();
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <main id="main">
      {/* NATIVE AUDIO PLAYER FOR TESTING */}
      <div style={{ padding: '20px', background: '#e0f7fa', textAlign: 'center', zIndex: 9999, position: 'relative' }}>
        <h3 style={{ marginBottom: '10px' }}>Audio Test Player</h3>
        <p style={{ marginBottom: '10px' }}>If you still hear nothing automatically, please press the Play button below.</p>
        <audio controls src="/welcome.wav" style={{ display: 'inline-block' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
      {/* END NATIVE AUDIO PLAYER */}

      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Areas />
      <Reviews />
      <About />
      <FAQ />
      
      {/* Bottom Quote Form Section */}
      <div id="contact" style={{ backgroundColor: 'var(--navy)', paddingTop: '60px' }}>
        <QuoteFormV2 idPrefix="bottom" />
      </div>
    </main>
  );
}
