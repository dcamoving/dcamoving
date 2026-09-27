export default function Reviews() {
  const reviews = [
    {
      initial: 'A',
      name: 'Alayna Lea',
      text: `"ABSOLUTELY PHENOMENAL service! Dennis and his team worked a tireless 16-hour day to ensure every item in our Leaside home was carefully wrapped and moved with precision."`,
    },
    {
      initial: 'S',
      name: 'Susanna Beyn',
      text: `"I've used DCA twice now and honestly can't say enough great things. Denis and team are absolutely phenomenal from start to finish."`,
    },
    {
      initial: 'S',
      name: 'Shirley Katz',
      text: `"I think I found the Moving Magician. They not only took very good care of my things, they also took care of me, easing the nerves of upheaval."`,
    },
    {
      initial: 'D',
      name: 'Douglas & Marina S',
      text: `"We used Denis and his team for a big move from Vaughan to Barrie. A full 5-bedroom home and they handled everything incredibly professionally."`,
    },
    {
      initial: 'B',
      name: 'Bryan Passifiume',
      text: `"Dennis moved my family from Toronto to Ottawa, quickly and carefully. In an industry full of scams and crooks, he's definitely somebody to trust."`,
    },
    {
      initial: 'L',
      name: 'Laura M',
      text: `"Denis and his team deserve all the stars - 5 isn't enough! They provided quality same-day last minute service at the best price. Communication was easy and consistent."`,
    },
    {
      initial: 'V',
      name: 'Vladimir Samoilov',
      text: `"Working with DCA Moving was a great pleasure from start to finish. Denis is a very pleasant person to deal with and verified the moving date multiple times."`,
    },
    {
      initial: 'S',
      name: 'Sharone Benegbi',
      text: `"DCA movers are by far the best movers I have ever used! All my delicate items were handled with care, wrapped properly and protected from start to finish."`,
    },
    {
      initial: 'O',
      name: 'Olivia Corrado',
      text: `"Dennis and his team made the extremely stressful process of moving a lot less stressful! Wrapped our furniture with care, were fast and effective."`,
    },
  ];

  return (
    <section id="reviews" className="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Reviews</span>
          <h2 id="reviews-heading" className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>
            Every review is real. Every star is earned. Here&apos;s what Toronto families say about
            working with Denis and his team.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, idx) => (
            <article key={idx} className="review-card reveal">
              <div className="review-card__header">
                <div className="review-card__avatar">{review.initial}</div>
                <span className="review-card__name">{review.name}</span>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 20 20">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.65 3.56.86 5.02L10 13l-4.51 2.37.86-5.02L2.7 6.8l4.91-.86L10 1z" />
                  </svg>
                ))}
              </div>
              <p className="review-card__text">{review.text}</p>
            </article>
          ))}
        </div>

        <div className="reviews__cta reveal">
          <a
            href="https://maps.app.goo.gl/7ARG9345HXoKojRS9"
            className="btn btn--outline-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Read 150+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
