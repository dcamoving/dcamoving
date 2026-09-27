export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Free In-Home Estimate',
      desc: 'Denis comes to your home personally. He walks through every room, notes every detail, and builds an accurate plan.',
    },
    {
      num: '2',
      title: 'Transparent Estimate',
      desc: 'You get an honest hourly rate with no hidden fees. No surprises on moving day. What we estimate is what you pay.',
    },
    {
      num: '3',
      title: 'We Wrap & Protect',
      desc: 'Every piece of furniture blanketed and shrink-wrapped. Floors covered. Wall corners guarded. Your home treated with respect.',
    },
    {
      num: '4',
      title: 'On-Time, Damage-Free',
      desc: 'We arrive early, work efficiently, and deliver everything in perfect condition. Your new chapter starts without a scratch.',
    },
  ];

  return (
    <section id="how" className="how" aria-labelledby="how-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">How It Works</span>
          <h2 id="how-heading" className="section-title">
            Four Simple Steps to a Stress-Free Move
          </h2>
        </div>

        <div className="how__grid">
          {steps.map((step, idx) => (
            <div key={idx} className="how-step reveal">
              <div className="how-step__number">{step.num}</div>
              <h3 className="how-step__title">{step.title}</h3>
              <p className="how-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
