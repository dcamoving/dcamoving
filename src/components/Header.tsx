"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = !isMobileNavOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`} role="banner">
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label="DCA Moving home" onClick={closeMenu}>
            <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
              <rect width="36" height="36" rx="8" fill="#FF7A1A" />
              <path d="M9 10h7c5.5 0 10 3.6 10 8s-4.5 8-10 8H9V10z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M13 14h3c3 0 5.5 1.6 5.5 4s-2.5 4-5.5 4h-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            DCA <span>Moving</span>
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#areas">Areas</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header__actions">
            <a href="tel:+14168327474" className="header__phone" aria-label="Call DCA Moving at 416-832-7474">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (416) 832-7474
            </a>
            <a href="#contact" className="btn btn--primary header__quote-btn">Get Free Quote</a>
            <button className={`hamburger ${isMobileNavOpen ? "is-open" : ""}`} aria-label="Open navigation menu" aria-expanded={isMobileNavOpen} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav id="mobile-nav" className={`mobile-nav ${isMobileNavOpen ? "is-open" : ""}`} role="navigation" aria-label="Mobile navigation">
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#areas" onClick={closeMenu}>Service Areas</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#about" onClick={closeMenu}>About Denis</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" onClick={closeMenu}>Get a Quote</a>
        <div className="mobile-nav__cta">
          <a href="tel:+14168327474" className="btn btn--primary" style={{ justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call (416) 832-7474
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="mobile-bottom-bar" role="complementary" aria-label="Quick actions">
        <a href="tel:+14168327474" aria-label="Call DCA Moving">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Call Now
        </a>
        <a href="#contact" aria-label="Get a free quote" onClick={closeMenu}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          Free Quote
        </a>
      </div>
    </>
  );
}
