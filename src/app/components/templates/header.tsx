"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BasicLink } from "../atoms/links/basic";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import logo from "../../../../public/images/VERDASCOPE.png";
import pfp from "../../../../public/images/Avatar.png";
import { useUser } from "../../../../shared/context/userContext";
import { useRouter } from "next/navigation";

const Header = () => {
  // User Details
  const { user, logout } = useUser();
  const router = useRouter();

  // console.log("logged in user details : \n", user);

  //Methods
  const clickHandler = () => {
    logout();
    router.push("/");
  };

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
          {user !== null ? (
            <button
              onClick={clickHandler}
              className="bg-white p-2 rounded-sm text-xs"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/auth/login"
              className="bg-white p-2 rounded-sm text-xs"
            >
              Login
            </Link>
          )}

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
