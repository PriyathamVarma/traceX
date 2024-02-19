"use client";
import Header from "../components/templates/header";
import { signOut, useSession } from "next-auth/react";
import AdminValuesForm from "../components/organisms/forms/admin/emissions";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      <Header />
      <h1>ADMIN DASHBOARD</h1>
      <AdminValuesForm />
    </div>
  );
};

export default Admin;
