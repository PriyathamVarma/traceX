"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "../../../shared/context/userContext";
import Header from "../components/templates/header";

const ReportPage = () => {
  const { user } = useUser();

  const [providerDataList, setProviderDataList] = useState<any>([]);

  useEffect(() => {
    const getProviderData = async () => {
      try {
        const res = await axios.get(`/api/v1/data?userId=${(user as any)._id}`);

        console.log("Successfully fetched providers data \n", res.data.data);

        if (res.status === 200) {
          setProviderDataList(res.data.data);
        }
      } catch (err) {
        console.log("Error in fetching provider data list \n", err);
      }
    };

    getProviderData();
  }, []);

  return (
    <div className="flex flex-col h-full min-h-screen bg-green-100 relative space-y-2">
      <Header />

      <div className="py-8 px-24 flex flex-col space-y-2">
        <hr />
        <h1 className="font-extrabold text-lg flex justify-center items-center">
          Report Overview
        </h1>
        <hr />
        <div className=" mt-12 flex flex-row px-8 py-4 space-x-2">
          <table className="table-auto w-full border border-white p-4 ">
            <thead className="bg-background1 text-xs">
              <tr className="text-sm">
                <th className="p-2 border border-white">Scope</th>
                <th className="p-2 border border-white">Activity</th>
                <th className="p-2 border border-white">Category</th>
                <th className="p-2 border border-white">Emission Source</th>
                <th className="p-2 border border-white">Kg CO2e</th>
                <th className="p-2 border border-white">Timeframe</th>
                <th className="p-2 border border-white">Verification</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {providerDataList.map((item: any, index: number) => {
                const fromDate = new Date(item.from);
                const toDate = new Date(item.to);
                return (
                  <tr key={index}>
                    <td className="p-2 border border-background1">
                      {item.scope}
                    </td>
                    <td className="p-2 border border-background1">
                      {item.activity}
                    </td>
                    <td className="p-2 border border-background1">
                      {item.category}
                    </td>
                    <td className="p-2 border border-background1">
                      {item.type}
                    </td>
                    <td className="p-2 border border-background1">
                      {item.totalConsumption}
                    </td>
                    <td className="p-2 border border-background1">
                      {fromDate.toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {toDate.toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-2 border border-background1">
                      Self-verification
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
