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
  console.log("Sending Post Request......................");
  //const data = await req.json();
  console.log("..........");
  //console.log(data);

  const data: IUserProfile = {
    name: "varma",
    email: "priyatham002@gmail.com",
    password: "123456",
  };

  try {
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
