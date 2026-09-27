'use client';

import { useState } from 'react';

export default function QuoteFormV2({ idPrefix = 'q' }: { idPrefix?: string }) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form State
  const [formData, setFormData] = useState({
    Move_From: '',
    Move_To: '',
    Move_Date: '',
    Home_Size: '',
    Name: '',
    Phone: '',
    Email: '',
    Contact_Method: 'Phone'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSizeSelect = (size: string) => {
    setFormData(prev => ({ ...prev, Home_Size: size }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    setStatus('submitting');
    
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: dataToSend,
      });

      if (!response.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  // We will render success state inside the main section

  return (
    <section className="quote" aria-labelledby="quote-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <h2 id="quote-heading" className="section-title" style={{ color: '#fff' }}>
            Lock in an Exact Guaranteed Hourly Rate
          </h2>
          <div className="quote-progress" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px', color: '#fff' }}>
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`} style={{ opacity: step >= 1 ? 1 : 0.5, fontWeight: step === 1 ? 'bold' : 'normal' }}>1. Details</div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`} style={{ opacity: step >= 2 ? 1 : 0.5, fontWeight: step === 2 ? 'bold' : 'normal' }}>2. Size</div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`} style={{ opacity: step >= 3 ? 1 : 0.5, fontWeight: step === 3 ? 'bold' : 'normal' }}>3. Contact</div>
          </div>
        </div>

        {status === 'success' ? (
          <div className="quote__form" style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" style={{ width: '64px', height: '64px', margin: '0 auto 16px' }}>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>Request Sent!</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>Denis will be in touch with you shortly.</p>
          </div>
        ) : status === 'error' ? (
          <div className="quote__form" style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="2" style={{ width: '64px', height: '64px', margin: '0 auto 16px' }}>
              <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <h3 style={{ fontSize: '28px', marginBottom: '12px' }}>Something went wrong</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '24px' }}>Please try again or contact us directly.</p>
            <button className="btn btn--primary" onClick={() => { setStatus('idle'); setStep(1); }}>Try Again</button>
          </div>
        ) : (
          <form className="quote__form reveal progressive-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step slide-in">
              <div className="quote__field">
                <label className="quote__label" htmlFor={`${idPrefix}-from`}>Moving From (Address)</label>
                <input className="quote__input" type="text" id={`${idPrefix}-from`} name="Move_From" placeholder="Current address" value={formData.Move_From} onChange={handleInputChange} required />
              </div>
              <div className="quote__field">
                <label className="quote__label" htmlFor={`${idPrefix}-to`}>Moving To (Address)</label>
                <input className="quote__input" type="text" id={`${idPrefix}-to`} name="Move_To" placeholder="New address" value={formData.Move_To} onChange={handleInputChange} required />
              </div>
              <div className="quote__field quote__field--full">
                <label className="quote__label" htmlFor={`${idPrefix}-date`}>Target Move Date</label>
                <input className="quote__input" type="date" id={`${idPrefix}-date`} name="Move_Date" value={formData.Move_Date} onChange={handleInputChange} required />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step slide-in quote__field--full">
              <label className="quote__label" style={{ marginBottom: '16px', display: 'block', textAlign: 'center' }}>Select Property Size</label>
              <div className="size-selector-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px' }}>
                {['Studio', '1 Bedroom', '2 Bedrooms', '3+ Bedrooms', 'Office'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-card ${formData.Home_Size === size ? 'selected' : ''}`}
                    style={{ 
                      padding: '20px', 
                      background: formData.Home_Size === size ? 'var(--orange)' : 'var(--white)',
                      color: formData.Home_Size === size ? 'var(--white)' : 'var(--navy)',
                      border: '1px solid var(--gray-200)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all var(--transition)'
                    }}
                    onClick={() => handleSizeSelect(size)}
                  >
                    <div className="size-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '32px', height: '32px' }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{size}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step slide-in">
              <div className="quote__field">
                <label className="quote__label" htmlFor={`${idPrefix}-name`}>Your Name</label>
                <input className="quote__input" type="text" id={`${idPrefix}-name`} name="Name" value={formData.Name} onChange={handleInputChange} required />
              </div>
              <div className="quote__field">
                <label className="quote__label" htmlFor={`${idPrefix}-phone`}>Phone Number</label>
                <input className="quote__input" type="tel" id={`${idPrefix}-phone`} name="Phone" value={formData.Phone} onChange={handleInputChange} required />
              </div>
              <div className="quote__field quote__field--full">
                <label className="quote__label" htmlFor={`${idPrefix}-email`}>Email Address</label>
                <input className="quote__input" type="email" id={`${idPrefix}-email`} name="Email" value={formData.Email} onChange={handleInputChange} required />
              </div>
              <div className="quote__field quote__field--full">
                <label className="quote__label" htmlFor={`${idPrefix}-contact-method`}>Preferred Contact Method</label>
                <select className="quote__select" id={`${idPrefix}-contact-method`} name="Contact_Method" value={formData.Contact_Method} onChange={handleInputChange} style={{ color: '#fff' }}>
                  <option value="Phone" style={{ color: '#fff', backgroundColor: '#0b2545' }}>Phone</option>
                  <option value="SMS" style={{ color: '#fff', backgroundColor: '#0b2545' }}>SMS / Text</option>
                  <option value="Email" style={{ color: '#fff', backgroundColor: '#0b2545' }}>Email</option>
                </select>
              </div>
              <div className="quote__field--full" style={{ textAlign: 'center', marginTop: '16px' }}>
                <p className="privacy-microcopy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                  🔒 Your information is secure. We will never share or sell your contact details.
                </p>
              </div>
            </div>
          )}

          <div className="quote__submit form-nav" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
            {step > 1 && (
              <button type="button" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} onClick={prevStep}>
                Back
              </button>
            )}
            <button 
              type={step < 3 ? 'button' : 'submit'} 
              className="btn btn--primary" 
              disabled={status === 'submitting' || (step === 2 && !formData.Home_Size)}
              onClick={(e) => {
                if (step < 3) {
                  const form = e.currentTarget.closest('form');
                  if (form && form.checkValidity()) {
                    nextStep();
                  } else {
                    form?.reportValidity();
                  }
                }
              }}
            >
              {step < 3 ? 'Continue' : (status === 'submitting' ? 'Sending...' : 'Request Estimate')}
            </button>
          </div>
        </form>
        )}
      </div>
    </section>
  );
}
