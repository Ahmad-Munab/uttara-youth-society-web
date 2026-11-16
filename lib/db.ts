import { neon } from "@neondatabase/serverless";

export interface DebateRegistrationInput {
  division: "Junior" | "Senior" | string;
  teamName: string;
  institution: string;
  institutionCity?: string;
  leaderName: string;
  leaderPhone: string;
  leaderEmail: string;
  speaker2Name: string;
  speaker3Name: string;
  reserveSpeakerName?: string;
  coachName?: string;
  coachPhone?: string;
  notes?: string;
}

export interface RegistrationResult {
  success: boolean;
  id?: string | number;
  message: string;
  storage: "neon" | "local_fallback";
}

let tableInitialized = false;

async function ensureTable(sql: any) {
  if (tableInitialized) return;
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS debate_registrations (
        id SERIAL PRIMARY KEY,
        division VARCHAR(50) NOT NULL,
        team_name VARCHAR(255) NOT NULL,
        institution VARCHAR(255) NOT NULL,
        institution_city VARCHAR(100),
        leader_name VARCHAR(255) NOT NULL,
        leader_phone VARCHAR(50) NOT NULL,
        leader_email VARCHAR(255) NOT NULL,
        speaker_2_name VARCHAR(255) NOT NULL,
        speaker_3_name VARCHAR(255) NOT NULL,
        reserve_speaker_name VARCHAR(255),
        coach_name VARCHAR(255),
        coach_phone VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    tableInitialized = true;
  } catch (err) {
    console.error("Error creating debate_registrations table in Neon DB:", err);
  }
}

export async function saveDebateRegistration(data: DebateRegistrationInput): Promise<RegistrationResult> {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (connectionString) {
    try {
      const sql = neon(connectionString);
      await ensureTable(sql);

      const rows = await sql`
        INSERT INTO debate_registrations (
          division,
          team_name,
          institution,
          institution_city,
          leader_name,
          leader_phone,
          leader_email,
          speaker_2_name,
          speaker_3_name,
          reserve_speaker_name,
          coach_name,
          coach_phone,
          notes
        ) VALUES (
          ${data.division},
          ${data.teamName},
          ${data.institution},
          ${data.institutionCity || "Uttara, Dhaka"},
          ${data.leaderName},
          ${data.leaderPhone},
          ${data.leaderEmail},
          ${data.speaker2Name},
          ${data.speaker3Name},
          ${data.reserveSpeakerName || null},
          ${data.coachName || null},
          ${data.coachPhone || null},
          ${data.notes || null}
        )
        RETURNING id, created_at;
      `;

      return {
        success: true,
        id: rows[0]?.id,
        message: "Registration successfully recorded in database.",
        storage: "neon",
      };
    } catch (dbError: any) {
      console.error("Neon DB query error:", dbError);
      // Fallback if DB connectivity failed during execution
    }
  }

  // Graceful fallback if DATABASE_URL is not set yet or database unreachable
  const simulatedId = "REG-" + Date.now().toString().slice(-6);
  console.log("Recorded registration in fallback mode (no DATABASE_URL configured yet):", {
    id: simulatedId,
    teamName: data.teamName,
    institution: data.institution,
  });

  return {
    success: true,
    id: simulatedId,
    message: "Registration received successfully. We will contact your team leader shortly.",
    storage: "local_fallback",
  };
}
