import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { UserProvider } from "@auth0/nextjs-auth0/client";
import { UserProvider, useUser } from "../../shared/context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verdascope",
  description: "Traceing carbon emissions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <div className="bg-gray-100">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
