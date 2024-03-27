"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ActivityForm from "../components/organisms/forms/data/activityForm";
import Header from "../components/templates/header";
import left from "../../../public/images/left.png";
import right from "../../../public/images/right.png";
import Image from "next/image";
import ComingSoon from "../components/atoms/buttons/ComingSoon";

const VerificationPage = () => {
  return (
    <div className="flex flex-col h-screen bg-green-100 relative space-y-2">
      <Header />

      <div className="py-8 px-24 flex flex-col space-y-2">
        <hr />
        <h1 className="font-extrabold text-lg flex justify-center items-center">
          Verification of Emissions Data
        </h1>
        <hr />
        <div className=" mt-12 flex flex-row px-8 py-4 space-x-2">
          <Link
            href="/report"
            className="bg-white h-48 w-1/2 flex flex-col rounded-md"
          >
            <div className="bg-background6 items-center justify-center flex h-2/3 rounded-t-md">
              <Image src={left} height={60} width={60} alt="left image" />
            </div>
            <div className="flex flex-row justify-between px-4 py-4">
              <p>Self-verification</p>
              <p>{">"}</p>
            </div>
          </Link>
          <div className="bg-white h-48 w-1/2 flex flex-col rounded-md">
            <div className="bg-background6 items-center justify-center flex h-2/3 rounded-t-md">
              <Image src={right} height={60} width={60} alt="right image" />
            </div>
            <div className="w-1/3 -mt-4 ml-2">
              <ComingSoon />
            </div>
            <div className="flex flex-row justify-between px-4 py-4">
              <p>Trust Engine</p>
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
