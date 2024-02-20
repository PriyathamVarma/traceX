"use client";
import Header from "../components/templates/header";
import { signOut, useSession } from "next-auth/react";
import AdminValuesForm from "../components/organisms/forms/admin/emissions";
import { useState, useEffect } from "react";
import axios from "axios";
import { EmissionsCategoryForm } from "../components/organisms/forms/admin/category";
import { EmissionsActivityForm } from "../components/organisms/forms/admin/activity";
import { EmissionsTypeForm } from "../components/organisms/forms/admin/type";

const Admin = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      <Header />
      <h1>ADMIN DASHBOARD</h1>
      <div className="flex flex-row">
        <div className="flex w-1/2">
          <AdminValuesForm />
        </div>
        <div className="flex flex-col w-1/2">
          <EmissionsCategoryForm />
          <EmissionsActivityForm />
          <EmissionsTypeForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;
