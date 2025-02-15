import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail=process.env.FROM_EMAIL;
export async function POST(req,res) {

  try {
    const body = await req.json(); 
    console.log("Request body:", body);

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields (email, subject, message)" },
        { status: 400 }
      ); 
    }

    console.log("Received email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    const recipientEmail = "addishiwot963@gmail.com";

    const data = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      )
      
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
