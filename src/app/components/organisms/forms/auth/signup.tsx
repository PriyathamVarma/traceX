"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "../../../../../../shared/context/userContext";
import logo from "../../../../../../public/images/VERDASCOPE.png";
import Image from "next/image";

const SignupForm = () => {
  const router = useRouter();
  const { login } = useUser();

  // State
  const [error, setError] = useState("");
  const [start, setStart] = useState("Getting started");

  // Methods
  const formDataHandler = async (e: any) => {
    setStart("Creating account");
    e.preventDefault();
    const tar = e.target;

    // Constant values
    const name = tar.name.value;
    const email = tar.email.value;
    const password = tar.password.value;

    console.log(name, email, password);

    try {
      const response = await axios.post("/api/v1/user/", {
        name: name,
        email: email,
        password: password,
      });

      console.log("Succesfully created account", response);

      setStart("Create Account");
      if (response.status === 200) {
        const userData = response.data.data;
        login(userData);
        router.push("/dashboard");
      }
    } catch (err) {
      console.log("Error in getting user details", err);
      alert("Error in creating account.Try again");
      setStart("Create Account");
    }
  };
  return (
    <div className="flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-96 space-y-8">
        <Image src={logo} alt="logo" />
        <div>
          <h2 className="mt-6 text-left text-4xl font-extrabold">Signup</h2>
          <h3 className="mt-6 text-left text-xl font-medium">
            Enter your details.
          </h3>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => formDataHandler(e)}>
          <div className="mb-4 space-y-2">
            <label className="block text-white text-sm mb-1" htmlFor="name">
              Name*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4 space-y-2">
            <label className="block text-white text-sm mb-1" htmlFor="email">
              Email*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4 space-y-2">
            <label className="block text-white text-sm mb-1" htmlFor="password">
              Password*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <p className="text-xs">Must be atleast 8 characters</p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-full text-black bg-indigo-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {start}
            </button>
          </div>

          {/* <div>
            <Link
              href="/api/auth/login"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-full text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up with Google
            </Link>
  </div>*/}
        </form>
        <p>{error}</p>
        <div className="mt-4 text-center">
          <p className="text-sm  text-green-200">
            Already have an acccount?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-green-200 hover:text-indigo-500 underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
