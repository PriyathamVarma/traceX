"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user, error, isLoading } = useUser();
  console.log("user \n", user);
  console.log("Error \n", error);
  console.log("Loading \n", isLoading);

  return (
    <header className="bg-white shadow py-2 w-full h-26">
      <div className="container mx-auto flex items-center justify-around">
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/">Verdascope</Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center space-x-8 text-gray-500">
          {user != undefined ? (
            <Link href="/api/auth/logout">Logout {user.name}</Link>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
