import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as sgMail from "@sendgrid/mail";

// /api/v1/email

// Response Data
type ResponseData = {
  message: string;
};

const htmlContent = `
<div class="invite-container">
  <h1>Trace X is inviting you</h1>
  <p>We're inviting you to join Trace X platform for following the product:</p>
  <ul>
    <li>Benefit 1: Explain the first benefit of joining.</li>
    <li>Benefit 2: Explain the second benefit of joining.</li>
    <li>Benefit 3: Explain the third benefit of joining.</li>
  </ul>
  <p>Ready to get started? Click the button below to accept your invitation.</p>
  <a href="your-signup-link.com" class="accept-button">Accept Invitation</a>
  <p>Already have an account? <a href="your-login-link.com">Log in here.</a></p>
</div>
`;

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  sgMail.setApiKey(process.env.SENDGRID_EMAIL_API as string);
  const fromAddress = process.env.SENDGRID_FROM_EMAIL as string;

  const url = new URL(req.url);

  const toAddress = url.searchParams.get("to");

  try {
    await sgMail.send({
      to: toAddress as string, // Change to your recipient
      from: fromAddress, // Change to your verified sender
      subject: "Succesful message for Trace X",
      text: "Content",
      html: htmlContent,
    });

    return NextResponse.json({
      message: "Sending...",
    });
  } catch (err) {
    return NextResponse.json({
      error: "Error at sending email \n",
      err,
    });
  }
}
