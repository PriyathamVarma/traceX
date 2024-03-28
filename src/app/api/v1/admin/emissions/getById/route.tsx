import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionData from "../../../../../../../shared/interfaces/admin/emissions";
import { CarbonEmissionModel } from "../../../../../../../shared/models/admin/emissions";
import { mongoDB } from "../../../../../../../shared/utilities/database/mongo";

// /api/v1/admin/emissions/getById/

// Response Data
// Response Data
type ResponseData = {
  message: string;
  data?: ICarbonEmissionData;
  error?: {
    message: string;
    status?: number;
  };
};

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  try {
    // Fetch all emission data from MongoDB
    const scope = searchParams.get("scope");
    const category = searchParams.get("category");
    const activity = searchParams.get("activity");
    const type = searchParams.get("type");
    const units = searchParams.get("units");

    const emission = await CarbonEmissionModel.findOne({
      scope: scope,
      category: category,
      activity: activity,
      type: type,
      units: units,
    });

    if (!emission) {
      return NextResponse.json({ message: "No emission data found." });
    }

    return NextResponse.json<ResponseData>({
      message: "Emission data fetched successfully.",
      data: emission,
    });
  } catch (error) {
    console.error("Error fetching emission data:", error);
    return NextResponse.json({
      message: "Error fetching emission data.",
      error: "An unknown error occurred.",
    });
  }
}
