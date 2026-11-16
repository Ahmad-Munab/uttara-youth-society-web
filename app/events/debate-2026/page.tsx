"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Debate2026Page() {
  const [formData, setFormData] = useState({
    category: "Junior",
    institution: "",
    clubName: "",
    teamName: "",
    member1Name: "",
    member1Phone: "",
    member2Name: "",
    member2Phone: "",
    member3Name: "",
    member3Phone: "",
    note: "",
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
    if (!formData.institution.trim()) errs.institution = "Institution name is required.";
    if (!formData.teamName.trim()) errs.teamName = "Team name is required.";
    
    // Member 1
    if (!formData.member1Name.trim()) errs.member1Name = "Member 1 name is required.";
    if (!formData.member1Phone.trim()) {
      errs.member1Phone = "Member 1 number is required.";
    } else if (formData.member1Phone.trim().length < 10) {
      errs.member1Phone = "Enter a valid phone number (at least 10 digits).";
    }

    // Member 2
    if (!formData.member2Name.trim()) errs.member2Name = "Member 2 name is required.";
    if (!formData.member2Phone.trim()) {
      errs.member2Phone = "Member 2 number is required.";
    } else if (formData.member2Phone.trim().length < 10) {
      errs.member2Phone = "Enter a valid phone number (at least 10 digits).";
    }

    // Member 3
    if (!formData.member3Name.trim()) errs.member3Name = "Member 3 name is required.";
    if (!formData.member3Phone.trim()) {
      errs.member3Phone = "Member 3 number is required.";
    } else if (formData.member3Phone.trim().length < 10) {
      errs.member3Phone = "Enter a valid phone number (at least 10 digits).";
    }

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

      setFormData({
        category: "Junior",
        institution: "",
        clubName: "",
        teamName: "",
        member1Name: "",
        member1Phone: "",
        member2Name: "",
        member2Phone: "",
        member3Name: "",
        member3Phone: "",
        note: "",
      });
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
              <span className="font-bold text-[#071B3A] text-base">3 Team Members</span>
            </div>
            <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="block text-xs uppercase font-semibold text-[#071B3A]/60">Categories</span>
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
                  <span><strong className="text-[#071B3A]">Junior Category:</strong> Students currently in Class 6 through Class 10, or Madrasa Dakhil equivalent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E31C2A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Senior Category:</strong> Students in Class 11–12 (HSC), Madrasa Alim, or undergraduate college/university debaters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E31C2A] font-bold">•</span>
                  <span><strong className="text-[#071B3A]">Institutional Teams:</strong> Institutions and student debate clubs may field multiple teams.</span>
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
                  <span><strong className="text-[#071B3A]">Independent Adjudication:</strong> Experienced national circuit adjudicators judging on Matter (40%), Manner (40%), and Method (20%).</span>
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

      {/* 4. KEY DATES & TIMELINE */}
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
                The secretariat verifies student credentials and confirms institutional slots via phone.
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

      {/* 5. PARTICIPANT REGISTRATION FORM (STRICTLY REQUESTED FIELDS ONLY) */}
      <section id="register" className="py-16 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#071B3A] tracking-tight">
              Team Registration Form
            </h2>
            <p className="text-sm text-[#071B3A]/80 mt-2">
              Fill out this form for your debating team. All fields except optional club name and note are required.
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
            {/* 1. Category */}
            <div>
              <label className="block text-sm font-bold text-[#071B3A] mb-2">
                Category *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-[8px] border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                    formData.category === "Junior"
                      ? "border-[#071B3A] bg-[#071B3A] text-white"
                      : "border-[#D6DDEA] bg-white text-[#071B3A] hover:border-[#071B3A]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block">Junior Category</span>
                    <span className="opacity-80">Class 6–10 / Madrasa Dakhil</span>
                  </div>
                  <input
                    type="radio"
                    name="category"
                    value="Junior"
                    checked={formData.category === "Junior"}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="sr-only"
                  />
                </label>

                <label
                  className={`p-4 rounded-[8px] border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                    formData.category === "Senior"
                      ? "border-[#071B3A] bg-[#071B3A] text-white"
                      : "border-[#D6DDEA] bg-white text-[#071B3A] hover:border-[#071B3A]"
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block">Senior Category</span>
                    <span className="opacity-80">Class 11–Univ / Madrasa Alim</span>
                  </div>
                  <input
                    type="radio"
                    name="category"
                    value="Senior"
                    checked={formData.category === "Senior"}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            {/* 2. Institution, Club Name, Team Name */}
            <div className="space-y-4 pt-2">
              <div>
                <label htmlFor="institution" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Institution *
                </label>
                <input
                  id="institution"
                  type="text"
                  required
                  placeholder="School, College, Madrasa or University Name"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
                {errors.institution && (
                  <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.institution}</p>
                )}
              </div>

              <div>
                <label htmlFor="clubName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Club Name (Optional)
                </label>
                <input
                  id="clubName"
                  type="text"
                  placeholder="e.g. Milestone Debate Club"
                  value={formData.clubName}
                  onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
              </div>

              <div>
                <label htmlFor="teamName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Team Name *
                </label>
                <input
                  id="teamName"
                  type="text"
                  required
                  placeholder="e.g. Uttara High Team Alpha"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
                {errors.teamName && (
                  <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.teamName}</p>
                )}
              </div>
            </div>

            {/* 3. Team Members Names & Numbers (1, 2, 3) */}
            <div className="pt-4 border-t border-[#D6DDEA] space-y-5">
              <h3 className="font-heading font-bold text-base text-[#071B3A]">
                Team Members (Names &amp; Phone Numbers)
              </h3>

              {/* Member 1 */}
              <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-3">
                <span className="text-xs font-bold text-[#E31C2A] uppercase tracking-wider block">
                  Member 1 (Team Leader)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="member1Name" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="member1Name"
                      type="text"
                      required
                      placeholder="Member 1 name"
                      value={formData.member1Name}
                      onChange={(e) => setFormData({ ...formData, member1Name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member1Name && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member1Name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="member1Phone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="member1Phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      value={formData.member1Phone}
                      onChange={(e) => setFormData({ ...formData, member1Phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member1Phone && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member1Phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Member 2 */}
              <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-3">
                <span className="text-xs font-bold text-[#071B3A] uppercase tracking-wider block">
                  Member 2
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="member2Name" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="member2Name"
                      type="text"
                      required
                      placeholder="Member 2 name"
                      value={formData.member2Name}
                      onChange={(e) => setFormData({ ...formData, member2Name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member2Name && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member2Name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="member2Phone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="member2Phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      value={formData.member2Phone}
                      onChange={(e) => setFormData({ ...formData, member2Phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member2Phone && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member2Phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Member 3 */}
              <div className="p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-3">
                <span className="text-xs font-bold text-[#071B3A] uppercase tracking-wider block">
                  Member 3
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="member3Name" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="member3Name"
                      type="text"
                      required
                      placeholder="Member 3 name"
                      value={formData.member3Name}
                      onChange={(e) => setFormData({ ...formData, member3Name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member3Name && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member3Name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="member3Phone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="member3Phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      value={formData.member3Phone}
                      onChange={(e) => setFormData({ ...formData, member3Phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                    {errors.member3Phone && (
                      <p className="text-xs text-[#E31C2A] mt-1 font-medium">{errors.member3Phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Note (Questions if they have any, Optional) */}
            <div className="pt-2">
              <label htmlFor="note" className="block text-xs font-semibold text-[#071B3A] mb-1">
                Note / Questions (Optional)
              </label>
              <textarea
                id="note"
                rows={3}
                placeholder="Write any questions or scheduling notes here..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-base shadow-sm transition-colors disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit Team Registration"}
              </button>
              <p className="text-xs text-[#071B3A]/60 text-center mt-3">
                All 3 team members must be enrolled students of the stated institution.
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
                Yes. Recognized schools, colleges, and madrasas may register multiple debating teams (e.g., Team Alpha, Team Beta) across Junior and Senior categories.
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
