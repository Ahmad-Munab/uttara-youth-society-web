"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Debate2026Page() {
  const [formData, setFormData] = useState({
    division: "Junior",
    teamName: "",
    institution: "",
    institutionCity: "Uttara, Dhaka",
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    speaker2Name: "",
    speaker3Name: "",
    reserveSpeakerName: "",
    coachName: "",
    coachPhone: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
    id?: string | number;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.teamName.trim()) errs.teamName = "Team name is required.";
    if (!formData.institution.trim()) errs.institution = "Institution name is required.";
    if (!formData.leaderName.trim()) errs.leaderName = "Team leader name is required.";
    if (!formData.leaderPhone.trim()) {
      errs.leaderPhone = "Phone number is required.";
    } else if (formData.leaderPhone.trim().length < 10) {
      errs.leaderPhone = "Please enter a valid phone number (at least 10 digits).";
    }
    if (!formData.leaderEmail.trim()) {
      errs.leaderEmail = "Email address is required.";
    } else if (!formData.leaderEmail.includes("@")) {
      errs.leaderEmail = "Please enter a valid email address with an @.";
    }
    if (!formData.speaker2Name.trim()) errs.speaker2Name = "Speaker 2 name is required.";
    if (!formData.speaker3Name.trim()) errs.speaker3Name = "Speaker 3 name is required.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/register-debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit registration.");
      }

      setStatusMessage({
        type: "success",
        text: "You're registered. We'll contact you on the phone number you gave.",
        id: data.registrationId,
      });

      setFormData((prev) => ({
        ...prev,
        teamName: "",
        institution: "",
        leaderName: "",
        leaderPhone: "",
        leaderEmail: "",
        speaker2Name: "",
        speaker3Name: "",
        reserveSpeakerName: "",
        coachName: "",
        coachPhone: "",
        notes: "",
      }));
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "An unexpected error occurred during submission. Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      {/* 1. POSTER-LIKE TOP SECTION with the Yellow Disc of Light Motif */}
      <section className="relative overflow-hidden bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* The Warm Yellow Light Disc Motif positioned behind the right side of the poster banner */}
            <div
              className="absolute -top-10 -right-8 sm:right-16 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#FFC400] opacity-75 sm:opacity-90 -z-0 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#E8EEF8] border border-[#D6DDEA] text-xs font-semibold text-[#071B3A]">
                <span className="w-2 h-2 rounded-full bg-[#E31C2A]" />
                <span>Inter-School, College &amp; Madrasa Championship</span>
              </div>

              <div className="pt-1">
                <p className="bangla-slogan text-xl sm:text-2xl lg:text-3xl font-bold text-[#E31C2A] mb-1">
                  “যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী”
                </p>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#071B3A] tracking-tight leading-[1.12]">
                  Uttara Debate Championship 2026
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#071B3A]/85 leading-relaxed pt-2">
                A premier competitive parliamentary debate festival organized by Uttara Youth Society for students across Uttara and greater Dhaka. Challenging students to speak with logic, courage, and mutual respect.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-base shadow-sm transition-colors"
                >
                  Register Team Online ↓
                </a>
                <a
                  href="#format"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[8px] border border-[#071B3A] text-[#071B3A] hover:bg-[#E8EEF8] font-semibold text-base transition-colors"
                >
                  Rules &amp; Guidelines
                </a>
              </div>
            </div>
          </div>

          {/* Key Specs Row */}
          <div className="mt-12 pt-8 border-t border-[#D6DDEA] grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="block text-xs uppercase font-semibold text-[#071B3A]/60">Debate Style</span>
              <span className="font-bold text-[#071B3A] text-base">Bengali Asian Parliamentary</span>
            </div>
            <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="block text-xs uppercase font-semibold text-[#071B3A]/60">Team Roster</span>
              <span className="font-bold text-[#071B3A] text-base">3 Debaters + 1 Reserve</span>
            </div>
            <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="block text-xs uppercase font-semibold text-[#071B3A]/60">Divisions</span>
              <span className="font-bold text-[#071B3A] text-base">Junior &amp; Senior</span>
            </div>
            <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="block text-xs uppercase font-semibold text-[#071B3A]/60">Venue</span>
              <span className="font-bold text-[#071B3A] text-base">Uttara, Dhaka</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT TO EXPECT & WHO CAN JOIN */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#D6DDEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-[8px] border border-[#D6DDEA] space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#071B3A]">
                Who Can Participate
              </h2>
              <p className="text-sm text-[#071B3A]/80 leading-relaxed">
                The championship is open to registered student teams representing recognized educational institutions in Bangladesh:
              </p>
              <ul className="space-y-2 text-sm text-[#071B3A]/85 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E31C2A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Junior Division:</strong> Students currently in Class 6 through Class 10, or Madrasa Dakhil equivalent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E31C2A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Senior Division:</strong> Students in Class 11–12 (HSC), Madrasa Alim, or undergraduate college/university debaters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E31C2A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Institutional Teams:</strong> Institutions may field multiple debating teams with an accompanying teacher or moderator.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[8px] border border-[#D6DDEA] space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#071B3A]">
                What to Expect
              </h2>
              <p className="text-sm text-[#071B3A]/80 leading-relaxed">
                A rigorous, transparent, and intellectually stimulating tournament atmosphere:
              </p>
              <ul className="space-y-2 text-sm text-[#071B3A]/85 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#071B3A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Independent Adjudication:</strong> Experienced national adjudicators judging based on Matter (40%), Manner (40%), and Method (20%).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#071B3A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Relevant National Motions:</strong> Topics addressing public policy, technology ethics, education, civic duty, and the environment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#071B3A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Recognition &amp; Awards:</strong> Champion and Runner-up trophies, Best Speaker of the Tournament honors, and official certificates for all debaters.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMAT & RULES */}
      <section id="format" className="py-14 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
              Tournament Format &amp; Debating Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#071B3A]">Asian Parliamentary (3v3)</h3>
              <p className="text-xs text-[#071B3A]/75 leading-relaxed">
                Two sides: Government vs. Opposition. Each team consists of 3 speakers: Prime Minister / Leader of Opposition, Deputy PM / Deputy LO, Government Whip / Opposition Whip, plus a Reply Speech.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#071B3A]">Timings &amp; POIs</h3>
              <p className="text-xs text-[#071B3A]/75 leading-relaxed">
                Constructive speeches are 4 minutes each. Reply speeches are 3 minutes. Points of Information (POIs) are allowed between the 1st and 3rd minute of constructive speeches.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-2">
              <h3 className="font-heading font-bold text-lg text-[#071B3A]">Preparation &amp; Conduct</h3>
              <p className="text-xs text-[#071B3A]/75 leading-relaxed">
                Teams receive 15 minutes preparation time following motion announcement. No electronic or internet aids permitted. Sportsmanlike conduct and respectful engagement are strictly enforced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY DATES & TIMELINE (Real Sequence 1, 2, 3, 4) */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#D6DDEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
              Tournament Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA] relative">
              <div className="w-8 h-8 rounded-full bg-[#E31C2A] text-white font-heading font-bold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">Online Registration</h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Institutions and team leaders submit their rosters through the official portal. Registration is currently open.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA] relative">
              <div className="w-8 h-8 rounded-full bg-[#071B3A] text-white font-heading font-bold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">Roster Confirmation</h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                The secretariat verifies student credentials and confirms institutional slots via phone and email.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA] relative">
              <div className="w-8 h-8 rounded-full bg-[#071B3A] text-white font-heading font-bold text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">Preliminary Rounds</h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Swiss-style or league pool debates ensuring all participating teams debate multiple motions.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA] relative">
              <div className="w-8 h-8 rounded-full bg-[#071B3A] text-white font-heading font-bold text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">Grand Finale &amp; Awards</h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Championship final debate in the main auditorium, followed by the formal trophy ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTICIPANT REGISTRATION FORM */}
      <section id="register" className="py-16 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#071B3A] tracking-tight">
              Team Registration Form
            </h2>
            <p className="text-sm text-[#071B3A]/80 mt-2">
              Fill out this single form for your debating team. Fields marked with an asterisk are required.
            </p>
          </div>

          {/* Feedback & Status Message */}
          {statusMessage && (
            <div
              className={`p-5 rounded-[8px] mb-8 border text-sm ${
                statusMessage.type === "success"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : "bg-red-50 border-red-300 text-red-900"
              }`}
              role="alert"
            >
              <p className="font-bold text-base mb-1">
                {statusMessage.type === "success" ? "Registration Submitted Successfully" : "Submission Failed"}
              </p>
              <p>{statusMessage.text}</p>
              {statusMessage.id && (
                <p className="text-xs font-mono font-bold mt-2 bg-white/80 px-2 py-1 rounded inline-block">
                  Reference ID: #{statusMessage.id}
                </p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Division Selection */}
            <div>
              <label className="block text-sm font-bold text-[#071B3A] mb-2">
                Division *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-[8px] border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                    formData.division === "Junior"
                      ? "border-[#071B3A] bg-[#071B3A] text-white"
                      : "border-[#D6DDEA] bg-white text-[#071B3A] hover:border-[#071B3A]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block">Junior Division</span>
                    <span className="opacity-80">Class 6–10 / Madrasa Dakhil</span>
                  </div>
                  <input
                    type="radio"
                    name="division"
                    value="Junior"
                    checked={formData.division === "Junior"}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="sr-only"
                  />
                </label>

                <label
                  className={`p-4 rounded-[8px] border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                    formData.division === "Senior"
                      ? "border-[#071B3A] bg-[#071B3A] text-white"
                      : "border-[#D6DDEA] bg-white text-[#071B3A] hover:border-[#071B3A]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block">Senior Division</span>
                    <span className="opacity-80">Class 11–Univ / Madrasa Alim</span>
                  </div>
                  <input
                    type="radio"
                    name="division"
                    value="Senior"
                    checked={formData.division === "Senior"}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            {/* Team & Institution Details */}
            <div className="space-y-4 pt-2">
              <div>
                <label htmlFor="teamName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Team Name *
                </label>
                <input
                  id="teamName"
                  type="text"
                  required
                  placeholder="e.g. Milestone Debaters A"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
                {errors.teamName && (
                  <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.teamName}</p>
                )}
              </div>

              <div>
                <label htmlFor="institution" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Institution Name *
                </label>
                <input
                  id="institution"
                  type="text"
                  required
                  placeholder="School, College or Madrasa Name"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
                {errors.institution && (
                  <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.institution}</p>
                )}
              </div>

              <div>
                <label htmlFor="institutionCity" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Institution Area / Location
                </label>
                <input
                  id="institutionCity"
                  type="text"
                  placeholder="e.g. Sector 3, Uttara, Dhaka"
                  value={formData.institutionCity}
                  onChange={(e) => setFormData({ ...formData, institutionCity: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
              </div>
            </div>

            {/* Team Leader (Speaker 1) */}
            <div className="pt-4 border-t border-[#D6DDEA] space-y-4">
              <h3 className="font-heading font-bold text-base text-[#071B3A]">
                Team Leader (Speaker 1)
              </h3>
              <div>
                <label htmlFor="leaderName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Leader Full Name *
                </label>
                <input
                  id="leaderName"
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.leaderName}
                  onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
                {errors.leaderName && (
                  <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.leaderName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leaderPhone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    id="leaderPhone"
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    value={formData.leaderPhone}
                    onChange={(e) => setFormData({ ...formData, leaderPhone: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                  {errors.leaderPhone && (
                    <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.leaderPhone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="leaderEmail" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="leaderEmail"
                    type="email"
                    required
                    placeholder="leader@example.com"
                    value={formData.leaderEmail}
                    onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                  {errors.leaderEmail && (
                    <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.leaderEmail}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Other Speakers */}
            <div className="pt-4 border-t border-[#D6DDEA] space-y-4">
              <h3 className="font-heading font-bold text-base text-[#071B3A]">
                Remaining Team Debaters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="speaker2" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Speaker 2 Full Name *
                  </label>
                  <input
                    id="speaker2"
                    type="text"
                    required
                    placeholder="Speaker 2 name"
                    value={formData.speaker2Name}
                    onChange={(e) => setFormData({ ...formData, speaker2Name: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                  {errors.speaker2Name && (
                    <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.speaker2Name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="speaker3" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Speaker 3 Full Name *
                  </label>
                  <input
                    id="speaker3"
                    type="text"
                    required
                    placeholder="Speaker 3 name"
                    value={formData.speaker3Name}
                    onChange={(e) => setFormData({ ...formData, speaker3Name: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                  {errors.speaker3Name && (
                    <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.speaker3Name}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="reserveSpeaker" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Reserve Speaker (Optional)
                </label>
                <input
                  id="reserveSpeaker"
                  type="text"
                  placeholder="Reserve debater name"
                  value={formData.reserveSpeakerName}
                  onChange={(e) => setFormData({ ...formData, reserveSpeakerName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
              </div>
            </div>

            {/* Teacher / Moderator & Notes */}
            <div className="pt-4 border-t border-[#D6DDEA] space-y-4">
              <h3 className="font-heading font-bold text-base text-[#071B3A]">
                Teacher in Charge / Moderator (Optional)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="coachName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Teacher Name
                  </label>
                  <input
                    id="coachName"
                    type="text"
                    placeholder="Moderator or teacher"
                    value={formData.coachName}
                    onChange={(e) => setFormData({ ...formData, coachName: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                </div>
                <div>
                  <label htmlFor="coachPhone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Teacher Phone
                  </label>
                  <input
                    id="coachPhone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.coachPhone}
                    onChange={(e) => setFormData({ ...formData, coachPhone: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Notes or Inquiries (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Any questions or specific scheduling needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
              </div>
            </div>

            {/* Submit Button with Loading State */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-base shadow-sm transition-colors disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit Team Registration"}
              </button>
              <p className="text-xs text-[#071B3A]/60 text-center mt-3">
                All debaters must be active enrolled students of the stated institution.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 6. PARTICIPANT FAQ */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA]">
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Can an institution register more than one team?
              </h3>
              <p className="text-xs sm:text-sm text-[#071B3A]/75 leading-relaxed">
                Yes. Recognized schools, colleges, and madrasas may register multiple debating teams (e.g., Team A, Team B) across Junior and Senior divisions, subject to total bracket capacity.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA]">
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                What language will be used for debates?
              </h3>
              <p className="text-xs sm:text-sm text-[#071B3A]/75 leading-relaxed">
                All rounds will follow the Bengali Asian Parliamentary debate format (বাংলা এশিয়ান পার্লামেন্টারি ফরম্যাট). High priority is placed on logical analysis, evidence, and clear presentation.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-white border border-[#D6DDEA]">
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Will all debaters receive official certificates?
              </h3>
              <p className="text-xs sm:text-sm text-[#071B3A]/75 leading-relaxed">
                Yes. Every registered participant will receive an official Uttara Youth Society Certificate of Participation. Champion, Runner-up trophies and Best Speaker crests will be presented at the Grand Finale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Registration Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-[#D6DDEA] p-3">
        <a
          href="#register"
          className="block w-full py-3 text-center rounded-[8px] bg-[#E31C2A] text-white font-semibold text-sm shadow-md"
        >
          Register for Debate 2026
        </a>
      </div>

      <Footer />
    </div>
  );
}
