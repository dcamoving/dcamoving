export default function TrustBadges() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ padding: '10px 20px', background: '#f4f4f4', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', color: '#333', fontWeight: 'bold' }}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        CAM Certified Member
      </div>
      <div style={{ padding: '10px 20px', background: '#f4f4f4', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', color: '#333', fontWeight: 'bold' }}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
        BBB A+ Rated
      </div>
      <div style={{ padding: '10px 20px', background: '#f4f4f4', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', color: '#333', fontWeight: 'bold' }}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        WSIB Compliant
      </div>
    </div>
  );
}
