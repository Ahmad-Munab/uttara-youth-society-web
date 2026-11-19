"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ActivityItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  bengaliTitle?: string;
  period: string;
  location: string;
  description: string;
  aspect: "aspect-[4/3]" | "aspect-[16/10]" | "aspect-[3/2]";
  image?: string;
}

const activities: ActivityItem[] = [
  {
    id: "cricket-independence-2018",
    category: "Sports",
    tag: "Sports & Recreation",
    title: "Independence Day Cricket Tournament 2018",
    period: "Documented 2018",
    location: "Uttara Sector Grounds, Dhaka",
    description:
      "Uttara Youth Society organized the Independence Day Cricket Tournament featuring youth teams from across Uttara, concluding with a formal trophy award ceremony for the champions.",
    aspect: "aspect-[16/10]",
    image: "/images/activities/cricket-tournament.jpg",
  },
  {
    id: "literacy-campaign-2017",
    category: "Education",
    tag: "Education & Literacy",
    title: "Community Literacy Campaign",
    bengaliTitle: "“স্বাক্ষরতা অভিযান ২০১৭”",
    period: "Documented 2017",
    location: "Uttara, Dhaka",
    description:
      "Direct educational outreach by student volunteers, conducting basic literacy lessons, chalk-and-slate writing instruction, and distributing learning materials to underprivileged children.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/literacy-campaign.jpg",
  },
  {
    id: "literacy-teaching",
    category: "Education",
    tag: "Education & Literacy",
    title: "Grassroots Child Education Sessions",
    period: "Documented 2017",
    location: "Uttara Community Clusters",
    description:
      "Volunteer tutors working one-on-one with children to build foundational Bengali reading and numerical skills in open neighborhood learning spaces.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/literacy-teaching.jpg",
  },
  {
    id: "cricket-match-action",
    category: "Sports",
    tag: "Sports & Recreation",
    title: "Inter-Ward Youth Cricket Match",
    period: "Recreational League",
    location: "Uttara Sector Fields",
    description:
      "Competitive cricket match action arranged by UYS to promote healthy active lifestyles, athletic discipline, and sportsmanship among student youths.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/cricket-match.jpg",
  },
  {
    id: "debate-ward",
    category: "Debate",
    tag: "Debate & Public Speaking",
    title: "Inter-Ward Debate & Youth Discussion",
    bengaliTitle: "“যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী”",
    period: "Documented Milestone",
    location: "Uttara, Dhaka",
    description:
      "Bengali Asian Parliamentary tournament organized across Uttara wards, engaging school and college debaters in policy, governance, and ethics motions.",
    aspect: "aspect-[16/10]",
    image: "/images/activities/youth-forum.jpg",
  },
  {
    id: "fifa-world-cup-screening",
    category: "Community",
    tag: "Community Festival",
    title: "FIFA World Cup 2026 Live Screening",
    bengaliTitle: "“ফিফা ওয়ার্ল্ড কাপ ২০২৬ মুগ্ধ মঞ্চ — সকলের জন্য উন্মুক্ত”",
    period: "Community Screening",
    location: "Uttara Public Venue, Dhaka",
    description:
      "A massive open-air live screening festival organized by Uttara Youth Society, bringing together football enthusiasts, local residents, and youth in a safe and celebratory community space.",
    aspect: "aspect-[16/10]",
    image: "/images/activities/hero-screening.jpg",
  },
  {
    id: "student-felicitation",
    category: "Education",
    tag: "Education Mentorship",
    title: "Merit Student Felicitation & Award Ceremony",
    period: "Annual Reception",
    location: "Uttara, Dhaka",
    description:
      "Formal reception honoring meritorious graduating students and youth leaders with commemorative crests of achievement and educational guidance.",
    aspect: "aspect-[16/10]",
    image: "/images/activities/community-award.jpg",
  },
  {
    id: "winter-clothing",
    category: "Winter Clothing",
    tag: "Humanitarian Relief",
    title: "Seasonal Winter Clothing Distribution",
    period: "Recurring Winter Drive",
    location: "Uttara & Greater Dhaka Suburbs",
    description:
      "Student volunteers collect and distribute warm garments, sweaters, and heavy blankets directly to low-income families and displaced street dwellers.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/relief-drive.jpg",
  },
  {
    id: "tree-plantation",
    category: "Tree Plantation",
    tag: "Environmental Protection",
    title: "Tree Plantation & Sapling Distribution",
    period: "Environmental Campaign",
    location: "Uttara Wards & Campuses",
    description:
      "Direct planting of native trees across neighborhood avenues and parks, accompanied by sapling distribution to school students.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/tree-plantation.jpg",
  },
  {
    id: "drug-awareness",
    category: "Awareness",
    tag: "Social Awareness",
    title: "Anti-Drug Abuse & Trafficking Campaign",
    period: "Community Advocacy",
    location: "Uttara Community Centers",
    description:
      "Public seminars and youth discussions addressing the negative impacts of illicit drug trafficking and substance abuse on families.",
    aspect: "aspect-[16/10]",
    image: "/images/activities/social-awareness.jpg",
  },
  {
    id: "july-heroes",
    category: "Community",
    tag: "Civic Dialogue",
    title: "Youth Forum & Civic Consultation",
    period: "Civic Dialogue",
    location: "Uttara, Dhaka",
    description:
      "Constructive public civic discussion and youth consultations bringing together student leaders and neighborhood representatives on community development.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/youth-forum.jpg",
  },
  {
    id: "volunteers-coordination",
    category: "Community",
    tag: "Volunteer Movement",
    title: "Youth Volunteers Coordination Meeting",
    period: "Organizing Assembly",
    location: "Uttara Secretariat",
    description:
      "Planning and coordination assembly for active members and student coordinators organizing seasonal community initiatives and student tournaments.",
    aspect: "aspect-[4/3]",
    image: "/images/activities/volunteers-team.jpg",
  },
];

