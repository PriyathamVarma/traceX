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

const Footer = () => {
  const { user, error, isLoading } = useUser();
  console.log("user \n", user);
  console.log("Error \n", error);
  console.log("Loading \n", isLoading);

  return (
    <footer className="bg-black shadow-full h-48 flex flex-col py-2 px-4 space-y-10 fixed bottom-0 left-0 right-0">
      <div className="flex items-left justify-left text-white">
        <h1>Verdascope</h1>
      </div>
      <div className="flex flex-row">
        <div className="container flex items-center justify-center space-x-2">
          {/* Logo and company name */}
          <div className="flex items-center text-white">
            2024. All rights reserved.
          </div>
        </div>
        <div className="container mx-auto flex items-center justify-around"></div>
        <div className="container mx-auto flex items-center justify-around">
          {/* Logo and company name */}
          <div className="flex items-center justify-center space-x-2 text-white">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
