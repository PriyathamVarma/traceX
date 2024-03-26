"use client";

import Header from "./components/templates/header";
import { UseUser } from "@auth0/nextjs-auth0/dist/client/use-user";

const Home = () => {
  return (
    <main className="flex  m flex-col items-center bg-background1">
      <Header />
      <h1>Main Page</h1>
      <div className="flex flex-row space-x-10"></div>
    </main>
  );
};

export default Home;
