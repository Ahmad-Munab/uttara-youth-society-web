"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  currentPage?: "home" | "proposal";
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between border-b border-navy/10 bg-white/85 backdrop-blur-md sticky top-[4px] z-40 transition-all">
        {/* Brand with Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm border border-navy/10 bg-white p-0.5 group-hover:scale-105 transition-transform flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Uttara Youth Society Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base sm:text-lg text-navy tracking-tight group-hover:text-gold transition-colors">
              Uttara Youth Society
            </div>
            <div className="text-[10px] sm:text-[11px] text-muted font-medium tracking-wide">
              {currentPage === "home" ? "Debate Club · Uttara, Dhaka" : "Debate Club · Sponsorship 2026"}
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {currentPage === "home" ? (
            <>
              <Link
                href="#about"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#pillars"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Pillars
              </Link>
              <Link
                href="#impact"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Dual Impact
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Home
              </Link>
              <Link
                href="#overview"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Overview
              </Link>
              <Link
                href="#structure"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Structure
              </Link>
              <Link
                href="#packages"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Packages
              </Link>
              <Link
                href="#budget"
                className="text-sm font-medium text-muted hover:text-navy transition-colors"
              >
                Budget
              </Link>
            </>
          )}

          {currentPage === "home" ? (
            <Link
              href="/debate-partnership"
              className="relative group inline-flex items-center justify-center px-4 py-2 bg-navy text-white text-sm font-medium rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all hover:bg-navy-light"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Championship 2026</span>
                <span className="px-1.5 py-0.5 text-[10px] bg-gold text-navy font-bold rounded-full">
                  Proposal
                </span>
              </span>
            </Link>
          ) : (
            <a
              href="mailto:contact@uttarayouthsociety.org?subject=Sponsorship%20Inquiry%20-%20Uttara%20Debate%20Championship%202026"
              className="inline-flex items-center px-4 py-2 bg-navy text-white text-xs font-bold rounded-full hover:bg-navy-light transition-colors shadow-sm"
            >
              Contact Secretariat
            </a>
          )}
        </div>

        {/* Mobile Action & Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {currentPage === "home" ? (
            <Link
              href="/debate-partnership"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-full shadow-sm hover:bg-navy-light"
            >
              2026 Proposal
            </Link>
          ) : (
            <a
              href="mailto:contact@uttarayouthsociety.org"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-full shadow-sm"
            >
              Contact
            </a>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-navy hover:bg-navy/5 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[52px] sm:top-[56px] z-30 bg-white/95 backdrop-blur-xl border-b border-navy/10 px-6 py-6 shadow-2xl md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {currentPage === "home" ? (
              <>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>About Us</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="#pillars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>Core Pillars</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="#impact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>Dual Impact Model</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="/debate-partnership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl shadow-md mt-2"
                >
                  View Championship 2026 Proposal
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>← Home Page</span>
                </Link>
                <Link
                  href="#overview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>Event Overview</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="#structure"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>Tournament Structure</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>7 Sponsorship Packages</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <Link
                  href="#budget"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-navy py-2 border-b border-navy/5 flex items-center justify-between"
                >
                  <span>Budget &amp; Transparency</span>
                  <span className="text-muted text-xs">→</span>
                </Link>
                <a
                  href="mailto:contact@uttarayouthsociety.org?subject=Sponsorship%20Inquiry%20-%20Uttara%20Debate%20Championship%202026"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-navy text-white font-bold rounded-xl shadow-md mt-2"
                >
                  Email Secretariat
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
