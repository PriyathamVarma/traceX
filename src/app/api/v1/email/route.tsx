import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as sgMail from "@sendgrid/mail";

// /api/v1/email

// Response Data
type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  sgMail.setApiKey(process.env.SENDGRID_EMAIL_API as string);
  try {
    await sgMail.send({
      to: "priyatham002@gmail.com", // Change to your recipient
      from: "hello@back3nd.com", // Change to your verified sender
      subject: "This is a simple message",
      text: "which contains some text",
      html: "<strong>and some html</strong>",
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
