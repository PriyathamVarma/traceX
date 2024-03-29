"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "../../../../../../shared/context/userContext";
import logo from "../../../../../../public/images/VERDASCOPE.png";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const { login } = useUser();

  console.log(login);
  // State
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Login");

  // Methods
  const formDataHandler = async (e: any) => {
    e.preventDefault();
    const tar = e.target;
    setStatus("Logging in");

    // Constant values
    const email = tar.email.value;
    const password = tar.password.value;
    setStatus("Logging in.");
    console.log(email, password);

    try {
      setStatus("Logging in..");

      const response = await axios.post("/api/v1/user/login", {
        email: email,
        password: password,
      });

      console.log("Succesfully logged in \n", response);

      if (response.status === 200) {
        const userData = response.data.data;
        login(userData);
        router.push(`/dashboard?email=${email}`);
      }

      setStatus("Login");
    } catch (err) {
      alert("Error in logging in");
      console.log("Error in logging in \n", err);
      setStatus("Login");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-96 space-y-8">
          <Image src={logo} alt="logo" />
          <div>
            <h2 className="mt-6 text-left text-4xl font-extrabold">Login</h2>
            <h3 className="mt-6 text-left text-xl font-medium">
              Enter your details.
            </h3>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => formDataHandler(e)}>
            <div className="mb-4 space-y-2">
              <label className="block text-white text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 space-y-2">
              <label
                className="block text-white text-sm mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex space-between items-center space-x-4 mb-4">
              <div>
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-500 checked:bg-blue-500 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm font-sm text-white"
                >
                  Remember me for 30 days
                </label>
              </div>
              <a href="#" className="text-sm text-white hover:text-blue-700">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-full text-black bg-indigo-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {status}
              </button>
            </div>
          </form>
          <p>{error}</p>
          <div className="mt-4 text-center">
            <p className="text-sm  text-green-200">
              New user?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-green-200 hover:text-indigo-500 underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
