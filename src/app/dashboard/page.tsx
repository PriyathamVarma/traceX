"use client";
import Footer from "../components/templates/footer";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Dashboard = () => {
  const { user, error, isLoading } = useUser();
  console.log("user \n", user);
  console.log("Error \n", error);
  console.log("Loading \n", isLoading);
  return (
    <div className="flex flex-col h-screen bg-green-100">
      <Header />
      <div className="h-96 bg-red-100 py-8 px-12">
        <h1 className="font-extrabold text-lg">Hello {user?.name}</h1>
        <p className="font-medium text-sm">Your daily summary</p>
        <div className="bg-yellow-50 mt-4 flex flex-row space-x-8">
          <div className="bg-blue-50">
            <div className="border border-black">Report graph</div>
            <div className="border border-black">Activity</div>
          </div>

          <div className="border border-black">Repo</div>
        </div>
      </div>
      {/* <MailComponent /> */}
      <Footer />
    </div>
  );
};

export default Dashboard;
