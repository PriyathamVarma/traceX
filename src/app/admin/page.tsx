"use client";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";
import { signOut, useSession } from "next-auth/react";
import LoginForm from "../components/organisms/forms/login";
import SignupForm from "../components/organisms/forms/signup";
import AdminValuesForm from "../components/organisms/forms/admin/values";

const Admin = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <h1>ADMIN DASHBOARD</h1>
      <AdminValuesForm />
    </div>
  );
};

export default Admin;
