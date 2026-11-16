"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { DebateTeamRecord, MemberRecord } from "@/lib/db";

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<"debate" | "members">("debate");
  const [debateTeams, setDebateTeams] = useState<DebateTeamRecord[]>([]);
  const [members, setMembers] = useState<MemberRecord[]>([]);

  // Search and filter states
  const [debateSearch, setDebateSearch] = useState("");
  const [debateCategoryFilter, setDebateCategoryFilter] = useState("All");
  const [memberSearch, setMemberSearch] = useState("");

  // Modals for inspecting single record
  const [selectedTeam, setSelectedTeam] = useState<DebateTeamRecord | null>(null);
  const [selectedMember, setSelectedMember] = useState<MemberRecord | null>(null);

  // Check saved session on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("uys_admin_passcode");
    if (saved) {
      setPasscode(saved);
      fetchData(saved);
    }
  }, []);

  const fetchData = async (code: string) => {
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch(`/api/admin/registrations?passcode=${encodeURIComponent(code)}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to authenticate.");
      }
      setIsAuthenticated(true);
      sessionStorage.setItem("uys_admin_passcode", code);
      setDebateTeams(data.debateTeams || []);
      setMembers(data.members || []);
    } catch (err: any) {
      setAuthError(err.message || "Invalid admin passcode.");
      setIsAuthenticated(false);
      sessionStorage.removeItem("uys_admin_passcode");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setAuthError("Please enter the admin passcode.");
      return;
    }
    fetchData(passcode.trim());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode("");
    sessionStorage.removeItem("uys_admin_passcode");
  };

  // Filtered Debate Teams
  const filteredDebateTeams = useMemo(() => {
    return debateTeams.filter((team) => {
      const matchesCategory =
        debateCategoryFilter === "All" || team.category.toLowerCase() === debateCategoryFilter.toLowerCase();
      const q = debateSearch.toLowerCase();
      const matchesSearch =
        !q ||
        team.teamName.toLowerCase().includes(q) ||
        team.institution.toLowerCase().includes(q) ||
        (team.clubName && team.clubName.toLowerCase().includes(q)) ||
        team.member1Name.toLowerCase().includes(q) ||
        team.member1Phone.includes(q) ||
        team.member2Name.toLowerCase().includes(q) ||
        team.member2Phone.includes(q) ||
        team.member3Name.toLowerCase().includes(q) ||
        team.member3Phone.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [debateTeams, debateSearch, debateCategoryFilter]);

  // Filtered Members
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const q = memberSearch.toLowerCase();
      return (
        !q ||
        m.fullName.toLowerCase().includes(q) ||
        m.phone.includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.institutionOrOccupation.toLowerCase().includes(q) ||
        m.residenceArea.toLowerCase().includes(q)
      );
    });
  }, [members, memberSearch]);

  // Export functions
  const exportDebateCSV = () => {
    const headers = [
      "ID",
      "Category",
      "Institution",
      "Club Name",
      "Team Name",
      "Member 1 Name",
      "Member 1 Phone",
      "Member 2 Name",
      "Member 2 Phone",
      "Member 3 Name",
      "Member 3 Phone",
      "Note",
      "Submitted At",
    ];
    const rows = filteredDebateTeams.map((t) => [
      t.id,
      `"${t.category}"`,
      `"${t.institution.replace(/"/g, '""')}"`,
      `"${(t.clubName || "").replace(/"/g, '""')}"`,
      `"${t.teamName.replace(/"/g, '""')}"`,
      `"${t.member1Name.replace(/"/g, '""')}"`,
      `"${t.member1Phone}"`,
      `"${t.member2Name.replace(/"/g, '""')}"`,
      `"${t.member2Phone}"`,
      `"${t.member3Name.replace(/"/g, '""')}"`,
      `"${t.member3Phone}"`,
      `"${(t.note || "").replace(/"/g, '""')}"`,
      `"${t.createdAt}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `UYS_Debate_Teams_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportMembersCSV = () => {
    const headers = [
      "ID",
      "Full Name",
      "Age",
      "Institution / Occupation",
      "Residence Area",
      "Phone",
      "Email",
      "Areas of Interest",
      "Availability",
      "Experience",
      "Submitted At",
    ];
    const rows = filteredMembers.map((m) => [
      m.id,
      `"${m.fullName.replace(/"/g, '""')}"`,
      m.age,
      `"${m.institutionOrOccupation.replace(/"/g, '""')}"`,
      `"${m.residenceArea.replace(/"/g, '""')}"`,
      `"${m.phone}"`,
      `"${m.email}"`,
      `"${(m.areasOfInterest || []).join("; ").replace(/"/g, '""')}"`,
      `"${(m.availability || "").replace(/"/g, '""')}"`,
      `"${(m.previousExperience || "").replace(/"/g, '""')}"`,
      `"${m.createdAt}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `UYS_Members_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ---------------- Unauthenticated Login Screen ---------------- */
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8FAFD] px-4 py-12 text-[#071B3A]">
        <div className="w-full max-w-md bg-white rounded-[16px] border border-[#D6DDEA] p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-[8px] bg-[#E8EEF8] border border-[#D6DDEA] p-2 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Uttara Youth Society"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h1 className="font-heading font-extrabold text-2xl text-[#071B3A]">
              Secretariat Admin Access
            </h1>
            <p className="text-xs text-[#071B3A]/70">
              Uttara Youth Society · Registrations Management
            </p>
          </div>

          {authError && (
            <div className="p-3.5 rounded-[8px] bg-red-50 border border-red-300 text-red-900 text-xs font-semibold">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="block text-xs font-semibold text-[#071B3A] mb-1">
                Admin Passcode
              </label>
              <input
                id="passcode"
                type="password"
                required
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white font-semibold text-sm transition-colors cursor-pointer disabled:opacity-60"
            >
              {loading ? "Authenticating..." : "Access Admin Panel"}
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link href="/" className="text-xs font-semibold text-[#E31C2A] hover:underline">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Authenticated Admin Dashboard ---------------- */
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] border border-[#D6DDEA] bg-[#E8EEF8] p-1 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Uttara Youth Society"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg sm:text-xl text-[#071B3A] tracking-tight block">
                  UYS Secretariat Admin
                </span>
                <span className="text-xs text-[#071B3A]/60 font-medium block">
                  Registration Desk &amp; Member Applications
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => fetchData(passcode)}
                disabled={loading}
                className="px-3.5 py-2 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] text-xs font-semibold transition-colors flex items-center gap-1.5"
                title="Refresh Data"
              >
                <span>🔄</span>
                <span className="hidden sm:inline">{loading ? "Refreshing..." : "Refresh"}</span>
              </button>

              <Link
                href="/"
                target="_blank"
                className="px-3.5 py-2 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] text-xs font-semibold transition-colors hidden md:inline-block"
              >
                View Website ↗
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-[8px] bg-red-50 hover:bg-red-100 text-[#E31C2A] text-xs font-semibold transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-6 rounded-[12px] bg-white border border-[#D6DDEA] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60 block mb-1">
              Debate Championship 2026
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-heading font-bold text-[#071B3A]">
                {debateTeams.length}
              </span>
              <span className="text-xs text-[#071B3A]/60">Teams Registered</span>
            </div>
            <div className="mt-3 pt-3 border-t border-[#D6DDEA] flex gap-4 text-xs font-medium text-[#071B3A]/75">
              <span>Junior: {debateTeams.filter((t) => t.category === "Junior").length}</span>
              <span>Senior: {debateTeams.filter((t) => t.category === "Senior").length}</span>
            </div>
          </div>

          <div className="p-6 rounded-[12px] bg-white border border-[#D6DDEA] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60 block mb-1">
              Community Members
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-heading font-bold text-[#071B3A]">
                {members.length}
              </span>
              <span className="text-xs text-[#071B3A]/60">Applications</span>
            </div>
            <div className="mt-3 pt-3 border-t border-[#D6DDEA] text-xs text-[#071B3A]/75">
              Formerly Volunteer Registrations
            </div>
          </div>

          <div className="p-6 rounded-[12px] bg-white border border-[#D6DDEA] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60 block mb-1">
                Database Connectivity
              </span>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Active Database Connection
              </span>
            </div>
            <p className="text-xs text-[#071B3A]/60 mt-2">
              Powered by NeonDB Postgres serverless with local persistence.
            </p>
          </div>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="border-b border-[#D6DDEA] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("debate")}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === "debate"
                  ? "border-[#E31C2A] text-[#E31C2A]"
                  : "border-transparent text-[#071B3A]/70 hover:text-[#071B3A]"
              }`}
            >
              Debate Team Registrations ({debateTeams.length})
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === "members"
                  ? "border-[#E31C2A] text-[#E31C2A]"
                  : "border-transparent text-[#071B3A]/70 hover:text-[#071B3A]"
              }`}
            >
              Member Registrations ({members.length})
            </button>
          </div>
        </div>

        {/* ================= TAB 1: DEBATE TEAMS ================= */}
        {activeTab === "debate" && (
          <div className="space-y-4">
            {/* Action & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-1 items-center gap-3">
                <input
                  type="text"
                  placeholder="Search team, institution, member or phone..."
                  value={debateSearch}
                  onChange={(e) => setDebateSearch(e.target.value)}
                  className="w-full max-w-md px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-xs sm:text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />

                <select
                  value={debateCategoryFilter}
                  onChange={(e) => setDebateCategoryFilter(e.target.value)}
                  className="px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-xs sm:text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                >
                  <option value="All">All Categories</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={exportDebateCSV}
                  disabled={filteredDebateTeams.length === 0}
                  className="px-4 py-2.5 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white text-xs font-semibold transition-colors disabled:opacity-40"
                >
                  Export CSV ({filteredDebateTeams.length})
                </button>
              </div>
            </div>

            {/* Table of Debate Teams */}
            {filteredDebateTeams.length === 0 ? (
              <div className="p-12 text-center rounded-[12px] bg-white border border-[#D6DDEA] text-[#071B3A]/60 text-sm">
                No debate team registrations found matching your query.
              </div>
            ) : (
              <div className="bg-white rounded-[12px] border border-[#D6DDEA] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#E8EEF8] border-b border-[#D6DDEA] text-[#071B3A] font-bold">
                      <tr>
                        <th className="px-4 py-3.5">ID</th>
                        <th className="px-4 py-3.5">Category</th>
                        <th className="px-4 py-3.5">Team Name</th>
                        <th className="px-4 py-3.5">Institution &amp; Club</th>
                        <th className="px-4 py-3.5">Member 1</th>
                        <th className="px-4 py-3.5">Member 2</th>
                        <th className="px-4 py-3.5">Member 3</th>
                        <th className="px-4 py-3.5">Note</th>
                        <th className="px-4 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D6DDEA]">
                      {filteredDebateTeams.map((team) => (
                        <tr key={team.id} className="hover:bg-[#F8FAFD] transition-colors">
                          <td className="px-4 py-3.5 font-mono font-bold text-xs text-[#071B3A]/70">
                            #{team.id}
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`px-2.5 py-1 rounded-[6px] text-xs font-bold ${
                                team.category === "Junior"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-blue-100 text-blue-900"
                              }`}
                            >
                              {team.category}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 font-bold text-[#071B3A]">
                            {team.teamName}
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/85">
                            <span className="font-semibold block">{team.institution}</span>
                            {team.clubName && (
                              <span className="text-[#071B3A]/60 text-[11px] block">
                                Club: {team.clubName}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-xs">
                            <span className="font-medium text-[#071B3A] block">{team.member1Name}</span>
                            <a
                              href={`tel:${team.member1Phone}`}
                              className="text-xs text-[#E31C2A] hover:underline font-mono"
                            >
                              {team.member1Phone}
                            </a>
                          </td>
                          <td className="px-4 py-3.5 text-xs">
                            <span className="font-medium text-[#071B3A] block">{team.member2Name}</span>
                            <a
                              href={`tel:${team.member2Phone}`}
                              className="text-xs text-[#071B3A]/70 hover:underline font-mono"
                            >
                              {team.member2Phone}
                            </a>
                          </td>
                          <td className="px-4 py-3.5 text-xs">
                            <span className="font-medium text-[#071B3A] block">{team.member3Name}</span>
                            <a
                              href={`tel:${team.member3Phone}`}
                              className="text-xs text-[#071B3A]/70 hover:underline font-mono"
                            >
                              {team.member3Phone}
                            </a>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/75 max-w-xs truncate">
                            {team.note ? team.note : <span className="text-[#071B3A]/40">—</span>}
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <button
                              onClick={() => setSelectedTeam(team)}
                              className="px-3 py-1.5 rounded-[6px] border border-[#D6DDEA] hover:bg-[#E8EEF8] text-xs font-semibold text-[#071B3A] transition-colors"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: MEMBERS (FORMERLY VOLUNTEERS) ================= */}
        {activeTab === "members" && (
          <div className="space-y-4">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Search member by name, phone, email, institution, or area..."
                value={memberSearch}
                onChange={(e) => setMemberSearch(e.target.value)}
                className="w-full max-w-md px-3.5 py-2.5 rounded-[8px] border border-[#D6DDEA] bg-white text-xs sm:text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
              />

              <button
                onClick={exportMembersCSV}
                disabled={filteredMembers.length === 0}
                className="px-4 py-2.5 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white text-xs font-semibold transition-colors disabled:opacity-40"
              >
                Export Members CSV ({filteredMembers.length})
              </button>
            </div>

            {/* Table of Members */}
            {filteredMembers.length === 0 ? (
              <div className="p-12 text-center rounded-[12px] bg-white border border-[#D6DDEA] text-[#071B3A]/60 text-sm">
                No member registrations found.
              </div>
            ) : (
              <div className="bg-white rounded-[12px] border border-[#D6DDEA] shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#E8EEF8] border-b border-[#D6DDEA] text-[#071B3A] font-bold">
                      <tr>
                        <th className="px-4 py-3.5">ID</th>
                        <th className="px-4 py-3.5">Full Name</th>
                        <th className="px-4 py-3.5">Age</th>
                        <th className="px-4 py-3.5">Institution / Occupation</th>
                        <th className="px-4 py-3.5">Area</th>
                        <th className="px-4 py-3.5">Phone &amp; Email</th>
                        <th className="px-4 py-3.5">Interests</th>
                        <th className="px-4 py-3.5">Availability</th>
                        <th className="px-4 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D6DDEA]">
                      {filteredMembers.map((m) => (
                        <tr key={m.id} className="hover:bg-[#F8FAFD] transition-colors">
                          <td className="px-4 py-3.5 font-mono font-bold text-xs text-[#071B3A]/70">
                            #{m.id}
                          </td>
                          <td className="px-4 py-3.5 font-bold text-[#071B3A]">
                            {m.fullName}
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/80">
                            {m.age}
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/85">
                            {m.institutionOrOccupation}
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/80">
                            {m.residenceArea}
                          </td>
                          <td className="px-4 py-3.5 text-xs">
                            <a
                              href={`tel:${m.phone}`}
                              className="font-mono font-medium text-[#E31C2A] hover:underline block"
                            >
                              {m.phone}
                            </a>
                            <a
                              href={`mailto:${m.email}`}
                              className="text-[11px] text-[#071B3A]/70 hover:underline block"
                            >
                              {m.email}
                            </a>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/75 max-w-xs truncate">
                            {(m.areasOfInterest || []).join(", ") || "—"}
                          </td>
                          <td className="px-4 py-3.5 text-xs text-[#071B3A]/75">
                            {m.availability || "Flexible"}
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <button
                              onClick={() => setSelectedMember(m)}
                              className="px-3 py-1.5 rounded-[6px] border border-[#D6DDEA] hover:bg-[#E8EEF8] text-xs font-semibold text-[#071B3A] transition-colors"
                            >
                              Inspect
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ================= MODAL: TEAM DETAIL ================= */}
      {selectedTeam && (
        <div
          className="fixed inset-0 z-50 bg-[#071B3A]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedTeam(null)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-[16px] border border-[#D6DDEA] p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#D6DDEA] pb-4">
              <div>
                <span className="text-xs font-bold text-[#E31C2A] uppercase tracking-wider block">
                  Debate Registration #{selectedTeam.id}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#071B3A]">
                  {selectedTeam.teamName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTeam(null)}
                className="p-2 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
                <div>
                  <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Category</span>
                  <span className="font-bold text-[#071B3A] text-base">{selectedTeam.category}</span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Institution</span>
                  <span className="font-bold text-[#071B3A]">{selectedTeam.institution}</span>
                </div>
                {selectedTeam.clubName && (
                  <div className="col-span-2">
                    <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Debate Club</span>
                    <span className="font-semibold text-[#071B3A]">{selectedTeam.clubName}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#071B3A]">Team Members</h4>
                <div className="p-3.5 rounded-[8px] border border-[#D6DDEA] bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#E31C2A] block">Member 1 (Team Leader)</span>
                    <span className="font-bold text-[#071B3A]">{selectedTeam.member1Name}</span>
                  </div>
                  <a
                    href={`tel:${selectedTeam.member1Phone}`}
                    className="font-mono text-sm font-bold text-[#E31C2A] hover:underline"
                  >
                    📞 {selectedTeam.member1Phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-[8px] border border-[#D6DDEA] bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#071B3A]/70 block">Member 2</span>
                    <span className="font-bold text-[#071B3A]">{selectedTeam.member2Name}</span>
                  </div>
                  <a
                    href={`tel:${selectedTeam.member2Phone}`}
                    className="font-mono text-sm font-bold text-[#071B3A] hover:underline"
                  >
                    📞 {selectedTeam.member2Phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-[8px] border border-[#D6DDEA] bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#071B3A]/70 block">Member 3</span>
                    <span className="font-bold text-[#071B3A]">{selectedTeam.member3Name}</span>
                  </div>
                  <a
                    href={`tel:${selectedTeam.member3Phone}`}
                    className="font-mono text-sm font-bold text-[#071B3A] hover:underline"
                  >
                    📞 {selectedTeam.member3Phone}
                  </a>
                </div>
              </div>

              {selectedTeam.note && (
                <div className="p-4 rounded-[8px] bg-amber-50 border border-amber-200 text-xs">
                  <span className="font-bold text-amber-900 block mb-1">Note / Inquiries from Team:</span>
                  <p className="text-amber-800 leading-relaxed">{selectedTeam.note}</p>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#D6DDEA] flex items-center justify-between text-xs text-[#071B3A]/60">
              <span>Submitted: {new Date(selectedTeam.createdAt).toLocaleString()}</span>
              <button
                onClick={() => setSelectedTeam(null)}
                className="px-4 py-2 rounded-[8px] bg-[#071B3A] text-white font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: MEMBER DETAIL ================= */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-[#071B3A]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-[16px] border border-[#D6DDEA] p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#D6DDEA] pb-4">
              <div>
                <span className="text-xs font-bold text-[#E31C2A] uppercase tracking-wider block">
                  Member Application #{selectedMember.id}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#071B3A]">
                  {selectedMember.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
                <div>
                  <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Age</span>
                  <span className="font-bold text-[#071B3A]">{selectedMember.age} years old</span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Area of Residence</span>
                  <span className="font-bold text-[#071B3A]">{selectedMember.residenceArea}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[11px] uppercase font-bold text-[#071B3A]/60">Institution / Occupation</span>
                  <span className="font-bold text-[#071B3A]">{selectedMember.institutionOrOccupation}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-[8px] border border-[#D6DDEA] bg-white">
                  <span className="text-[11px] font-bold text-[#071B3A]/70 block">Mobile Phone</span>
                  <a
                    href={`tel:${selectedMember.phone}`}
                    className="font-mono text-sm font-bold text-[#E31C2A] hover:underline"
                  >
                    📞 {selectedMember.phone}
                  </a>
                </div>
                <div className="p-3.5 rounded-[8px] border border-[#D6DDEA] bg-white">
                  <span className="text-[11px] font-bold text-[#071B3A]/70 block">Email Address</span>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-xs font-semibold text-[#071B3A] hover:underline truncate block"
                  >
                    ✉️ {selectedMember.email}
                  </a>
                </div>
              </div>

              {selectedMember.areasOfInterest && selectedMember.areasOfInterest.length > 0 && (
                <div>
                  <span className="block text-xs font-bold text-[#071B3A] mb-1.5">Areas of Interest:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.areasOfInterest.map((interest, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-[6px] bg-[#E8EEF8] border border-[#D6DDEA] text-xs font-medium text-[#071B3A]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="block text-xs font-bold text-[#071B3A] mb-1">Availability:</span>
                <p className="text-xs text-[#071B3A]/80">{selectedMember.availability || "Flexible"}</p>
              </div>

              {selectedMember.previousExperience && (
                <div className="p-4 rounded-[8px] bg-gray-50 border border-[#D6DDEA] text-xs">
                  <span className="font-bold text-[#071B3A] block mb-1">Previous Experience:</span>
                  <p className="text-[#071B3A]/80 leading-relaxed">{selectedMember.previousExperience}</p>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#D6DDEA] flex items-center justify-between text-xs text-[#071B3A]/60">
              <span>Submitted: {new Date(selectedMember.createdAt).toLocaleString()}</span>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 rounded-[8px] bg-[#071B3A] text-white font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
