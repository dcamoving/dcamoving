export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust indicators">
      <div className="container trust-bar__inner">
        <div className="trust-bar__item">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="star-icon" viewBox="0 0 20 20">
                <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
              </svg>
            ))}
          </span>
          5.0 &middot; 150+ Reviews
        </div>
        <div className="trust-bar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Fully Insured
        </div>
        <div className="trust-bar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
          Owner-Operated
        </div>
        <div className="trust-bar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="2" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Free In-Home Estimate
        </div>
      </div>
    </section>
  );
}
