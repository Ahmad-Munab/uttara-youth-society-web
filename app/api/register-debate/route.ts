import { NextResponse } from "next/server";
import { saveDebateRegistration, DebateTeamInput } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      category,
      division, // support alias if sent
      institution,
      clubName,
      teamName,
      member1Name,
      member1Phone,
      member2Name,
      member2Phone,
      member3Name,
      member3Phone,
      // also alias support if someone sends leaderName/leaderPhone
      leaderName,
      leaderPhone,
      speaker2Name,
      speaker3Name,
      note,
      notes,
    } = body;

    const finalCategory = category || division;
    const finalMember1Name = member1Name || leaderName;
    const finalMember1Phone = member1Phone || leaderPhone;
    const finalMember2Name = member2Name || speaker2Name;
    const finalMember3Name = member3Name || speaker3Name;
    const finalMember2Phone = member2Phone || "";
    const finalMember3Phone = member3Phone || "";
    const finalNote = note || notes || "";

    // Validate strictly required fields
    if (
      !finalCategory ||
      !institution ||
      !teamName ||
      !finalMember1Name ||
      !finalMember1Phone ||
      !finalMember2Name ||
      !finalMember2Phone ||
      !finalMember3Name ||
      !finalMember3Phone
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide all required fields: Category, Institution, Team Name, and all 3 Team Members' Names and Phone Numbers.",
        },
        { status: 400 }
      );
    }

    const teamData: DebateTeamInput = {
      category: String(finalCategory).trim(),
      institution: String(institution).trim(),
      clubName: clubName ? String(clubName).trim() : undefined,
      teamName: String(teamName).trim(),
      member1Name: String(finalMember1Name).trim(),
      member1Phone: String(finalMember1Phone).trim(),
      member2Name: String(finalMember2Name).trim(),
      member2Phone: String(finalMember2Phone).trim(),
      member3Name: String(finalMember3Name).trim(),
      member3Phone: String(finalMember3Phone).trim(),
      note: finalNote ? String(finalNote).trim() : undefined,
    };

    const result = await saveDebateRegistration(teamData);

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
