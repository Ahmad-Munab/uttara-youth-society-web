import { neon } from "@neondatabase/serverless";

export interface DebateTeamInput {
  category: "Junior" | "Senior" | string;
  institution: string;
  clubName?: string;
  teamName: string;
  member1Name: string;
  member1Phone: string;
  member2Name: string;
  member2Phone: string;
  member3Name: string;
  member3Phone: string;
  note?: string;
}

export interface DebateTeamRecord extends DebateTeamInput {
  id: number | string;
  createdAt: string;
}

export interface MemberInput {
  fullName: string;
  age: string | number;
  institutionOrOccupation: string;
  residenceArea: string;
  phone: string;
  email: string;
  areasOfInterest?: string[];
  availability?: string;
  previousExperience?: string;
}

export interface MemberRecord extends MemberInput {
  id: number | string;
  createdAt: string;
}

export interface RegistrationResult {
  success: boolean;
  id: string | number;
  message: string;
  storage: "neon";
}

const NEON_CONNECTION_STRING = process.env.DATABASE_URL || ""

function getSql() {
  return neon(NEON_CONNECTION_STRING);
}

let neonInitialized = false;

async function ensureNeonTables(sql: any) {
  if (neonInitialized) return;
  try {
    // Debate Teams Table
    await sql`
      CREATE TABLE IF NOT EXISTS debate_teams (
        id SERIAL PRIMARY KEY,
        category VARCHAR(50) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        club_name VARCHAR(255),
        team_name VARCHAR(255) NOT NULL,
        member1_name VARCHAR(255) NOT NULL,
        member1_phone VARCHAR(50) NOT NULL,
        member2_name VARCHAR(255) NOT NULL,
        member2_phone VARCHAR(50) NOT NULL,
        member3_name VARCHAR(255) NOT NULL,
        member3_phone VARCHAR(50) NOT NULL,
        note TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Member (formerly Volunteer) Registrations Table
    await sql`
      CREATE TABLE IF NOT EXISTS member_registrations (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        age VARCHAR(10) NOT NULL,
        institution_or_occupation VARCHAR(255) NOT NULL,
        residence_area VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        areas_of_interest TEXT,
        availability VARCHAR(100),
        previous_experience TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    neonInitialized = true;
  } catch (err) {
    console.error("Neon DB table initialization error:", err);
    throw err;
  }
}

/* ---------------- Debate Teams (NeonDB Postgres) ---------------- */

export async function saveDebateRegistration(data: DebateTeamInput): Promise<RegistrationResult> {
  const sql = getSql();
  await ensureNeonTables(sql);

  const rows = await sql`
    INSERT INTO debate_teams (
      category,
      institution,
      club_name,
      team_name,
      member1_name,
      member1_phone,
      member2_name,
      member2_phone,
      member3_name,
      member3_phone,
      note
    ) VALUES (
      ${data.category},
      ${data.institution},
      ${data.clubName || null},
      ${data.teamName},
      ${data.member1Name},
      ${data.member1Phone},
      ${data.member2Name},
      ${data.member2Phone},
      ${data.member3Name},
      ${data.member3Phone},
      ${data.note || null}
    )
    RETURNING id;
  `;

  return {
    success: true,
    id: rows[0]?.id,
    message: "Registration successfully recorded in database.",
    storage: "neon",
  };
}

export async function getDebateRegistrations(): Promise<DebateTeamRecord[]> {
  const sql = getSql();
  await ensureNeonTables(sql);

  const rows = await sql`
    SELECT 
      id,
      category,
      institution,
      club_name as "clubName",
      team_name as "teamName",
      member1_name as "member1Name",
      member1_phone as "member1Phone",
      member2_name as "member2Name",
      member2_phone as "member2Phone",
      member3_name as "member3Name",
      member3_phone as "member3Phone",
      note,
      created_at as "createdAt"
    FROM debate_teams
    ORDER BY id DESC;
  `;

  return rows.map((r: any) => ({
    id: r.id,
    category: r.category,
    institution: r.institution,
    clubName: r.clubName || "",
    teamName: r.teamName,
    member1Name: r.member1Name,
    member1Phone: r.member1Phone,
    member2Name: r.member2Name,
    member2Phone: r.member2Phone,
    member3Name: r.member3Name,
    member3Phone: r.member3Phone,
    note: r.note || "",
    createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
  }));
}

/* ---------------- Member Registrations (NeonDB Postgres) ---------------- */

export async function saveMemberRegistration(data: MemberInput): Promise<RegistrationResult> {
  const sql = getSql();
  await ensureNeonTables(sql);

  const rows = await sql`
    INSERT INTO member_registrations (
      full_name,
      age,
      institution_or_occupation,
      residence_area,
      phone,
      email,
      areas_of_interest,
      availability,
      previous_experience
    ) VALUES (
      ${data.fullName},
      ${String(data.age)},
      ${data.institutionOrOccupation},
      ${data.residenceArea},
      ${data.phone},
      ${data.email},
      ${(data.areasOfInterest || []).join(", ")},
      ${data.availability || "Flexible"},
      ${data.previousExperience || null}
    )
    RETURNING id;
  `;

  return {
    success: true,
    id: rows[0]?.id,
    message: "Member application successfully registered in database.",
    storage: "neon",
  };
}

export async function getMemberRegistrations(): Promise<MemberRecord[]> {
  const sql = getSql();
  await ensureNeonTables(sql);

  const rows = await sql`
    SELECT 
      id,
      full_name as "fullName",
      age,
      institution_or_occupation as "institutionOrOccupation",
      residence_area as "residenceArea",
      phone,
      email,
      areas_of_interest as "areasOfInterest",
      availability,
      previous_experience as "previousExperience",
      created_at as "createdAt"
    FROM member_registrations
    ORDER BY id DESC;
  `;

  return rows.map((r: any) => ({
    id: r.id,
    fullName: r.fullName,
    age: r.age,
    institutionOrOccupation: r.institutionOrOccupation,
    residenceArea: r.residenceArea,
    phone: r.phone,
    email: r.email,
    areasOfInterest: r.areasOfInterest ? r.areasOfInterest.split(", ").filter(Boolean) : [],
    availability: r.availability || "",
    previousExperience: r.previousExperience || "",
    createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
  }));
}
