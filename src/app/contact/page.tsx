import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Contact Us | DCA Moving',
  description: 'Get in touch with DCA Moving for your free estimate.',
};

export default function ContactPage() {
  return (
    <main id="main">
      <div style={{ backgroundColor: 'var(--navy)', paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh' }}>
        <QuoteForm />
      </div>
    </main>
  );
}
