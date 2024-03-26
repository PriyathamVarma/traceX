import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import IUserProfile from "../../../../../../shared/interfaces/user/user_profile";
import { UserProfileModel } from "../../../../../../shared/models/user/user_profile";
import bcrypt from "bcrypt";

// /api/v1/user/login

// Response Data
type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse("No good in using this route :)");
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: IUserProfile = await req.json();

    // Ensure both email and password are provided
    if (!data.email || !data.password) {
      return new NextResponse("Email and password are required", {
        status: 400,
      });
    }

    // Find the user by email
    const existingUser = await UserProfileModel.findOne({
      email: data.email,
    });

    // If user with provided email doesn't exist, return error
    if (!existingUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(
      data.password,
      existingUser.password,
    );

    // If passwords don't match, return error
    if (!passwordMatch) {
      return new NextResponse("Invalid password", { status: 401 });
    }

    // Passwords match, user authenticated
    return NextResponse.json<ResponseData>({
      message: "User authenticated",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at logging in \n",
    });
  }
}
