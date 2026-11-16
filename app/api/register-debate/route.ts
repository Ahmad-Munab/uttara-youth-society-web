import { NextResponse } from "next/server";
import { saveDebateRegistration, DebateRegistrationInput } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      division,
      teamName,
      institution,
      institutionCity,
      leaderName,
      leaderPhone,
      leaderEmail,
      speaker2Name,
      speaker3Name,
      reserveSpeakerName,
      coachName,
      coachPhone,
      notes,
    } = body;

    // Validate essential fields
    if (!division || !teamName || !institution || !leaderName || !leaderPhone || !speaker2Name || !speaker3Name) {
      return NextResponse.json(
        { error: "Please provide all required fields: Division, Team Name, Institution, Leader and Speaker details." },
        { status: 400 }
      );
    }

    const registrationData: DebateRegistrationInput = {
      division,
      teamName: String(teamName).trim(),
      institution: String(institution).trim(),
      institutionCity: institutionCity ? String(institutionCity).trim() : "Uttara, Dhaka",
      leaderName: String(leaderName).trim(),
      leaderPhone: String(leaderPhone).trim(),
      leaderEmail: String(leaderEmail || "").trim(),
      speaker2Name: String(speaker2Name).trim(),
      speaker3Name: String(speaker3Name).trim(),
      reserveSpeakerName: reserveSpeakerName ? String(reserveSpeakerName).trim() : undefined,
      coachName: coachName ? String(coachName).trim() : undefined,
      coachPhone: coachPhone ? String(coachPhone).trim() : undefined,
      notes: notes ? String(notes).trim() : undefined,
    };

    const result = await saveDebateRegistration(registrationData);

    return NextResponse.json(
      {
        success: true,
        message: "Your team registration for Uttara Debate Championship 2026 has been submitted!",
        registrationId: result.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error in /api/register-debate:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your registration. Please try again." },
      { status: 500 }
    );
  }
}
