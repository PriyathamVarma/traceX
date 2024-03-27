import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as sgMail from "@sendgrid/mail";

// /api/v1/email

// Response Data
type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ message: "Hello from Verdascope!" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  sgMail.setApiKey(process.env.SENDGRID_EMAIL_API as string);
  const fromAddress = process.env.SENDGRID_FROM_EMAIL as string;

  // const url = new URL(req.url);

  // const toAddress = url.searchParams.get("to");

  const { userId, userName, email, from, to } = await req.json();

  const htmlContent = `
<div class="invite-container">
  <h1>Verdascope is inviting you</h1>
  <p>We're inviting you to join Verdascope platform for following the product:</p>
  <p>${userName} requested help completing Scope 1 and Scope 2 Data in relation to your energy consumption associated with their product. They are interested in the emissions data between ${from} and ${to}. </p>
  <p>Ready to get started? Click the button below to accept your invitation.</p>
  <a href="${process.env.vercelLink}" class="accept-button">Accept Invitation</a>
  <p>Already have an account? <a href="your-login-link.com">Log in here.</a></p>
</div>
`;

  try {
    await sgMail.send({
      to: email as string, // Change to your recipient
      from: fromAddress, // Change to your verified sender
      subject: "Succesful message from Verdascope",
      text: "Content",
      html: htmlContent,
    });

    return NextResponse.json({
      message: "Sent email",
    });
  } catch (err) {
    return NextResponse.json({
      error: "Error at sending email \n",
      err,
    });
  }
}
