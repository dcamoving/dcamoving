'use client';
import { useState } from 'react';

export default function ConsultativeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/estate-quote', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrorMsg('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wg-form-container">
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', marginBottom: '24px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '32px', height: '32px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="wg-form-title" style={{ color: '#f59e0b', marginBottom: '16px' }}>Request Received</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontWeight: 300 }}>
            Our Dedicated Relocation Director has been notified. You will be contacted shortly to coordinate your private consultation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="wg-form-header">
            <h3 className="wg-form-title">Request a Private Consultation</h3>
            <p className="wg-form-subtitle">For complex estates and high-value collections.</p>
          </div>
          
          <div className="wg-form-group">
            <label className="wg-form-label">Name or Representative</label>
            <input 
              type="text" 
              name="Name"
              required 
              className="wg-form-input"
              placeholder="Enter full name"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Contact Number</label>
            <input 
              type="tel" 
              name="Phone"
              required 
              className="wg-form-input"
              placeholder="(555) 000-0000"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Email Address</label>
            <input 
              type="email" 
              name="Email"
              required 
              className="wg-form-input"
              placeholder="your@email.com"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Nature of Relocation</label>
            <select name="Nature_of_Relocation" className="wg-form-select">
              <option>Primary Residence / Estate</option>
              <option>Fine Art / Antique Collection</option>
              <option>Executive Corporate Transfer</option>
              <option>Multi-Residence Transition</option>
            </select>
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Origin Location</label>
            <input 
              type="text" 
              name="Origin"
              required 
              className="wg-form-input"
              placeholder="Current address or city"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Destination Location</label>
            <input 
              type="text" 
              name="Destination"
              required 
              className="wg-form-input"
              placeholder="New address or city"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Target Timeframe</label>
            <input 
              type="text" 
              name="Target_Date"
              required 
              className="wg-form-input"
              placeholder="e.g., Mid-October, ASAP, or specific date"
            />
          </div>

          <div className="wg-form-group">
            <label className="wg-form-label">Additional Context (Optional)</label>
            <textarea 
              name="Additional_Context"
              className="wg-form-textarea"
              placeholder="Note any specific requirements (custom crating, art handling, strict privacy)..."
            ></textarea>
          </div>

          {errorMsg && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px' }}>{errorMsg}</p>}

          <button type="submit" className="wg-form-submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Request Consultation'}
          </button>
        </form>
      )}
    </div>
  );
}
