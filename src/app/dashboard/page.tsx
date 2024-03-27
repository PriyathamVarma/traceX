"use client";
import Footer from "../components/templates/footer";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";
import Link from "next/link";
import Image from "next/image";
import pfp from "../../../public/images/main.png";
import RequestCard from "../components/organisms/cards/requestCard";
import RequestEmissionsCard from "../components/organisms/cards/requestEmissionsCard";
import EmissionsScopeCard from "../components/organisms/cards/emissionsScopeCard";
import InboxCard from "../components/organisms/cards/inboxCard";
import ActivityCard from "../components/organisms/cards/ActivityCard";
import MessageCard from "../components/organisms/cards/MessageCard";
import { useUser } from "../../../shared/context/userContext";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const { user } = useUser();
  const [isProvider, setIsProvider] = useState(false);

  const [providerData, setProviderData] = useState<any>(null);

  // useEffect -> fetching provider details

  useEffect(() => {
    console.log(user);
    const fetchProvider = async () => {
      try {
        const response = await axios.get(
          `/api/v1/user/provider/?email=${user?.email}`,
        );

        console.log(
          "Succesful in getting provider details",
          response.data.data,
        );
        if (response.status === 200) {
          setIsProvider(true);
          setProviderData(response.data.data);
        }
      } catch (err) {
        console.log("Error in  getting provider details");
        setIsProvider(false);
      }
    };

    fetchProvider();
    console.log("Provider data \n", providerData);
  }, [isProvider]);

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
            {providerData !== null ? (
              <>
                <RequestCard data={providerData} />
              </>
            ) : (
              <></>
            )}

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
