import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionDataType from "../../../../../../../shared/interfaces/admin/type";
import { CarbonEmissionTypeModel } from "../../../../../../../shared/models/admin/type";

// /api/v1/admin/emissions/type

// Response Data
// Response Data
type ResponseData = {
  message: string;
  data?: ICarbonEmissionDataType[];
  error?: {
    message: string;
    status?: number;
  };
};

export async function GET() {
  try {
    // Fetch all emission activity data from MongoDB
    const allEmissionTypes: ICarbonEmissionDataType[] =
      await CarbonEmissionTypeModel.find({});

    if (!allEmissionTypes || allEmissionTypes.length === 0) {
      return NextResponse.json({ message: "No emission type data found." });
    }

    return NextResponse.json<ResponseData>({
      message: "Emission type data fetched successfully.",
      data: allEmissionTypes,
    });
  } catch (error) {
    console.error("Error fetching emission data:", error);
    return NextResponse.json({
      message: "Error fetching emission type data.",
      error: "An unknown error occurred.",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: ICarbonEmissionDataType = await req.json();

    const newCarbonEmissionTypeCategory =
      new CarbonEmissionTypeModel<ICarbonEmissionDataType>(data);

    await newCarbonEmissionTypeCategory.save();

    return NextResponse.json<ResponseData>({
      message: "Data sent succesfully for Emissions type Data",
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error at Emissions type Data \n",
    });
  }
}
