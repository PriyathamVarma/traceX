"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { BasicLink } from "../atoms/links/basic";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import pfp from "../../../../public/images/main.png";

const Header = () => {
  const { user, error, isLoading } = useUser();
  console.log("user \n", user);
  console.log("Error \n", error);
  console.log("Loading \n", isLoading);

  return (
    <header className="bg-black shadoww-full h-18 flex flex-row py-2">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/" className="text-white">
            Verdascope
          </Link>
        </div>
        <BasicLink title="Home" link="/" />
        <BasicLink title="Dashboard" link="/dashboard" />

        {/* Navigation links */}
        {/*<nav className="hidden lg:flex items-center space-x-8 text-gray-500">
          {user != undefined ? (
            <Link href="/api/auth/logout">Logout {user.name}</Link>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
          </nav>*/}
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
