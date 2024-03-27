"use client";

import Header from "./components/templates/header";
//import { UseUser } from "@auth0/nextjs-auth0/dist/client/use-user";

const Home = () => {
  return (
    <main className="flex  min-h-screen flex-col items-center bg-background1">
      <Header />
      <h1>Go to Dashboard</h1>
      <div className="flex flex-row space-x-10"></div>
    </main>
  );
};

export default Home;
