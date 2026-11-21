"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
}

const slides: HeroSlide[] = [

  {
    id: "worldcup-screening",
    image: "/images/activities/showing-worldcup.jpg",
    tag: "Community Festival",
    title: "Open-Air FIFA World Cup Public Screening",
    subtitle: "Giant-screen match broadcasts uniting passionate sports fans, local families, and youth in Uttara.",
    href: "/activities",
    cta: "Explore Initiatives",
  },
  {
    id: "cricket-tournament",
    image: "/images/activities/cricket-tournament.jpg",
    tag: "Youth Athletics",
    title: "Independence Day Youth Cricket Championship",
    subtitle: "Competitive tournaments promoting sportsmanship, athletic discipline, and health across Uttara sectors.",
    href: "/activities",
    cta: "View Sports Work",
  },
  {
    id: "badminton-championship",
    image: "/images/activities/badminton-tournament.jpg",
    tag: "Youth Sports",
    title: "Uttara Youth Badminton Championship",
    subtitle: "Inter-sector athletic competitions building camaraderie, agility, and active lifestyles among students.",
    href: "/activities",
    cta: "See Sports Archive",
  },
  {
    id: "food-relief",
    image: "/images/activities/charity-food-givaway.jpg",
    tag: "Humanitarian Relief",
    title: "Community Food Relief & Charity Giveaway",
    subtitle: "Student volunteer mobilization distributing emergency food parcels and meals to vulnerable families.",
    href: "/activities",
    cta: "See Relief Archive",
  },
  {
    id: "literacy-camp",
    image: "/images/activities/literacy-camp.jpg",
    tag: "Child Education",
    title: "Community Child Literacy Outreach Camp",
    subtitle: "Volunteer student tutors delivering reading lessons, writing slates, and books in neighborhood learning spaces.",
    href: "/activities",
    cta: "Explore Literacy",
  },
  {
    id: "career-counselling",
    image: "/images/activities/career-counselling-program.jpg",
    tag: "Student Mentorship",
    title: "Youth Career Counselling & Mentorship Program",
    subtitle: "Providing secondary and college scholars with board exam roadmaps and higher education guidance.",
    href: "/activities",
    cta: "View Mentorship",
  },
  {
    id: "debate-championship",
    image: "/images/activities/debate-competion-awards.jpg",
    tag: "Debate & Reason",
    title: "Uttara Debate Championship Awards Ceremony",
    subtitle: "3v3 Bengali Asian Parliamentary debate festival fostering civic dialogue and critical thinking.",
    href: "/events/debate-2026",
    cta: "Register Team",
  },
];

const AUTO_SLIDE_INTERVAL = 5500;

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const stepMs = 50;
    const increment = (stepMs / AUTO_SLIDE_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const current = slides[currentIndex];

  return (
    <section
      className="relative w-full bg-[#040F22] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Uttara Youth Society Showcase"
    >
      {/* Slider Viewport: Generous photo height with clean aspect */}
      <div
        className="relative w-full h-[52vh] min-h-[360px] max-h-[500px] sm:h-[62vh] sm:min-h-[460px] sm:max-h-[640px] lg:h-[70vh] lg:min-h-[520px] lg:max-h-[680px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Photos Layer */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                  }`}
              />
            </div>
          );
        })}

        {/* Minimalist Bottom Scrim: covers only lower part of the photo so faces & action remain 100% visible */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#040F22]/95 via-[#040F22]/50 to-transparent z-20 pointer-events-none" />

        {/* Minimal Subtle Slide Counter at Top-Right */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xs text-white text-[11px] font-mono border border-white/15">
          <span>0{currentIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/60">0{total}</span>
        </div>

        {/* Left / Right Navigation Arrows */}
        <div className="absolute inset-y-0 inset-x-2 sm:inset-x-4 z-30 flex items-center justify-between pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs border border-white/15 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs border border-white/15 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Clean Captions Overlay (Scaled down for mobile so image is prominent) */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto w-full flex flex-col justify-end">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            {/* Small Sleek Category Tag */}
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FFC400]">
              {current.tag}
            </span>

            {/* Clean Title - Scaled for mobile */}
            <h2 className="font-heading font-extrabold text-lg sm:text-3xl lg:text-4xl !text-white text-[#FFFFFF] tracking-tight leading-snug drop-shadow-md">
              {current.title}
            </h2>

            {/* Subtitle - hidden on tiny mobile screens to keep the image visible */}
            <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-white/85 leading-relaxed font-normal drop-shadow-xs line-clamp-2 max-w-xl">
              {current.subtitle}
            </p>

            {/* 1 Single Clean Action Link (Desktop only) & Dots Row */}
            <div className="pt-1 sm:pt-2 flex items-center justify-between gap-4">
              <Link
                href={current.href}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E31C2A] hover:bg-[#C71420] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
              >
                <span>{current.cta}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Minimal Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((slide, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${isSelected ? "w-5 bg-[#FFC400]" : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Progress Line along bottom edge */}
        <div className="absolute bottom-0 inset-x-0 h-0.5 sm:h-1 bg-white/15 z-40">
          <div
            className="h-full bg-[#FFC400] transition-all ease-linear"
            style={{
              width: isPlaying && !isHovered ? `${progress}%` : "0%",
              transitionDuration: isPlaying && !isHovered ? "50ms" : "0ms",
            }}
          />
        </div>
      </div>
    </section>
  );
}
