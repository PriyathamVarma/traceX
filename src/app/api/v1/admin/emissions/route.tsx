import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import ICarbonEmissionData from "../../../../../../shared/interfaces/admin/emissions";
import { CarbonEmissionModel } from "../../../../../../shared/models/admin/emissions";

// /api/v1/admin/emissions/

// Response Data
type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
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
