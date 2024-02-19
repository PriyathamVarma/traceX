"use client";
import Header from "../components/templates/header";
import MailComponent from "../components/templates/mail";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <h1>Dashboard for trace x</h1>
      <MailComponent />
    </div>
  );
};

export default Dashboard;