const filterCategories = [
  "All",
  "Debate",
  "Winter Clothing",
  "Flood Relief",
  "COVID-19",
  "Education",
  "Sports",
  "Tree Plantation",
  "Awareness",
  "Community",
];

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    selectedCategory === "All"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      {/* Header with Light of Reason Motif Accent */}
      <section className="relative overflow-hidden bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        {/* Subtle yellow disc motif accent */}
        <div
          className="absolute -top-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#FFC400]/40 -z-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              Past Activities &amp; Programs
            </h1>
            <p className="text-base sm:text-lg text-[#071B3A]/80 leading-relaxed">
              A photo-first factual archive of initiatives carried out across more than 12 years of community involvement in Uttara, Dhaka. Click on any record to view archival details.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Chips Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-[#D6DDEA] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[8px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#071B3A] ${
                  selectedCategory === cat
                    ? "bg-[#071B3A] text-white"
                    : "bg-[#E8EEF8] text-[#071B3A]/80 hover:bg-[#D6DDEA] hover:text-[#071B3A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid (Varied Size Photo Frames with 24px Border Radii) */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer bg-white rounded-[24px] border border-[#D6DDEA] p-5 shadow-xs hover:shadow-md hover:border-[#071B3A] transition-all flex flex-col justify-between"
                tabIndex={0}
                role="button"
                aria-label={`Open archival record for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              >
                <div>
                  {/* Visual Archival Frame (24px radius frame) */}
                  <div
                    className={`${item.aspect} w-full rounded-[16px] bg-[#E8EEF8] border border-[#D6DDEA] relative overflow-hidden group-hover:border-[#071B3A] transition-colors`}
                  >
                    {item.image ? (
                      <>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/90 via-[#071B3A]/30 to-transparent" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-[8px] bg-[#071B3A]/80 backdrop-blur-xs text-[11px] font-bold text-white border border-white/20">
                              {item.tag}
                            </span>
                            <span className="text-[11px] text-white/90 font-semibold bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                              {item.period}
                            </span>
                          </div>

                          <div>
                            {item.bengaliTitle && (
                              <p className="bangla-slogan text-xs font-semibold text-[#FFC400] mb-0.5 drop-shadow-xs">
                                {item.bengaliTitle}
                              </p>
                            )}
                            <p className="font-heading font-bold text-base text-white line-clamp-2 drop-shadow-xs">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="p-5 flex flex-col justify-between h-full group-hover:bg-[#DFE7F5] transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-[8px] bg-white text-[11px] font-bold text-[#071B3A] border border-[#D6DDEA]">
                            {item.tag}
                          </span>
                          <span className="text-[11px] text-[#071B3A]/60 font-semibold">
                            {item.period}
                          </span>
                        </div>

                        <div>
                          {item.bengaliTitle && (
                            <p className="bangla-slogan text-xs font-semibold text-[#E31C2A] mb-0.5">
                              {item.bengaliTitle}
                            </p>
                          )}
                          <p className="font-heading font-bold text-base text-[#071B3A] line-clamp-2">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Caption & Description */}
                  <div className="pt-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-[#071B3A]/60">
                      <span>📍 {item.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#071B3A]/80 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#D6DDEA] flex items-center justify-between text-xs font-semibold text-[#071B3A]">
                  <span>Click to expand</span>
                  <span className="text-[#E31C2A] group-hover:translate-x-0.5 transition-transform">
                    View Record
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard Navigation & Visible Focus */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#071B3A]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Activity Lightbox"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[24px] border border-[#D6DDEA] p-5 sm:p-8 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] transition-colors focus-visible:outline-2 focus-visible:outline-[#071B3A]"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Frame in Lightbox */}
            <div className="aspect-[16/10] w-full rounded-[16px] bg-[#E8EEF8] border border-[#D6DDEA] relative overflow-hidden">
              {filtered[lightboxIndex].image ? (
                <>
                  <Image
                    src={filtered[lightboxIndex].image!}
                    alt={filtered[lightboxIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/90 via-[#071B3A]/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-[8px] bg-[#071B3A]/80 backdrop-blur-xs text-xs font-bold text-white border border-white/20">
                        {filtered[lightboxIndex].tag}
                      </span>
                      <span className="text-xs text-white/90 font-semibold bg-black/40 px-2 py-1 rounded backdrop-blur-xs">
                        {filtered[lightboxIndex].period}
                      </span>
                    </div>
                    <div>
                      {filtered[lightboxIndex].bengaliTitle && (
                        <p className="bangla-slogan text-base font-bold text-[#FFC400] mb-1 drop-shadow-xs">
                          {filtered[lightboxIndex].bengaliTitle}
                        </p>
                      )}
                      <h3 className="font-heading font-extrabold text-2xl text-white drop-shadow-xs">
                        {filtered[lightboxIndex].title}
                      </h3>
                      <p className="text-xs text-white/80 mt-1">
                        📍 {filtered[lightboxIndex].location}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-[8px] bg-white text-xs font-bold text-[#071B3A] border border-[#D6DDEA]">
                      {filtered[lightboxIndex].tag}
                    </span>
                    <span className="text-xs text-[#071B3A]/70 font-semibold">
                      {filtered[lightboxIndex].period}
                    </span>
                  </div>
                  <div>
                    {filtered[lightboxIndex].bengaliTitle && (
                      <p className="bangla-slogan text-base font-bold text-[#E31C2A] mb-1">
                        {filtered[lightboxIndex].bengaliTitle}
                      </p>
                    )}
                    <h3 className="font-heading font-extrabold text-2xl text-[#071B3A]">
                      {filtered[lightboxIndex].title}
                    </h3>
                    <p className="text-xs text-[#071B3A]/70 mt-1">
                      📍 {filtered[lightboxIndex].location}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Factual Narrative */}
            <div className="space-y-2 pt-2">
              <h4 className="font-heading font-bold text-base text-[#071B3A]">
                Archival Record Details
              </h4>
              <p className="text-sm text-[#071B3A]/85 leading-relaxed">
                {filtered[lightboxIndex].description}
              </p>
            </div>

            {/* Keyboard & Controls Navigation */}
            <div className="pt-4 border-t border-[#D6DDEA] flex items-center justify-between text-xs text-[#071B3A]">
              <div className="space-x-2">
                <button
                  onClick={prevLightbox}
                  className="px-3 py-1.5 rounded-[8px] border border-[#D6DDEA] hover:bg-[#E8EEF8] font-semibold"
                  aria-label="Previous record"
                >
                  ← Previous
                </button>
                <button
                  onClick={nextLightbox}
                  className="px-3 py-1.5 rounded-[8px] border border-[#D6DDEA] hover:bg-[#E8EEF8] font-semibold"
                  aria-label="Next record"
                >
                  Next →
                </button>
              </div>
              <span className="text-[#071B3A]/60">
                {lightboxIndex + 1} of {filtered.length} · Use Left/Right keys or Esc
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
