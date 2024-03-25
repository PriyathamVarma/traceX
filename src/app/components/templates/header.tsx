"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { BasicLink } from "../atoms/links/basic";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import logo from "../../../../public/images/VERDASCOPE.png";
import pfp from "../../../../public/images/Avatar.png";

const Header = () => {
  const { user, error, isLoading } = useUser();
  console.log("user \n", user);
  console.log("Error \n", error);
  console.log("Loading \n", isLoading);

  return (
    <header className="bg-background6 shadow-full h-18 flex flex-row py-2 w-full">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/" className="text-white">
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <BasicLink title="Dashboard" link="/dashboard" />
      </div>
      <div className="container mx-auto flex items-center justify-around"></div>
      <div className="container mx-auto flex items-center justify-around">
        {/* Logo and company name */}
        <div className="flex items-center justify-center space-x-1">
          <Link href="/" className="bg-white p-2 rounded-sm">
            <CiSearch />
          </Link>
          <Link href="/" className="bg-white p-2 rounded-sm">
            <CiSettings />
          </Link>
          <Link href="/" className="bg-white p-2 rounded-sm">
            <CiBellOn />
          </Link>
          <Link href="/auth/login" className="bg-white p-2 rounded-sm text-xs">
            Login
          </Link>
          <Image
            src={pfp}
            width={30}
            height={20}
            alt="Pfp"
            className="bg-white rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
