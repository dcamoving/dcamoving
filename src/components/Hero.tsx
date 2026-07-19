import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80" 
          alt="Moving boxes" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="hero__gradient" aria-hidden="true"></div>
      <div className="container hero__content">
        <div className="hero__badge">
          <span className="stars" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="star-icon" viewBox="0 0 20 20">
                <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
              </svg>
            ))}
          </span>
          <span className="hero__badge-text">5.0 on Google &middot; 150+ Reviews</span>
        </div>

        <h1 className="hero__title">
          Toronto&apos;s Top-Rated Movers.<br /><em>Zero Damage. Zero Drama.</em>
        </h1>
        <p className="hero__subtitle">
          Moving done right the first time, for a stress-free, zero-damage experience. Denis handles every estimate and most jobs personally.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary">Get Free Quote</a>
          <a href="tel:+14168327474" className="btn btn--outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call (416) 832-7474
          </a>
        </div>

        <div className="hero__trust">
          <span className="hero__trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Owner-operated
          </span>
          <span className="hero__trust-divider" aria-hidden="true"></span>
          <span className="hero__trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Fully insured
          </span>
          <span className="hero__trust-divider" aria-hidden="true"></span>
          <span className="hero__trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Serving the GTA since 2017
          </span>
        </div>
      </div>
    </section>
  );
}
