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
          `<strong>${key.replace(/_/g, ' ')}:</strong> <p>${value || 'Not provided'}</p>`,
      )
      .join('<br/>');

    const { data: emailData, error } = await resend.emails.send({
      from: 'DCA Moving <hello@dcamoving.ca>',
      to: ['dcamoving@gmail.com'],
      ...(data.Email ? { replyTo: data.Email as string } : {}),
      subject: `[ESTATE LEAD] New Private Consultation Request from ${data.Name || 'a VIP client'}`,
      html: `<h2>New Estate Lead / Consultation Request</h2><br/>${emailHtml}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Send premium confirmation email to the customer
    if (data.Email) {
      const { error: customerEmailError } = await resend.emails.send({
        from: 'DCA Moving <hello@dcamoving.ca>',
        to: [data.Email as string],
        replyTo: 'dcamoving@gmail.com',
        subject: "Your Private Consultation Request is Confirmed | DCA Moving",
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
            <div style="text-align: center; padding: 30px 0; border-bottom: 2px solid #f59e0b;">
              <h2 style="color: #020617; margin-bottom: 0; font-weight: 300; letter-spacing: 1px;">DCA <span style="color: #f59e0b;">Moving</span></h2>
              <p style="font-size: 14px; color: #64748b; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Private Client Services</p>
            </div>
            
            <div style="padding: 30px 20px;">
              <p style="font-size: 18px; margin-top: 0; color: #0f172a;">Dear ${data.Name || 'Client'},</p>
              
              <p style="font-size: 16px;">Thank you for requesting a private consultation with our Estate Relocation Team. We have successfully received your inquiry and our Dedicated Relocation Director has been immediately notified.</p>
              
              <p style="font-size: 16px;">We understand that high-value transitions—whether involving fine art, complex estates, or multi-residence synchronizations—require zero-defect execution, absolute discretion, and uncompromising protection.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0;">
                <p style="font-size: 16px; margin-top: 0; font-weight: bold;">What to expect next:</p>
                <ul style="font-size: 16px; padding-left: 20px; color: #334155; margin-bottom: 0;">
                  <li style="margin-bottom: 10px;">Our Director will personally review your submission.</li>
                  <li style="margin-bottom: 10px;">We will contact you shortly to coordinate an in-depth private consultation (either virtual or in-person).</li>
                  <li>During our consultation, we will establish a precise logistical timeline tailored strictly to your parameters.</li>
                </ul>
              </div>

              <div style="padding-top: 10px;">
                <h3 style="color: #0f172a; font-weight: 500;">Summary of your inquiry:</h3>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 20px; font-size: 15px; color: #475569;">
                  ${emailHtml}
                </div>
              </div>

              <p style="font-size: 16px; margin-top: 30px;">If there are any immediate details or non-disclosure agreements you wish to provide prior to our call, you may securely reply directly to this email.</p>
              
              <p style="font-size: 16px; margin-top: 20px;">We look forward to orchestrating a flawless transition for you.</p>
              
              <p style="font-size: 16px; color: #475569; margin-top: 40px;">
                Respectfully,<br/>
                <strong style="color: #0f172a;">Denis & The DCA Moving Team</strong><br/>
                <span style="font-size: 14px;">Toronto's Premier Logistics for High-Value Assets</span>
              </p>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #020617; color: #94a3b8; font-size: 12px;">
              DCA Moving | Private Client Services
            </div>
          </div>
        `,
      });

      if (customerEmailError) {
        console.error('Resend API Error (Customer Email):', customerEmailError);
      }
    }

    return NextResponse.json(
      { message: 'Estate consultation request received successfully!', data: emailData },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error parsing estate request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
