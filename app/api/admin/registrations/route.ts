import { NextResponse } from "next/server";
import { getDebateRegistrations, getMemberRegistrations } from "@/lib/db";

// Passcode can be set via ADMIN_PASSCODE in .env, default is "uys2026"
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "uys2026";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const authHeader = request.headers.get("Authorization");
    const passcode = searchParams.get("passcode") || (authHeader ? authHeader.replace("Bearer ", "") : "");

    if (passcode !== ADMIN_PASSCODE) {
      return NextResponse.json(
        { error: "Unauthorized access. Invalid admin passcode." },
        { status: 401 }
      );
    }

    const [debateTeams, members] = await Promise.all([
      getDebateRegistrations(),
      getMemberRegistrations(),
    ]);

    return NextResponse.json({
      success: true,
      debateTeams,
      members,
    });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Admin fetch error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve registrations." },
      { status: 500 }
    );
  }
}
