import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { CredentialsProvider } from "next-auth/providers/credentials";
import { UserProfileModel } from "../../../../../shared/models/user/user_profile";
import { mongoDB } from "../../../../../shared/utilities/database/mongo";

export const authOptions: any = {
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
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
