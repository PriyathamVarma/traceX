import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import IUserProfile from "../../../../../shared/interfaces/user/user_profile";
import { UserProfileModel } from "../../../../../shared/models/user/user_profile";

// /api/v1/user/

// Response Data
type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: IUserProfile = await req.json();

    const existingUser = await UserProfileModel.findOne({ email: data.email });

    if (existingUser) {
      console.log("Error in sending");
      return new NextResponse("User already exists", { status: 400 });
    }

    const newDeveloperProfileService = new UserProfileModel<IUserProfile>(data);

    await newDeveloperProfileService.save();

    return NextResponse.json<ResponseData>({
      message: "Data sent succesfully for User Profile",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at User Profile \n",
    });
  }
}
