import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { UserProfileModel } from "../../../../../shared/models/user/user_profile";
import { mongoDB } from "../../../../../shared/utilities/database/mongo";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          await mongoDB(); // Establish database connection
          const user = await UserProfileModel.findOne({
            email: credentials.email,
          });
          return user;
        } catch (error) {
          console.error("Authentication error:", error); // Log error for debugging
          throw new Error("Invalid credentials"); // Example user-facing error message
        }
      },
    }),

    GithubProvider({
      clientId: (process.env.GITHUB_ID as string) ?? "",
      clientSecret: (process.env.GITHUB_SECRET as string) ?? "",
    }),
    GoogleProvider({
      clientId: (process.env.GOOGLE_CLIENT_ID as string) ?? "",
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) ?? "",
    }),
    // ...add more providers here
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
