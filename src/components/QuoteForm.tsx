"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Replace with actual API endpoint in the future
    // await fetch('/api/quote', { method: 'POST', body: new FormData(e.currentTarget) });

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <section id="contact" className="quote" aria-labelledby="quote-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Get a Quote</span>
          <h2 id="quote-heading" className="section-title" style={{ color: "#fff" }}>
            Ready to Move? Let&apos;s Talk.
          </h2>
          <p className="section-subtitle" style={{ marginInline: "auto", color: "rgba(255,255,255,0.6)" }}>
            Fill in the details below and Denis will get back to you with a free, no-obligation estimate — usually within a few hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="quote__form reveal" style={{ textAlign: "center", color: "#fff", padding: "40px 0" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" style={{ width: "64px", height: "64px", margin: "0 auto 16px" }}>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>Request Sent!</h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>Denis will be in touch with you shortly.</p>
          </div>
        ) : (
          <form className="quote__form reveal" onSubmit={handleSubmit}>
            <div className="quote__field">
              <label className="quote__label" htmlFor="q-name">Your Name</label>
              <input className="quote__input" type="text" id="q-name" name="Name" placeholder="Full name" required autoComplete="name" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-phone">Phone Number</label>
              <input className="quote__input" type="tel" id="q-phone" name="Phone" placeholder="(416) 555-0123" required autoComplete="tel" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-email">Email</label>
              <input className="quote__input" type="email" id="q-email" name="Email" placeholder="you@example.com" required autoComplete="email" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-date">Move Date</label>
              <input className="quote__input" type="date" id="q-date" name="Move_Date" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-from">Moving From</label>
              <input className="quote__input" type="text" id="q-from" name="Move_From" placeholder="Current address" autoComplete="street-address" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-to">Moving To</label>
              <input className="quote__input" type="text" id="q-to" name="Move_To" placeholder="New address" autoComplete="street-address" />
            </div>

            <div className="quote__field">
              <label className="quote__label" htmlFor="q-size">Home Size</label>
              <select className="quote__select" id="q-size" name="Home_Size" defaultValue="">
                <option value="" disabled>Select size</option>
                <option value="Studio">Studio</option>
                <option value="1BR">1 Bedroom</option>
                <option value="2BR">2 Bedrooms</option>
                <option value="3BR">3 Bedrooms</option>
                <option value="4BR+">4+ Bedrooms</option>
                <option value="Office">Office / Commercial</option>
              </select>
            </div>

            <div className="quote__field quote__field--full">
              <label className="quote__label" htmlFor="q-notes">Additional Notes</label>
              <textarea className="quote__textarea" id="q-notes" name="Notes" placeholder="Piano? Pool table? Tight staircase? Let us know anything that will help us plan your move."></textarea>
            </div>

            <div className="quote__submit">
              <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Get My Free Quote"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
