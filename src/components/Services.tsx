export default function Services() {
  const services = [
    {
      title: 'Fine Art & Antiques',
      desc: 'Museum-grade archival wraps, custom wooden crating, and precise environmental control for irreplaceable assets.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
    },
    {
      title: 'Estate & Multi-Residence',
      desc: 'Complex logistical sequencing, floor plan analysis, and dedicated executive oversight for seamless luxury transitions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Local & Long-Distance',
      desc: 'Toronto, the GTA, or cross-country. Transparent hourly rates for standard residential and apartment moves.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
    },
    {
      title: 'Office & Commercial',
      desc: 'Minimize downtime. We relocate offices efficiently — servers, executive suites, and corporate assets.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          <path d="M12 12h.01" />
        </svg>
      ),
    },
    {
      title: 'Aesthetic Unpacking',
      desc: 'White-glove unpacking services. We recreate your living space, referencing floor plans for precise designer furniture placement.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: 'Secure Storage & Vaults',
      desc: 'From standard POD loading to climate-controlled, 24/7 monitored vault storage for high-value collections.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What We Do</span>
          <h2 id="services-heading" className="section-title">
            Logistics for Every Tier.
          </h2>
          <p className="section-subtitle">
            From efficient standard residential moves to complex luxury estate transitions, we possess the capabilities to execute flawlessly at any scale.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, idx) => (
            <article key={idx} className="service-card reveal">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
