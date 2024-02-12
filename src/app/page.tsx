// import Image from "next/image";
"use client";
import Link from "../../node_modules/next/link";
import React, { useState } from "react";
import sendgrid from "@sendgrid/mail";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { email } = data;

      const msg = {
        to: email,
        from: "your_email@example.com", // Replace with your sender email
        subject: "Invitation to Join Us!",
        text: "This is an invitation to join our platform. Click here to sign up: https://your-signup-link.com",
        html: "<b>This is an invitation to join our platform! Click here to sign up: https://your-signup-link.com</b>", // Optional HTML content
      };

      if (process.env.SENDGRID_API_KEY) {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
      } else {
        throw new Error(
          "SendGrid API key not found. Please set it in your .env file or provide it directly.",
        );
      }

      await sendgrid.send(msg);

      setSuccess("Invitation email sent successfully!");
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TRACE X</h1>
      <Link href="/dashboard" className="bg-blue-50 p-4 hover:bg-blue-200">
        Dashboard
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && <span>Email is required</span>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Invitation"}
        </button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
    </main>
  );
}
