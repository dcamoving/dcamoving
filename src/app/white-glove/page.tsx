import WhiteGloveHero from '@/components/WhiteGloveHero';

export default function WhiteGlovePreviewPage() {
  return (
    <main id="main" className="bg-slate-950 font-sans text-slate-300 selection:bg-amber-500/30">
      
      {/* White-Glove Environment Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-2.5 text-center font-bold text-sm tracking-widest uppercase relative z-[9999] shadow-lg shadow-amber-500/20">
        Private Client Services (Preview Environment)
      </div>
      
      <WhiteGloveHero />
      
      {/* Specialized Services */}
      <section className="wg-capabilities-section">
        <div className="wg-capabilities-glow"></div>
        
        <div className="container relative z-10">
          <div className="wg-capabilities-header">
            <h2 className="wg-capabilities-title">Specialized Capabilities</h2>
            <p className="wg-capabilities-desc">
              Our elite relocation teams are strictly vetted and equipped to manage the most demanding logistical parameters, ensuring zero-defect execution from high-value fine art transport to complex multi-residence synchronizations.
            </p>
          </div>
          
          <div className="wg-capabilities-grid">
            
            {/* Capability 1 */}
            <div className="wg-capability-card">
              <div className="wg-capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 className="wg-capability-name">Fine Art & Antique Logistics</h3>
              <p className="wg-capability-text">
                Museum-grade packing and secure transport for priceless collections, heirlooms, and investments. We mitigate every risk variable during transit.
              </p>
              <ul className="wg-capability-list">
                <li>Custom-built archival crating designed to exact dimensions.</li>
                <li>Climate-controlled transport protocols to prevent degradation.</li>
                <li>Dedicated handling teams trained in museum conservation standards.</li>
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="wg-capability-card">
              <div className="wg-capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="wg-capability-name">Estate & Multi-Residence</h3>
              <p className="wg-capability-text">
                Flawless execution of simultaneous property transitions, ensuring that your lifestyle is maintained without interruption during the move.
              </p>
              <ul className="wg-capability-list">
                <li>Complex logistical sequencing and strict timeline management.</li>
                <li>Advanced floor plan analysis for precise spatial planning.</li>
                <li>Single-point-of-contact coordination via your Dedicated Director.</li>
              </ul>
            </div>
            
            {/* Capability 3 */}
            <div className="wg-capability-card">
              <div className="wg-capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="wg-capability-name">Aesthetic Unpacking</h3>
              <p className="wg-capability-text">
                Beyond mere box removal, our teams recreate your living space down to the precise placement of designer furniture, décor, and personal items.
              </p>
              <ul className="wg-capability-list">
                <li>Pre-move photo inventory to match existing interior arrangements.</li>
                <li>Wardrobe staging and customized closet organization.</li>
                <li>Complete debris removal and deep cleaning integration.</li>
              </ul>
            </div>

            {/* Capability 4 */}
            <div className="wg-capability-card">
              <div className="wg-capability-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <h3 className="wg-capability-name">Premium Storage & Vaulting</h3>
              <p className="wg-capability-text">
                Highly secure, climate-stabilized storage facilities designed exclusively for high-net-worth inventory, art collections, and temporary staging.
              </p>
              <ul className="wg-capability-list">
                <li>24/7 strictly monitored, discrete facility perimeters.</li>
                <li>Itemized digital inventory management for instant retrieval.</li>
                <li>Specialized racks for fine art, rugs, and oversized antiquities.</li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
