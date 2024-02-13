// import Image from "next/image";
"use client";
import Link from "../../node_modules/next/link";
import React, { useState } from "react";
import * as sgMail from "@sendgrid/mail";

const Mail = () => {
  // sgMail.setApiKey(process.env.SENDGRID_EMAIL_API as string);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const to = e.target.email.value;

    const msg = {
      to: to, // Change to your recipient
      from: "em7389.back3nd.com", // Change to your verified sender
      subject: "This is a simple message",
      text: "which contains some text",
      html: "<strong>and some html</strong>",
    };

    console.log(msg);
  };
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-blue-50">
      <h1>TRACE X</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" className="p-2 m-2" />

        <button type="submit" className="bg-green-50 p-2 rounded-md">
          Invite
        </button>
      </form>
    </main>
  );
};

export default Mail;
