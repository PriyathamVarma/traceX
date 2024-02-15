"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session }: any = useSession();
  return (
    <header className="bg-white shadow py-2 w-full h-26">
      <div className="container mx-auto flex items-center justify-around">
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/">Trace X</Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center space-x-8 text-gray-500">
          {!session ? (
            <>
              <p>Logged out</p>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  signOut();
                }}
                className="bg-blue-50 p-2 hover:bg-black border hover:text-white border-black rounded-md"
              >
                Logout {session.user?.email}
              </button>
            </>
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
