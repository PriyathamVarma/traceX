"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../components/templates/header";

const ReportPage = () => {
  return (
    <div className="flex flex-col h-screen bg-green-100 relative space-y-2">
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
                <th className="p-2 border border-white">Emission Source</th>
                <th className="p-2 border border-white">Kg CO2e</th>
                <th className="p-2 border border-white">Timeframe</th>
                <th className="p-2 border border-white">Verification</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-2 border border-background1">Scope 1</td>
                <td className="p-2 border border-background1">Fuels</td>
                <td className="p-2 border border-background1">LNG</td>
                <td className="p-2 border border-background1">2500</td>
                <td className="p-2 border border-background1">
                  01.01.23 - 31.03.23
                </td>
                <td className="p-2 border border-background1">
                  Self-verification
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-background1">Scope 1</td>
                <td className="p-2 border border-background1">Fuels</td>
                <td className="p-2 border border-background1">LNG</td>
                <td className="p-2 border border-background1">2500</td>
                <td className="p-2 border border-background1">
                  01.01.23 - 31.03.23
                </td>
                <td className="p-2 border border-background1">
                  Self-verification
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
