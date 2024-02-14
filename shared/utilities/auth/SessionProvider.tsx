"use client";
import next from "next";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
