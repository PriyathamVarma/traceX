import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionDataCategory from "../../../../../../../shared/interfaces/admin/category";
import { CarbonEmissionCategoryModel } from "../../../../../../../shared/models/admin/category";

// /api/v1/admin/emissions/

// Response Data
// Response Data
type ResponseData = {
  message: string;
  data?: ICarbonEmissionDataCategory[];
  error?: {
    message: string;
    status?: number;
  };
};

export async function GET() {
  try {
    // Fetch all emission data from MongoDB
    const allEmissionCategories: ICarbonEmissionDataCategory[] =
      await CarbonEmissionCategoryModel.find({});

    if (!allEmissionCategories || allEmissionCategories.length === 0) {
      return NextResponse.json({ message: "No emission category data found." });
    }

    return NextResponse.json<ResponseData>({
      message: "Emission data fetched successfully.",
      data: allEmissionCategories,
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
    const data: ICarbonEmissionDataCategory = await req.json();

    const newCarbonEmissionCategory =
      new CarbonEmissionCategoryModel<ICarbonEmissionDataCategory>(data);

    await newCarbonEmissionCategory.save();

    return NextResponse.json<ResponseData>({
      message: "Data sent succesfully for Emissions category Data",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at Emissions category Data \n",
    });
  }
}
