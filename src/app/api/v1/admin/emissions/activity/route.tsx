import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionDataActivity from "../../../../../../../shared/interfaces/admin/activity";
import { CarbonEmissionActivityModel } from "../../../../../../../shared/models/admin/activity";

// /api/v1/admin/emissions/activity

// Response Data
// Response Data
type ResponseData = {
  message: string;
  data?: ICarbonEmissionDataActivity[];
  error?: {
    message: string;
    status?: number;
  };
};

export async function GET() {
  try {
    // Fetch all emission activity data from MongoDB
    const allEmissionActivities: ICarbonEmissionDataActivity[] =
      await CarbonEmissionActivityModel.find({});

    if (!allEmissionActivities || allEmissionActivities.length === 0) {
      return NextResponse.json({ message: "No emission activity data found." });
    }

    return NextResponse.json<ResponseData>({
      message: "Emission data fetched successfully.",
      data: allEmissionActivities,
    });
  } catch (error) {
    console.error("Error fetching emission data:", error);
    return NextResponse.json({
      message: "Error fetching emission data.",
      error: "An unknown error occurred.",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: ICarbonEmissionDataActivity = await req.json();

    const newCarbonEmissionCategory =
      new CarbonEmissionActivityModel<ICarbonEmissionDataActivity>(data);

    await newCarbonEmissionCategory.save();

    return NextResponse.json<ResponseData>({
      message: "Data sent succesfully for Emissions activity Data",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at Emissions activity Data \n",
    });
  }
}
