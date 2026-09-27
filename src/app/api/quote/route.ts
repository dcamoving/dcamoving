import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    // Generate HTML string from all form fields dynamically
    const emailHtml = Object.entries(data)
      .map(
        ([key, value]) =>
          `<strong>${key.replace('_', ' ')}:</strong> <p>${value || 'Not provided'}</p>`,
      )
      .join('<br/>');

    const { data: emailData, error } = await resend.emails.send({
      from: 'DCA Moving <hello@dcamoving.ca>',
      to: ['dcamoving@gmail.com'],
      ...(data.Email ? { replyTo: data.Email as string } : {}),
      subject: `New Moving Estimate Request from ${data.Name || 'a customer'}`,
      html: `<h2>New Estimate Request Details</h2><br/>${emailHtml}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Send confirmation email to the customer
    if (data.Email) {
      const { error: customerEmailError } = await resend.emails.send({
        from: 'DCA Moving <hello@dcamoving.ca>',
        to: [data.Email as string],
        replyTo: 'dcamoving@gmail.com',
        subject: "You're one step closer to a stress-free move! 🚚",
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
            <div style="text-align: center; padding: 30px 0; border-bottom: 2px solid #f59e0b;">
              <h2 style="color: #020617; margin-bottom: 0; font-weight: 300; letter-spacing: 1px;">DCA <span style="color: #f59e0b;">Moving</span></h2>
              <p style="font-size: 14px; color: #64748b; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Moving Estimate Request</p>
            </div>
            
            <div style="padding: 30px 20px;">
              <p style="font-size: 18px; margin-top: 0; color: #0f172a;">Hi ${data.Name || 'there'},</p>
              
              <p style="font-size: 16px;">Thanks for reaching out to DCA Moving! We have received your estimate request and our team is already reviewing the details. Moving can be overwhelming, but you've just taken the best first step toward a seamless, zero-drama transition.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
                <p style="font-size: 16px; margin-top: 0; font-weight: bold;">What happens next?</p>
                <ul style="font-size: 16px; padding-left: 20px; color: #334155; margin-bottom: 0;">
                  <li style="margin-bottom: 10px;">Denis or one of our relocation specialists will personally review your move details.</li>
                  <li style="margin-bottom: 10px;">We will prepare a transparent, no-obligation hourly estimate tailored specifically to your needs.</li>
                  <li>We'll reach out to you shortly (usually within a few hours) via your preferred contact method.</li>
                </ul>
              </div>

              <div style="padding-top: 10px;">
                <h3 style="color: #0f172a; font-weight: 500;">Here is a summary of what you shared with us:</h3>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 20px; font-size: 15px; color: #475569;">
                  ${emailHtml}
                </div>
              </div>

              <p style="font-size: 16px; margin-top: 30px;">If you remembered any additional details you'd like us to know, or if you have immediate questions, simply <strong>reply to this email</strong> and it will go directly to our team.</p>
              
              <p style="font-size: 16px; margin-top: 20px;">We look forward to taking the heavy lifting off your shoulders!</p>
              
              <p style="font-size: 16px; color: #475569; margin-top: 40px;">
                Warm regards,<br/>
                <strong style="color: #0f172a;">Denis & The DCA Moving Team</strong><br/>
                <span style="font-size: 14px;">Toronto's Top-Rated Movers</span>
              </p>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #020617; color: #94a3b8; font-size: 12px;">
              DCA Moving
            </div>
          </div>
        `,
      });

      if (customerEmailError) {
        console.error('Resend API Error (Customer Email):', customerEmailError);
        // We don't fail the overall request if the confirmation email fails, we just log it.
      }
    }

    return NextResponse.json(
      { message: 'Estimate request received successfully!', data: emailData },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error parsing estimate request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
