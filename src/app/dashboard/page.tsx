"use client";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";
import { signOut, useSession } from "next-auth/react";
import LoginForm from "../components/organisms/forms/login";
import SignupForm from "../components/organisms/forms/signup";

const Dashboard = () => {
  const { data: session }: any = useSession();
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <h1>Dashboard for trace x</h1>
      <MailComponent />
      {!session ? (
        <>
          <LoginForm />
          <SignupForm />
        </>
      ) : (
        <>
          <button className="bg-blue-50 p-2 hover:bg-black border hover:text-white border-black rounded-md">
            Logout {session.user?.email}
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
