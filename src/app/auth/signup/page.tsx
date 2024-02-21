import React from "react";
import Link from "next/link";

import Image from "next/image";
import imgSrc from "../../../../public/images/main.png";
import SignupForm from "@/app/components/organisms/forms/auth/signup";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border border-black w-full min-h-screen flex items-center justify-center bg-black">
        <SignupForm />
      </div>
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <Image src={imgSrc} objectFit="cover" alt="Picture of the author" />
      </div>
    </div>
  );
};

export default LoginPage;
