"use client";

import LoginForm from "./components/organisms/forms/login";
import SignupForm from "./components/organisms/forms/signup";
import Header from "./components/templates/header";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Header />
      <h1>Main Page</h1>
      <div className="flex flex-row space-x-10">
        <LoginForm />
        <SignupForm />
      </div>
    </main>
  );
};

export default Home;
