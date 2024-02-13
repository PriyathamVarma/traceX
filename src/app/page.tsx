"use client";

import MailComponent from "./components/templates/mail";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <h1>Trace X</h1>
      <MailComponent />
    </main>
  );
};

export default Home;
