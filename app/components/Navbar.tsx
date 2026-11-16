"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on Esc or route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const links = [
    { href: "/events/debate-2026", label: "Debate 2026" },
    { href: "/activities", label: "Past Activities" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/volunteer", label: "Volunteer" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/events") return pathname === "/events";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#D6DDEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071B3A] rounded-md"
          >
            <div className="w-11 h-11 relative rounded-md border border-[#D6DDEA] bg-white p-1 flex-shrink-0 group-hover:border-[#071B3A] transition-colors">
              <Image
                src="/logo.png"
                alt="Uttara Youth Society Emblem"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-lg sm:text-xl text-[#071B3A] tracking-tight block">
                Uttara Youth Society
              </span>
              <span className="bangla-slogan text-xs text-[#071B3A]/70 font-medium block">
                উত্তরা যুব সোসাইটি
              </span>
            </div>
          </Link>

          {/* Desktop Nav - 5 clean links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071B3A] rounded-sm px-1 py-0.5 ${
                  isActive(link.href)
                    ? "text-[#E31C2A] font-semibold border-b-2 border-[#E31C2A]"
                    : "text-[#071B3A]/80 hover:text-[#071B3A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Single Red CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/events/debate-2026#register"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white text-[15px] font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071B3A]"
            >
              Register for Debate 2026
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2.5 rounded-[8px] border border-[#D6DDEA] text-[#071B3A] hover:bg-[#E8EEF8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071B3A]"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Full-Screen Sheet */}
      {open && (
        <div className="fixed inset-0 top-20 z-50 bg-white px-6 py-8 flex flex-col justify-between overflow-y-auto lg:hidden animate-hero-text">
          <nav className="space-y-4">
            <div className="border-b border-[#D6DDEA] pb-4 mb-4">
              <span className="text-xs uppercase tracking-wider text-[#071B3A]/60 font-semibold">
                Menu
              </span>
            </div>
            <Link
              href="/"
              className={`block text-2xl font-heading font-bold py-2 ${
                pathname === "/" ? "text-[#E31C2A]" : "text-[#071B3A]"
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-2xl font-heading font-bold py-2 ${
                  isActive(link.href) ? "text-[#E31C2A]" : "text-[#071B3A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#D6DDEA] space-y-4">
            <Link
              href="/events/debate-2026#register"
              className="block w-full py-3.5 text-center rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white text-base font-semibold shadow-sm transition-colors"
            >
              Register for Debate 2026
            </Link>
            <p className="text-xs text-[#071B3A]/60 text-center">
              Uttara Youth Society · Uttara, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
