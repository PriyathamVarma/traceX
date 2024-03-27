"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "../../shared/context/userContext";
import Header from "./components/templates/header";

const Home = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  }, []);
  return (
    <main className="flex  min-h-screen flex-col items-center bg-background1">
      <Header />
      <h1>Go to Dashboard</h1>
      <div className="flex flex-row space-x-10"></div>
    </main>
  );
};

export default Home;
