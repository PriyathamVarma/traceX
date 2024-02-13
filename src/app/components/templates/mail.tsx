// import Image from "next/image";
"use client";
import React, { useState } from "react";
import axios from "axios";

const MailComponent = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const to = e.target.email.value;

    try {
      await axios.post(`/api/v1/email?to=${to}`);

      console.log("Email Sent to from client side", to);
    } catch (err) {
      console.log("Error at sending mail from client \n", err);
    }
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

export default MailComponent;
