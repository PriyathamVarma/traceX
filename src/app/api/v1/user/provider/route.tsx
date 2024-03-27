import { NextRequest, NextResponse } from "next/server";
import { ProviderProfileModel } from "../../../../../../shared/models/user/provider"; // Adjust the import path accordingly
import { NextApiRequest, NextApiResponse } from "next";
import IProvider from "../../../../../../shared/interfaces/user/provider";

// /api/v1/user/provider/

// Response Data
type ResponseData = {
  message: string;
  data: string | IProvider[];
};

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { email } = await req.json();
    const providers = await ProviderProfileModel.find({ email: email });
    return NextResponse.json<ResponseData>({
      message: "Successfully fetched providers",
      data: providers,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error fetching providers",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: IProvider = await req.json();

    // Check if the provider already exists by email and userId
    const existingProviderByEmail = await ProviderProfileModel.findOne({
      email: data.email,
      userId: data.userId,
    });

    if (existingProviderByEmail) {
      return new NextResponse("Provider already exists", { status: 400 });
    }

    // Create a new provider profile
    const newProviderProfile = new ProviderProfileModel(data);
    await newProviderProfile.save();

    return NextResponse.json<ResponseData>({
      message: "Successfully created Provider Profile",
      data: newProviderProfile,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error creating Provider Profile",
    });
  }
}
