"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      <section className="bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-[#071B3A]/80 leading-relaxed">
              Inquiries regarding debate championship registrations, school participation, or community welfare programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8FAFD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Information Desk */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h2 className="font-heading font-bold text-xl text-[#071B3A] mb-2">
                  Uttara Youth Society Secretariat
                </h2>
                <p className="text-sm text-[#071B3A]/75 leading-relaxed">
                  Serving youth and students across Uttara, Sector 1 through 18, and greater Dhaka.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-[8px] bg-white border border-[#D6DDEA]">
                  <span className="block text-xs font-bold text-[#E31C2A] uppercase tracking-wider mb-1">
                    Headquarters
                  </span>
                  <p className="font-medium text-[#071B3A]">Uttara, Dhaka-1230, Bangladesh</p>
                </div>

                <div className="p-4 rounded-[8px] bg-white border border-[#D6DDEA]">
                  <span className="block text-xs font-bold text-[#E31C2A] uppercase tracking-wider mb-1">
                    Official Email
                  </span>
                  <p className="font-medium text-[#071B3A]">contact@uttarayouthsociety.org</p>
                </div>

                <div className="p-4 rounded-[8px] bg-white border border-[#D6DDEA]">
                  <span className="block text-xs font-bold text-[#E31C2A] uppercase tracking-wider mb-1">
                    Debate 2026 Inquiries
                  </span>
                  <p className="text-xs text-[#071B3A]/75 leading-relaxed">
                    For institutional slots, teacher accompaniment, or speaker substitutions, please select &quot;Debate 2026 Tournament&quot; in the message subject.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-[8px] border border-[#D6DDEA] shadow-xs">
              <h3 className="font-heading font-bold text-xl text-[#071B3A] mb-6">
                Send a Message
              </h3>

              {sent ? (
                <div className="p-6 rounded-[8px] bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-1">
                  <p className="font-bold text-base">Message Sent</p>
                  <p className="text-xs">
                    Thank you for reaching out. A representative from Uttara Youth Society will review your note and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Debate 2026 Tournament">Debate 2026 Tournament</option>
                      <option value="Member Registration">Member Application</option>
                      <option value="Institutional Partnership">Institutional / School Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#071B3A] mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-[8px] border border-[#D6DDEA] bg-white text-sm text-[#071B3A] focus-visible:outline-2 focus-visible:outline-[#071B3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
