export default function Areas() {
  const chips = [
    "Toronto", "North York", "Etobicoke", "Scarborough", "Vaughan",
    "Concord", "Thornhill", "Richmond Hill", "Markham", "Mississauga",
    "Brampton", "Leaside", "Hamilton", "Barrie", "Huntsville", "Ottawa"
  ];

  return (
    <section id="areas" className="areas" aria-labelledby="areas-heading">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Service Areas</span>
          <h2 id="areas-heading" className="section-title">Serving Toronto &amp; Beyond</h2>
          <p className="section-subtitle">
            From downtown condos to suburban homes. Local, long-distance, and everywhere in between.
          </p>
        </div>

        <div className="areas__chips reveal">
          {chips.map((chip, idx) => (
            <span key={idx} className="area-chip">{chip}</span>
          ))}
        </div>

        <div className="areas__map reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11520.5!2d-79.5098687!3d43.8344923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUwJzA0LjIiTiA3OcKwMzAnMzUuNSJX!5e0!3m2!1sen!2sca!4v1"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DCA Moving location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
