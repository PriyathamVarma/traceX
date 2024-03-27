"use client";
import Footer from "../components/templates/footer";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";

import Link from "next/link";
import Image from "next/image";
import pfp from "../../../public/images/main.png";
import { useUser } from "../../../shared/context/userContext";

const Category = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col h-screen bg-green-100 relative">
      <Header />
      <div className="py-8 px-24">
        <h1 className="font-extrabold text-lg">Hello {user?.name}</h1>
        <p className="font-medium text-sm">Your daily summary</p>
        <div className=" mt-4 flex flex-row space-x-8">
          <div className="space-y-2">
            <div className=" bg-white rounded-md h-48 min-w-96 p-2 w-auto px-8">
              Report graph
            </div>
            <div className="bg-white flex flex-col overflow-x-auto rounded-md h-48 p-2 px-8 space-y-1">
              <h1 className="font-bold">Campaigns</h1>
              <div className="flex flex-row space-x-2">
                <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
                  Card 1
                </div>
                <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
                  Card 2
                </div>
                <div className="bg-blue-50 w-48 h-24 rounded-md flex items-center justify-center">
                  Card 3
                </div>
              </div>
              <hr />
              <button className="border border-gray-100 rounded-lg float-right text-xs w-1/3 p-2 -px-4 hover:bg-gray-50">
                Manage Account
              </button>
            </div>
          </div>

          <div className="border bg-white p-2 w-auto min-w-96 px-8 space-y-2 rounded-md">
            <h1 className="font-bold">Activity</h1>

            <div className="flex flex-row hover:bg-gray-50 space-x-2">
              <Image
                src={pfp}
                height={20}
                width={20}
                alt="list 1"
                className="rounded-full"
              />
              <div className="text-xs">
                <p>Name</p>
                <p>
                  Invited to{" "}
                  <span className="text-indigo-300 hover:underline">
                    Report #123
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MailComponent /> */}
      <Footer />
    </div>
  );
};

export default Category;
