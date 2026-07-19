export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Moving done right <span>the first time.</span></h1>
            <p>Your trusted moving partner in Vaughan and Toronto. We provide top-quality local and long-distance moving services with zero-damage guarantee.</p>
            <div className="hero-actions">
              <a href="tel:416-832-7474" className="btn-primary">Call (416) 832-7474</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>From initial planning to the final item unloaded, we handle every step with professionalism and care.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Home Moving Services</h3>
              <p>Specialists in residential moves across Toronto and beyond. We treat your belongings as if they were our own.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Office & Business Relocations</h3>
              <p>Efficient, organized, and timely moves to minimize downtime for your business operations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>Professional Packing</h3>
              <p>We safely wrap all furniture and delicate items using high-quality materials to shield your possessions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎹</div>
              <h3>Specialty Moving</h3>
              <p>Expert handling, moving, and setup of heavy and delicate items like pianos and pool tables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-image-wrapper">
               {/* Decorative Element / Placeholder for moving truck or team */}
               <div className="why-image-placeholder">
                  150+ 5-Star Reviews
               </div>
            </div>
            <div className="why-content">
              <h2>Why Choose DCA Moving?</h2>
              <ul className="feature-list">
                <li className="feature-item">
                  <div className="feature-icon">✔️</div>
                  <div className="feature-text">
                    <h4>Done Right the First Time</h4>
                    <p>We plan and execute correctly from the get-go. No mistakes, no delays.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-text">
                    <h4>Meticulous Care & Zero Damage</h4>
                    <p>Safe wrapping, protected floors and walls, and secure transport. We goal for absolute zero damage in transit.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">⏱️</div>
                  <div className="feature-text">
                    <h4>Professionalism & Punctuality</h4>
                    <p>A friendly, uniformed team that arrives on time, with open communication every step of the way.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Ready for a Stress-Free Move?</h2>
          <p>Get a free quote today and experience the DCA Moving difference.</p>
          <a href="tel:416-832-7474" className="btn-primary" style={{ backgroundColor: 'var(--primary)'}}>Call (416) 832-7474 Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>DCA Moving</h3>
              <p>Toronto&apos;s Top Rated Moving Company. Moving done right the first time.</p>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul>
                <li>Vaughan & Toronto, Ontario</li>
                <li>Phone: (416) 832-7474</li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li>Home Moving</li>
                <li>Office Relocation</li>
                <li>Packing Services</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} DCA Moving. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
