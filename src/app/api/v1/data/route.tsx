import { NextRequest, NextResponse } from "next/server";
import { ProviderDataModel } from "../../../../../shared/models/data/dataByProvider"; // Adjust the import path accordingly
import IDataByProvider from "../../../../../shared/interfaces/data/dataByProvider";

// ->> /api/v1/data

// Response Data
type ResponseData = {
  message: string;
  data: IDataByProvider | null;
};

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const userId = searchParams.get("userId");
    const providerData = await ProviderDataModel.findOne({ userId: userId });
    return NextResponse.json<ResponseData>({
      message: "Successfully fetched provider data",
      data: providerData,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error fetching provider data",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: IDataByProvider = await req.json();

    // Check if the provider data already exists by userId
    const existingProviderData = await ProviderDataModel.findOne({
      userId: data.userId,
      category: data.category,
      scope: data.scope,
      activity: data.activity,
      type: data.type,
      units: data.units,
    });

    if (existingProviderData) {
      return new NextResponse("Provider data already exists", { status: 400 });
    }

    // Create a new provider data entry
    const newProviderData = new ProviderDataModel(data);
    await newProviderData.save();

    return NextResponse.json<ResponseData>({
      message: "Successfully created provider data",
      data: newProviderData,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Error creating provider data",
    });
  }
}
