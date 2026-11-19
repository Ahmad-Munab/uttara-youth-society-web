import { NextResponse } from "next/server";
import { saveMemberRegistration, MemberInput } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      age,
      institutionOrOccupation,
      residenceArea,
      phone,
      email,
      areasOfInterest,
      availability,
      previousExperience,
    } = body;

    if (!fullName || !age || !institutionOrOccupation || !residenceArea || !phone) {
      return NextResponse.json(
        { error: "Please fill out all required fields: Name, Age, Institution/Occupation, Residence Area, and Phone." },
        { status: 400 }
      );
    }

    const memberData: MemberInput = {
      fullName: String(fullName).trim(),
      age: String(age).trim(),
      institutionOrOccupation: String(institutionOrOccupation).trim(),
      residenceArea: String(residenceArea).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : "",
      areasOfInterest: Array.isArray(areasOfInterest) ? areasOfInterest : [],
      availability: availability ? String(availability).trim() : "Flexible",
      previousExperience: previousExperience ? String(previousExperience).trim() : undefined,
    };

    const result = await saveMemberRegistration(memberData);

    return NextResponse.json(
      {
        success: true,
        message: "Your membership application has been received!",
        memberId: result.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error in /api/register-member:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your application. Please try again." },
      { status: 500 }
    );
  }
}
