import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | DCA Moving',
  description: 'Privacy Policy for DCA Moving.',
};

export default function PrivacyPolicy() {
  return (
    <main id="main" className="container container--narrow" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p style={{ marginBottom: '32px', color: 'var(--gray-500)' }}>
          Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--navy)' }}>1. Introduction</h2>
          <p style={{ marginBottom: '16px' }}>
            Welcome to DCA Moving. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--navy)' }}>2. The Data We Collect About You</h2>
          <p style={{ marginBottom: '16px' }}>
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li style={{ marginBottom: '8px' }}><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li style={{ marginBottom: '8px' }}><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--navy)' }}>3. How We Use Your Personal Data</h2>
          <p style={{ marginBottom: '16px' }}>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., to provide moving services or provide a quote).</li>
            <li style={{ marginBottom: '8px' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li style={{ marginBottom: '8px' }}>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--navy)' }}>4. Data Security</h2>
          <p style={{ marginBottom: '16px' }}>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--navy)' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '16px' }}>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p style={{ marginBottom: '8px' }}><strong>Email:</strong> <a href="mailto:info@dcamoving.com" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>info@dcamoving.com</a></p>
          <p style={{ marginBottom: '8px' }}><strong>Phone:</strong> <a href="tel:+14168327474" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>(416) 832-7474</a></p>
          <p style={{ marginBottom: '8px' }}><strong>Address:</strong> 53 Sherwood Park Dr, Concord, ON L4K 4X7</p>
        </section>

        <div style={{ marginTop: '48px' }}>
          <Link href="/" className="btn btn--primary">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
