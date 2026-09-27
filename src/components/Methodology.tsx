export default function Methodology() {
  return (
    <section className="methodology" style={{ padding: '60px 0', backgroundColor: 'var(--light-bg)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">Risk Mitigation & Flawless Execution</h2>
          <p className="section-subtitle">
            We operate on a stringent methodology designed to eliminate risk and ensure asset preservation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="reveal" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--navy)' }}>1. Environmental Evaluation</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              For complex moves, we conduct thorough origin and destination evaluations, analyzing floor plans, elevator dimensions, and architectural constraints prior to move day.
            </p>
          </div>

          <div className="reveal" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--navy)' }}>2. Granular Inventory Tracking</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              High-value items are documented comprehensively. We track asset condition and ensure perfect accountability from origin to final placement.
            </p>
          </div>

          <div className="reveal" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--navy)' }}>3. Institutional Protection Protocols</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
              We utilize floor runners, corner guards, and structural protection before a single item is moved, ensuring total architectural preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
