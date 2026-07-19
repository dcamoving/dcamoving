export default function Services() {
  const services = [
    {
      title: "Local Residential Moves",
      desc: "Toronto and the entire GTA. Your furniture treated like our own — blanketed, wrapped, and protected every step.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Long-Distance Moves",
      desc: "Ontario-wide, cross-Canada, and cross-border to the USA. Same obsessive care, just farther.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
    },
    {
      title: "Condo & Apartment Moves",
      desc: "Elevator bookings, tight hallways, building rules — we know the drill. Floor and wall protection included.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22V12h6v10M9 6h.01M15 6h.01M9 10h.01M15 10h.01" />
        </svg>
      ),
    },
    {
      title: "Office & Commercial",
      desc: "Minimize downtime. We relocate offices efficiently — desks, servers, filing cabinets, the lot.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          <path d="M12 12h.01" />
        </svg>
      ),
    },
    {
      title: "Professional Packing",
      desc: "Full-service packing and unpacking. We bring all boxes, tape, paper, and bubble wrap. You don't lift a finger.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: "Disassembly & Reassembly",
      desc: "Beds, wardrobes, shelving units — taken apart carefully and put back together in your new space.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Piano & Specialty Items",
      desc: "Pianos, pool tables, antiques, artwork. Specialty items need specialty care — and that's our standard.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      title: "Heavy Items",
      desc: "Home gyms, safes, steel cabinets, treadmills. We have the equipment and the muscle. No item too heavy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6.5 6.5h11M6.5 17.5h11" />
          <path d="M4 6.5a2.5 2.5 0 015 0v11a2.5 2.5 0 01-5 0z" />
          <path d="M15 6.5a2.5 2.5 0 015 0v11a2.5 2.5 0 01-5 0z" />
        </svg>
      ),
    },
    {
      title: "Last-Minute & Same-Day",
      desc: "Plans changed? Closing tomorrow? We make it happen. Same quality, same care — just faster.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Storage & POD Loading",
      desc: "Renovating? Between homes? We load and unload storage containers and PODs with care.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      title: "Senior & Retirement Moves",
      desc: "Patient, respectful, unhurried. We help seniors transition with dignity — from packing memories to settling in.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    }
  ];

  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What We Do</span>
          <h2 id="services-heading" className="section-title">Every Move. Every Size. Done Right.</h2>
          <p className="section-subtitle">
            From studio apartments to five-bedroom homes. Down the street or across the country. We handle it all with the same care.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, idx) => (
            <article key={idx} className="service-card reveal">
              <div className="service-card__icon">
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
