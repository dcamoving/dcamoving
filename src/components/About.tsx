export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__inner reveal">
          <div className="about__photo">
            <span className="about__photo-text" aria-hidden="true">
              DCA
            </span>
            <div className="about__photo-label">
              <strong>Denis</strong>
              <span>Owner &amp; Operator</span>
            </div>
          </div>

          <div className="about__text">
            <span className="section-label">Meet Denis</span>
            <h2 id="about-heading">The Owner Who Still Answers the Phone</h2>
            <p>
              Most moving companies hide behind dispatchers and call centres. At DCA, Denis picks up
              the phone himself. He comes to your home for the estimate. He&apos;s on-site for
              nearly every single move.
            </p>
            <p>
              Since 2017, Denis has built DCA Moving on a simple idea: treat every home like his
              own. That means wrapping every piece of furniture, protecting every floor, and showing
              up early — not because it&apos;s policy, but because he cares.
            </p>
            <div className="about__quote">
              &quot;Denis answers the phone. Denis quotes your move. Denis shows up. That&apos;s not
              a tagline — it&apos;s how we&apos;ve earned 150+ five-star reviews.&quot;
            </div>
            <p>
              It&apos;s this personal touch — the same person from first call to final box — that
              makes DCA different from every other mover in Toronto.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a href="tel:+14168327474" className="btn btn--primary">
                Call Denis: (416) 832-7474
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
