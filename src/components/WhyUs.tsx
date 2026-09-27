export default function WhyUs() {
  const reasons = [
    {
      title: '5.0 ★ on Google',
      desc: '150+ verified reviews from real Toronto families. Not one review below five stars. That kind of consistency takes obsession.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: 'Owner On Every Job',
      desc: 'Denis answers the phone. Denis estimates your move. Denis shows up. No middlemen, no dispatchers, no surprises.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Zero-Damage Promise',
      desc: "Moving blankets, shrink wrap, floor runners, wall corner guards. Wrapped, blanketed, protected. Then moved like it's our own.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'On Time, Every Time',
      desc: 'Multiple reviews note we arrive 5–10 minutes early. Your moving day starts right because we respect your time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: 'Transparent Pricing',
      desc: "Honest hourly rate. No hidden fees. No 'stair charges' or 'long carry' surprises. The estimate you get is the price you pay.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why" className="why" aria-labelledby="why-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Why DCA</span>
          <h2 id="why-heading" className="section-title" style={{ color: '#fff' }}>
            150+ Five-Star Reviews Didn&apos;t Happen by Accident
          </h2>
          <p
            className="section-subtitle"
            style={{ marginInline: 'auto', color: 'rgba(255,255,255,0.6)' }}
          >
            Five pillars that set us apart from every other mover in the GTA.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((reason, idx) => (
            <article key={idx} className="why-card reveal">
              <div className="why-card__icon">{reason.icon}</div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__desc">{reason.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
