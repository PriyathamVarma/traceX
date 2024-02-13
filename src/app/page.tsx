"use client";

import Link from "next/link";
import MailComponent from "./components/templates/mail";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <h1>Trace X</h1>
      <Link
        href="/dashboard"
        className="bg-blue-50 p-2 border-black rounded-md"
      >
        Dashboard
      </Link>
    </main>
  );
};

export default Home;
