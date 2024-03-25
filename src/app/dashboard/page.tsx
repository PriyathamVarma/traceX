"use client";
import Footer from "../components/templates/footer";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
import pfp from "../../../public/images/main.png";
import RequestCard from "../components/organisms/cards/requestCard";
import RequestEmissionsCard from "../components/organisms/cards/requestEmissionsCard";
import EmissionsScopeCard from "../components/organisms/cards/emissionsScopeCard";
import InboxCard from "../components/organisms/cards/inboxCard";
import ActivityCard from "../components/organisms/cards/ActivityCard";
import MessageCard from "../components/organisms/cards/MessageCard";

const Dashboard = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex flex-col h-screen bg-background6  relative">
      <Header />
      <div className="py-8 px-12">
        <h1 className="font-extrabold text-lg text-background1">
          Hello {user?.name}
        </h1>
        <p className="font-medium text-sm text-background1">
          Your daily summary
        </p>
        <div className=" mt-4 flex flex-row space-x-8">
          <div className="space-y-2  w-2/3">
            <RequestCard />
            <RequestEmissionsCard />
            <EmissionsScopeCard />
          </div>

          <div className=" w-1/3  space-y-2 ">
            <InboxCard />
            <ActivityCard />
            <MessageCard />
          </div>
        </div>
      </div>
      {/* <MailComponent /> */}
    </div>
  );
};

export default Dashboard;
