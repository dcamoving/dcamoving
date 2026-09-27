import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Check if this is the correct event type
    if (payload.type === 'email.received') {
      const emailId = payload.data.email_id;
      
      if (!emailId) {
        return NextResponse.json({ error: 'Missing email_id' }, { status: 400 });
      }

      // Fetch the full email content securely from Resend using the email ID
      const { data: fullEmail, error: fetchError } = await resend.emails.receiving.get(emailId);
      
      if (fetchError || !fullEmail) {
        console.error('Error fetching email details:', fetchError);
        return NextResponse.json({ error: 'Failed to fetch email from Resend' }, { status: 500 });
      }

      // Re-package and forward the email to the Gmail inbox
      const { data: sendData, error: sendError } = await resend.emails.send({
        from: 'DCA Moving <hello@dcamoving.ca>',
        to: ['dcamoving@gmail.com'],
        replyTo: fullEmail.from,
        subject: `FWD: ${fullEmail.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; margin-bottom: 20px; padding: 10px; background-color: #f4f4f5; border-left: 4px solid #0b2545;">
            <p style="margin: 0 0 5px 0;"><strong>From:</strong> ${fullEmail.from}</p>
            <p style="margin: 0 0 5px 0;"><strong>To:</strong> ${fullEmail.to.join(', ')}</p>
            <p style="margin: 0;"><strong>Date:</strong> ${new Date(fullEmail.created_at).toLocaleString()}</p>
          </div>
          <div>
            ${fullEmail.html || `<p style="white-space: pre-wrap;">${fullEmail.text}</p>`}
          </div>
        `,
      });

      if (sendError) {
        console.error('Error forwarding email to Gmail:', sendError);
        return NextResponse.json({ error: 'Failed to forward email' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Email forwarded successfully' }, { status: 200 });
    }

    // Ignore other event types quietly to keep the webhook endpoint clean
    return NextResponse.json({ message: 'Event ignored' }, { status: 200 });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}
