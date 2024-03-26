import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import IUserProfile from "../../../../../shared/interfaces/user/user_profile";
import { UserProfileModel } from "../../../../../shared/models/user/user_profile";
import bcrypt from "bcrypt";
// /api/v1/user/

// Response Data
type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ message: "Hello from Verdsacope" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("1");
    const data: IUserProfile = await req.json();
    console.log("2", data);

    // Ensure password is provided
    if (!data.password) {
      return new NextResponse("Password is required", { status: 400 });
    }
    console.log("3");
    // Hash the password
    const hashedPassword = await bcrypt.hash(data?.password, 10);
    console.log("4", hashedPassword);

    const existingUser = await UserProfileModel.findOne({ email: data.email });

    if (existingUser) {
      console.log("Error in sending");
      return new NextResponse("User already exists", { status: 400 });
    }

    const newDeveloperProfileService = new UserProfileModel<IUserProfile>({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    await newDeveloperProfileService.save();

    return NextResponse.json<ResponseData>({
      message: "Succesfully created User Profile",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at creating User Profile \n",
    });
  }
}
