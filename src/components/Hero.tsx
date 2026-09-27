import Image from 'next/image';
import Link from 'next/link';
import QuoteFormV2 from '@/components/QuoteFormV2';

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
        <a
          href="https://maps.app.goo.gl/7ARG9345HXoKojRS9"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__badge"
        >
          <span className="stars" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="star-icon" viewBox="0 0 20 20">
                <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
              </svg>
            ))}
          </span>
          <span className="hero__badge-text">5.0 on Google &middot; 150+ Reviews</span>
        </a>

        <h1 className="hero__title">
          Toronto&apos;s Top-Rated Movers.
          <br />
          <em>Zero Damage. Zero Drama.</em>
        </h1>
        <p className="hero__subtitle">
          Flawless execution for standard residential moves and complex luxury estate transitions.
          Zero damage guaranteed.
        </p>

        <div className="hero__ctas" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Link href="/#contact" className="btn btn--primary">
            Fast Hourly Quote
          </Link>
          <Link href="/white-glove" className="btn btn--outline" style={{ borderColor: '#d4af37', color: '#d4af37', backgroundColor: 'transparent' }}>
            Request Consultative Estate Plan
          </Link>
        </div>

        <div className="hero__form-wrapper" style={{ marginTop: '30px', marginBottom: '40px' }}>
          <QuoteFormV2 idPrefix="hero" />
        </div>

        <div className="hero__trust">
          <span className="hero__trust-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Owner-operated
          </span>
          <span className="hero__trust-divider" aria-hidden="true"></span>
          <span className="hero__trust-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Fully insured
          </span>
          <span className="hero__trust-divider" aria-hidden="true"></span>
          <span className="hero__trust-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
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
