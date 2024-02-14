"use client";

import LoginForm from "./components/organisms/forms/login";
import SignupForm from "./components/organisms/forms/signup";
import Header from "./components/templates/header";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session }: any = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Header />
      <h1>Main Page</h1>
      <div className="flex flex-row space-x-10">
        {!session ? (
          <>
            <LoginForm />
            <SignupForm />
          </>
        ) : (
          <>
            <button
              onClick={() => {
                signOut();
              }}
              className="bg-blue-50 p-2 hover:bg-black border hover:text-white border-black rounded-md"
            >
              Logout {session.user?.email}
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
