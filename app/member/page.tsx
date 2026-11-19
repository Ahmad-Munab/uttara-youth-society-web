"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MemberPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    institutionOrOccupation: "",
    residenceArea: "",
    phone: "",
    email: "",
    areasOfInterest: [] as string[],
    previousExperience: "",
    availability: "Weekends & Events",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [memberId, setMemberId] = useState<string | number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const interestOptions = [
    "Debate & Public Speaking Tournaments",
    "Humanitarian Assistance & Winter Clothing",
    "Disaster & Flood Relief Campaigns",
    "Sports Tournaments (Badminton/Cricket)",
    "Tree Plantation & Environmental Greening",
    "Event Organizing & Field Coordination",
  ];

  const handleCheckbox = (option: string) => {
    setFormData((prev) => {
      const exists = prev.areasOfInterest.includes(option);
      return {
        ...prev,
        areasOfInterest: exists
          ? prev.areasOfInterest.filter((item) => item !== option)
          : [...prev.areasOfInterest, option],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/register-member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit membership application.");
      }

      setSubmitted(true);
      setMemberId(data.memberId);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      <section className="bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E31C2A] block">
              Join Our Community
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              Member Registration
            </h1>
            <p className="text-base sm:text-lg text-[#071B3A]/80 leading-relaxed">
              Step forward as an active member of Uttara Youth Society to organize tournaments, coordinate community relief, and foster student leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8FAFD]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="p-8 rounded-[8px] bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2">
              <h3 className="font-heading font-bold text-xl">Membership Application Received</h3>
              <p className="text-sm leading-relaxed">
                Thank you for applying to become a member of Uttara Youth Society. Our member coordination desk will contact you via phone for the upcoming orientation session.
              </p>
              {memberId && (
                <p className="text-xs font-mono font-bold mt-2 bg-white/80 px-2 py-1 rounded inline-block">
                  Membership Application ID: #{memberId}
                </p>
              )}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMemberId(null);
                    setFormData({
                      fullName: "",
                      age: "",
                      institutionOrOccupation: "",
                      residenceArea: "",
                      phone: "",
                      email: "",
                      areasOfInterest: [],
                      previousExperience: "",
                      availability: "Weekends & Events",
                    });
                  }}
                  className="px-4 py-2 rounded-[8px] bg-[#071B3A] text-white text-xs font-semibold"
                >
                  Submit Another Member Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-[8px] border border-[#D6DDEA] shadow-xs space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-[8px] bg-red-50 border border-red-300 text-red-900 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Your legal name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Age *
                    </label>
                    <input
                      id="age"
                      type="number"
                      required
                      min={12}
                      max={40}
                      placeholder="e.g. 19"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="residence" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Area of Residence *
                    </label>
                    <input
                      id="residence"
                      type="text"
                      required
                      placeholder="e.g. Sector 7, Uttara, Dhaka"
                      value={formData.residenceArea}
                      onChange={(e) => setFormData({ ...formData, residenceArea: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="institution" className="block text-xs font-semibold text-[#071B3A] mb-1">
                    School / College / Occupation *
                  </label>
                  <input
                    id="institution"
                    type="text"
                    required
                    placeholder="Institution name or current occupation"
                    value={formData.institutionOrOccupation}
                    onChange={(e) => setFormData({ ...formData, institutionOrOccupation: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Email Address <span className="text-[#071B3A]/50 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-xs font-semibold text-[#071B3A] mb-2">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {interestOptions.map((opt) => (
                    <label
                      key={opt}
                      className={`p-3 rounded-[8px] border text-xs font-medium cursor-pointer transition-colors flex items-center gap-2.5 ${
                        formData.areasOfInterest.includes(opt)
                          ? "border-[#071B3A] bg-[#071B3A]/5 text-[#071B3A] font-bold"
                          : "border-[#D6DDEA] bg-white text-[#071B3A]/80 hover:border-[#071B3A]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.areasOfInterest.includes(opt)}
                        onChange={() => handleCheckbox(opt)}
                        className="accent-[#071B3A] w-4 h-4 rounded"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Availability
                </label>
                <select
                  id="availability"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                >
                  <option value="Weekends & Events">Weekends &amp; Major Events</option>
                  <option value="Flexible (Few hours per week)">Flexible (A few hours per week)</option>
                  <option value="On-Call for Emergency Relief">Emergency Flood &amp; Humanitarian Relief Drives</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-xs font-semibold text-[#071B3A] mb-1">
                  Previous Organizing or Extracurricular Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  rows={2}
                  placeholder="Any clubs or volunteer background..."
                  value={formData.previousExperience}
                  onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Member Registration"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
