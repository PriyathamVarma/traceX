import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionData from "../../../../../../shared/interfaces/admin/emissions";
import { CarbonEmissionModel } from "../../../../../../shared/models/admin/emissions";
import { mongoDB } from "../../../../../../shared/utilities/database/mongo";

// /api/v1/admin/emissions/

// Response Data
// Response Data
type ResponseData = {
  message: string;
  data?: ICarbonEmissionData[];
  error?: {
    message: string;
    status?: number;
  };
};

export async function GET() {
  try {
    // Fetch all emission data from MongoDB
    const allEmissions: ICarbonEmissionData[] = await CarbonEmissionModel.find(
      {},
    );

    if (!allEmissions || allEmissions.length === 0) {
      return NextResponse.json({ message: "No emission data found." });
    }

    return NextResponse.json<ResponseData>({
      message: "Emission data fetched successfully.",
      data: allEmissions,
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
    const data: ICarbonEmissionData = await req.json();

    const newCarbonEmissionService =
      new CarbonEmissionModel<ICarbonEmissionData>(data);

    await newCarbonEmissionService.save();

    return NextResponse.json<ResponseData>({
      message: "Data sent succesfully for Emissions Data",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at Emissions Data \n",
    });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log("ID:", id);
    await CarbonEmissionModel.findByIdAndDelete(id);

    return NextResponse.json<ResponseData>({
      message: "Succesfully deleted Emissions Data",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error at deleting Emissions Data \n",
      error,
    });
  }
}
