import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link href="/" className="header__logo" aria-label="DCA Moving home">
              <svg width="32" height="32" viewBox="0 0 36 36" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#FF7A1A" />
                <path d="M9 10h7c5.5 0 10 3.6 10 8s-4.5 8-10 8H9V10z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M13 14h3c3 0 5.5 1.6 5.5 4s-2.5 4-5.5 4h-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              DCA <span>Moving</span>
            </Link>
            <p>Toronto&apos;s top-rated owner-operated moving company. 5.0 stars on Google. Moving done right the first time.</p>
          </div>

          <div className="footer__links-col">
            <h3 className="footer__heading">Quick Links</h3>
            <div className="footer__links">
              <a href="#services">Services</a>
              <a href="#areas">Service Areas</a>
              <a href="#reviews">Reviews</a>
              <a href="#about">About Denis</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Get a Quote</a>
            </div>
          </div>

          <div className="footer__contact-col">
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact">
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+14168327474">(416) 832-7474</a>
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@dcamoving.com">info@dcamoving.com</a>
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a href="https://maps.app.goo.gl/7ARG9345HXoKojRS9" target="_blank" rel="noopener noreferrer">53 Sherwood Park Dr, Concord, ON</a>
              </p>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Mon–Sat 8am–8pm
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} DCA Moving. All rights reserved.</span>
          <span>
            <span className="stars" aria-label="5 stars" style={{ display: "inline-flex", verticalAlign: "middle" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="star-icon" viewBox="0 0 20 20" style={{ width: "13px", height: "13px" }}>
                  <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                </svg>
              ))}
            </span>
            &nbsp;5.0 on Google &middot; 150+ Reviews
          </span>
        </div>
      </div>
    </footer>
  );
}
