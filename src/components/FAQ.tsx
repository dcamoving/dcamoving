"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How is pricing calculated?",
      a: "We charge a transparent hourly rate based on the size of your move and the number of movers needed. Denis provides a free in-home estimate so you know exactly what to expect — no hidden fees, no surprise charges, no stair fees. The quote you receive is the price you pay."
    },
    {
      q: "Are you insured?",
      a: "Yes, DCA Moving is fully insured with comprehensive liability coverage. Every item we move is protected. We also use moving blankets, shrink wrap, floor runners, and wall corner guards as standard protection on every job."
    },
    {
      q: "Do you provide packing materials?",
      a: "Absolutely. We provide all packing materials including boxes, tape, packing paper, bubble wrap, and wardrobe boxes. We offer full-service packing where our team packs everything for you, or we can supply materials if you prefer to pack yourself."
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking 2–4 weeks in advance, especially for end-of-month moves. However, we also handle last-minute and same-day moves whenever possible. Call Denis directly and he'll let you know availability right away."
    },
    {
      q: "Do you handle pianos and heavy items?",
      a: "Yes. We specialize in moving pianos, pool tables, home gyms, safes, steel cabinets, and other heavy or awkward items. We have the right equipment and experienced crew to move these safely. Just let Denis know during the estimate."
    },
    {
      q: "Do you do long-distance moves?",
      a: "Yes. We handle moves across Ontario, cross-Canada, and even cross-border to the USA. Long-distance moves receive the same careful wrapping, protection, and personal attention from Denis as our local GTA moves."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">FAQ</span>
          <h2 id="faq-heading" className="section-title">Common Questions</h2>
        </div>

        <div className="faq__list reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button 
                  className="faq-item__btn" 
                  aria-expanded={isOpen} 
                  onClick={() => toggleFAQ(idx)}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div className="faq-item__answer" role="region" style={{ display: isOpen ? "block" : "none" }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
