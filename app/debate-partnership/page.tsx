import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function DebatePartnership() {
  const packages = [
    {
      name: "Title Sponsor",
      price: "৳2,50,000",
      status: "Exclusive",
      color: "gold",
      summary: "Overall event title: “[Brand] Presents Uttara Debate Championship 2026 – Grand Finale & Music Festival”. Strongest visibility across both debate and music programmes.",
      highlights: [
        "Largest logo on main stage, LED, backdrop & festival stage",
        "Keynote address at opening & prize-giving ceremonies",
        "Hand over the Championship Trophy on stage",
        "Premium central activation booth & product display",
        "Dedicated social media campaign & prime video branding",
        "10 VIP executive reserved lounge passes"
      ]
    },
    {
      name: "Music Festival Partner",
      price: "৳1,50,000",
      status: "New · Exclusive",
      color: "blue-light",
      summary: "Headline partner for the evening cultural concert: “[Brand] Music Festival”. Prime engagement with 2,000+ enthusiastic youth and college students.",
      highlights: [
        "Dedicated festival naming rights & stage banner",
        "Prominent festival LED branding & stage announcements",
        "Festival-area activation space & merchandise booth",
        "Dedicated festival social media promotion series",
        "Logo in official festival highlight video",
        "8 VIP backstage & front-row festival passes"
      ]
    },
    {
      name: "Presenting Sponsor",
      price: "৳1,25,000",
      status: "Co-Branding",
      color: "purple",
      summary: "“In Association With / Presented By [Brand]” recognition across all championship collateral, debate rounds, and evening festival.",
      highlights: [
        "Prominent debate stage & backdrop branding",
        "Logo on live festival stage & LED displays",
        "Role in prize distribution ceremony",
        "Dedicated promotional posts & logo in event video",
        "Exhibition booth (subject to space)",
        "6 VIP passes for all sessions"
      ]
    },
    {
      name: "Platinum Sponsor",
      price: "৳75,000",
      status: "High Visibility",
      color: "navy",
      summary: "Balanced presence across educational debate sessions and the live music festival with continuous screen rotations.",
      highlights: [
        "Logo on debate backdrop and festival stage",
        "Stage mentions during both daytime & evening programmes",
        "Promotional posts across social media channels",
        "Logo in official event recap video",
        "4 VIP attendee passes"
      ]
    },
    {
      name: "Gold Sponsor",
      price: "৳50,000",
      status: "Popular",
      color: "gold",
      summary: "Stage-side branding and festival LED sponsor loop with ceremony acknowledgement before local dignitaries.",
      highlights: [
        "Stage-side branding and festival LED sponsor loop",
        "Closing ceremony acknowledgement by anchor",
        "Logo on promotional posters and digital flyers",
        "Social media recognition post",
        "3 Complimentary event passes"
      ]
    },
    {
      name: "Silver Sponsor",
      price: "৳25,000",
      status: "Supporter",
      color: "green",
      summary: "Targeted brand recognition on select print, digital collaterals, and official event brochure.",
      highlights: [
        "Logo on selected digital and printed collaterals",
        "Sponsor recognition list at the venue",
        "Social media mention on official page",
        "2 Complimentary event passes"
      ]
    },
    {
      name: "Associate Sponsor",
      price: "৳10,000",
      status: "Accessible",
      color: "muted",
      summary: "Entry-level institutional or community partnership acknowledging support for youth intellectual development.",
      highlights: [
        "Digital logo placement on official website & schedule",
        "Official sponsor roll-call acknowledgement",
        "Group social media appreciation post",
        "1 Complimentary event pass"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-off-white selection:bg-gold/20 selection:text-navy overflow-x-hidden">
      {/* 4-Color Accent Strip from Demo */}
      <div className="accent-bar sticky top-0 z-50">
        <span style={{ backgroundColor: "#E8222E" }}></span>
        <span style={{ backgroundColor: "#14A9F0" }}></span>
        <span style={{ backgroundColor: "#5BC22B" }}></span>
        <span style={{ backgroundColor: "#FFB414" }}></span>
      </div>

      {/* Responsive Navigation with Actual Logo & Mobile Drawer */}
      <Navbar currentPage="proposal" />

      {/* Hero Section: Replicating Cover Page from HTML Asset */}
      <section className="relative overflow-hidden bg-navy text-white px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] h-[220px] sm:h-[360px] bg-gradient-to-tr from-blue/20 via-gold/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-10 left-5 w-48 sm:w-72 h-48 sm:h-72 bg-blue-light/10 rounded-full blur-2xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 right-5 w-52 sm:w-80 h-52 sm:h-80 bg-gold/15 rounded-full blur-2xl pointer-events-none animate-float-slower" />

        {/* Decorative SVG Cover Art from HTML demo */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="120,0 240,0 50,650 -110,650" fill="url(#beam)" />
          <polygon points="650,0 800,0 980,650 780,650" fill="url(#beam)" opacity="0.8" />
          <g fill="none" stroke="#ffffff" strokeOpacity="0.07">
            <circle cx="500" cy="360" r="160" />
            <circle cx="500" cy="360" r="240" />
            <circle cx="500" cy="360" r="320" />
            <circle cx="500" cy="360" r="410" />
          </g>
          {/* Animated EQ bars from demo cover page SVG */}
          <g opacity="0.6">
            <rect x="50" y="580" width="10" height="30" rx="5" fill="#14A9F0" />
            <rect x="68" y="560" width="10" height="50" rx="5" fill="#5BC22B" />
            <rect x="86" y="572" width="10" height="38" rx="5" fill="#FFB414" />
            <rect x="104" y="540" width="10" height="70" rx="5" fill="#E8222E" />
            <rect x="122" y="555" width="10" height="55" rx="5" fill="#14A9F0" />
            <rect x="140" y="530" width="10" height="80" rx="5" fill="#5BC22B" />
            <rect x="158" y="550" width="10" height="60" rx="5" fill="#FFB414" />
            <rect x="176" y="520" width="10" height="90" rx="5" fill="#E8222E" />
            <rect x="194" y="545" width="10" height="65" rx="5" fill="#14A9F0" />
            <rect x="212" y="565" width="10" height="45" rx="5" fill="#5BC22B" />
            <rect x="230" y="535" width="10" height="75" rx="5" fill="#FFB414" />
          </g>
        </svg>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Official logo emblem */}
          <div className="mx-auto mb-5 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-md p-2 sm:p-2.5 border border-white/20 shadow-2xl flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Uttara Youth Society"
              width={80}
              height={80}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-muted-light border-b border-white/10 pb-3 mb-5 sm:mb-6 max-w-xl mx-auto gap-1 sm:gap-0">
            <span className="font-semibold text-white/90 tracking-wide text-center sm:text-left">
              Uttara Youth Society – Debate Club
            </span>
            <span className="text-gold font-bold tracking-wider uppercase">
              Official Proposal
            </span>
          </div>

          <div className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-sm">
            Corporate Sponsorship Proposal 2026
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight break-words">
            Uttara Debate <br />
            Championship <span className="text-gold">2026</span>
          </h1>

          <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold-light mb-3 sm:mb-4 italic font-normal tracking-wide">
            Grand Finale &amp; Music Festival
          </p>

          <p className="text-muted-light text-base sm:text-lg md:text-xl mb-8 sm:mb-10 font-light px-2">
            Where Ideas Meet, Voices Rise.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium">
            <div className="px-4 py-2.5 sm:px-5 sm:py-3 glass-card flex items-center justify-center gap-2">
              <span className="text-gold font-bold">📅 16 December 2026</span>
              <span className="text-muted-light">· Uttara, Dhaka</span>
            </div>
            <div className="px-4 py-2.5 sm:px-5 sm:py-3 glass-card flex items-center justify-center gap-2">
              <span className="text-blue-light font-bold">🗣 32+ Teams</span>
              <span className="text-muted-light">Junior &amp; Senior</span>
            </div>
            <div className="px-4 py-2.5 sm:px-5 sm:py-3 glass-card flex items-center justify-center gap-2">
              <span className="text-green font-bold">🎵 Live Concert</span>
              <span className="text-muted-light">Evening Festival</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 & 2: More Than A Debate / Intellect by Day, Culture by Night */}
      <section id="overview" className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Dual-Audience Vision
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-navy">
              More Than A Debate: A Day of Ideas &amp; A Night of Music
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 px-2">
              A sponsorship reaches an educational audience and a cultural one, in a single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-off-white rounded-3xl border-l-[6px] border-blue shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-blue/10 text-blue font-bold text-xs uppercase mb-3">
                Part A · Daytime Programme
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-2">
                Debate Championship &amp; Prize-Giving
              </h3>
              <p className="text-xs text-muted mb-4 font-semibold">
                Until 5:30 PM · Educational &amp; Intellectual Engagement
              </p>
              <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                Participating schools, colleges, and madrasas across Uttara and greater Dhaka. Students, teachers, and coaches deeply engaged with public policy and rhetoric.
              </p>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-navy/5 text-xs text-muted space-y-1.5">
                <div><strong>Brand Association:</strong> Critical thinking, educational leadership, and civic empowerment.</div>
                <div><strong>Key Moments:</strong> Final debate on stage, trophy handover, VIP speeches.</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-off-white rounded-3xl border-l-[6px] border-gold shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold font-bold text-xs uppercase mb-3">
                Part B · Evening Programme
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-2">
                Live Music Festival
              </h3>
              <p className="text-xs text-muted mb-4 font-semibold">
                6:00 PM – 9:00 PM · Youth Entertainment &amp; Culture
              </p>
              <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                An energized audience of 2,000+ local youth and students celebrating Victory Day with prominent music acts, immersive sound, and celebratory festival lights.
              </p>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-navy/5 text-xs text-muted space-y-1.5">
                <div><strong>Brand Association:</strong> Youth culture, vibrant lifestyle, celebration, and energy.</div>
                <div><strong>Key Moments:</strong> Headline artist performances, LED loop, activation booths.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: Competition Structure & Scalable Knockout */}
      <section id="structure" className="px-4 sm:px-6 py-16 sm:py-20 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Tournament System
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-navy">
              Two Sections, One Championship
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto mt-3 px-2">
              Each section runs its own single-elimination bracket, sized to however many teams register.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* Junior Section */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-navy/5 relative overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-red/10 text-red font-bold text-lg sm:text-xl flex items-center justify-center mb-4">
                JR
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-1">
                Junior Section
              </h3>
              <div className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wider mb-4">
                Classes 8 · 9 · 10 (School Division)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-red font-bold">✔</span> Independent tournament bracket
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red font-bold">✔</span> Separate Grand Final on main stage on 16 December
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red font-bold">✔</span> Dedicated Champion, Runner-up &amp; Best Speaker awards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red font-bold">✔</span> Motion topics tailored to fundamental civic &amp; moral issues
                </li>
              </ul>
            </div>

            {/* Senior Section */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-navy/5 relative overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue/10 text-blue font-bold text-lg sm:text-xl flex items-center justify-center mb-4">
                SR
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-1">
                Senior Section
              </h3>
              <div className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wider mb-4">
                Classes 11 · 12 (College &amp; Higher Secondary)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold">✔</span> Independent college tournament bracket
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold">✔</span> High-intensity Asian Parliamentary Debate rounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold">✔</span> Prestigious Senior Champion &amp; Best Debater honours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold">✔</span> Complex policy, geopolitical, and economic motions
                </li>
              </ul>
            </div>
          </div>

          {/* Scalable Knockout Progression Diagram */}
          <div className="p-6 md:p-8 bg-navy text-white rounded-3xl shadow-xl">
            <h4 className="font-display text-lg sm:text-xl font-bold mb-2 text-gold">
              Knockout Progression Architecture
            </h4>
            <p className="text-xs text-muted-light mb-6">
              A single-elimination tournament structure ensuring merit-based advancement.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-0.5">Prelims</div>
                <div className="text-[10px] text-muted-light">If needed</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-0.5">Round of 32/16</div>
                <div className="text-[10px] text-muted-light">Early Knockout</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-0.5">Quarter-Finals</div>
                <div className="text-[10px] text-muted-light">Top 8 Teams</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-white mb-0.5">Semi-Finals</div>
                <div className="text-[10px] text-muted-light">Top 4 Teams</div>
              </div>
              <div className="p-3 rounded-xl bg-gold/20 border border-gold text-gold font-bold col-span-2 sm:col-span-1">
                <div>Grand Final</div>
                <div className="text-[10px] text-gold-light">16 Dec Stage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Event Calendar (Three days. One grand finale.) */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Event Calendar
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-navy">
              Three Days. One Grand Finale.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-off-white border border-navy/5">
              <div className="text-xs font-bold uppercase tracking-wider text-red mb-1">
                12 December 2026
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                Day 1 · Indoor Rounds
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Opening briefing, match draws, preliminary and early knockout rounds for both junior and senior sections across multiple auditoriums.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-off-white border border-navy/5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-light mb-1">
                13 December 2026
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                Day 2 · Indoor Rounds
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Remaining rounds and all semi-finals. Finalist teams confirmed, briefed, and announced for the Grand Finale stage.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-navy text-white shadow-lg border border-gold/40">
              <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">
                16 December 2026
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Day 3 · Grand Finale
              </h3>
              <p className="text-xs text-muted-light leading-relaxed">
                Public stage finals for both divisions, VIP prize ceremony, followed immediately by the Live Music Festival and concert celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Where Your Brand Shows Up */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-off-white border-y border-navy/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Multi-Channel Placement
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">
              Where Your Brand Shows Up
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-navy/5">
              <h3 className="font-display text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <span className="text-red">●</span> Part A · Daytime Debate Stage
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-muted">
                <li className="flex items-start gap-2"><strong>Main Stage &amp; LED:</strong> Prominent digital logo loops during live rounds.</li>
                <li className="flex items-start gap-2"><strong>Sponsor Branding Walls:</strong> Photo-op backdrops for delegates and VIPs.</li>
                <li className="flex items-start gap-2"><strong>Prize-Giving Recognition:</strong> Verbal appreciation &amp; certificate logos.</li>
                <li className="flex items-start gap-2"><strong>Live Stream &amp; Social:</strong> High-reach video streaming across Facebook and YouTube.</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-sm border border-navy/5">
              <h3 className="font-display text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <span className="text-gold">●</span> Part B · Evening Music Festival Stage
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-muted">
                <li className="flex items-start gap-2"><strong>Festival Stage &amp; LED:</strong> Dynamic concert visuals and brand placement.</li>
                <li className="flex items-start gap-2"><strong>Stage Mentions:</strong> Host announcements throughout band transitions.</li>
                <li className="flex items-start gap-2"><strong>Activation Stalls:</strong> On-ground experiential marketing and sales booths.</li>
                <li className="flex items-start gap-2"><strong>After-Movie:</strong> Featured branding in official 4K festival recap.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: All Seven Ways to Partner */}
      <section id="packages" className="px-4 sm:px-6 py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Seven Ways to Partner
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-navy">
              Sponsorship Packages
            </h2>
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 px-2">
              All 7 tiers calibrated to carry visibility across both the debate championship and live music festival.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  pkg.name === "Title Sponsor"
                    ? "bg-navy text-white lg:col-span-2 border-2 border-gold shadow-2xl relative"
                    : pkg.name === "Music Festival Partner"
                    ? "bg-gradient-to-br from-navy via-navy to-blue-light/30 text-white border border-blue-light/50"
                    : "bg-off-white border border-navy/10 text-navy"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">
                      {pkg.status}
                    </span>
                    <span className={`text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold ${
                      pkg.name === "Title Sponsor" || pkg.name === "Music Festival Partner"
                        ? "bg-white/10 text-white"
                        : "bg-navy/5 text-navy"
                    }`}>
                      Tier 0{i + 1}
                    </span>
                  </div>

                  <h3 className={`font-display text-xl sm:text-2xl font-bold mb-1 ${
                    pkg.name === "Title Sponsor" || pkg.name === "Music Festival Partner"
                      ? "text-white"
                      : "text-navy"
                  }`}>
                    {pkg.name}
                  </h3>

                  <div className={`font-display text-2xl sm:text-3xl font-extrabold mb-4 ${
                    pkg.name === "Title Sponsor" ? "text-gold" : ""
                  }`}>
                    {pkg.price}
                  </div>

                  <p className={`text-xs mb-6 leading-relaxed ${
                    pkg.name === "Title Sponsor" || pkg.name === "Music Festival Partner"
                      ? "text-muted-light"
                      : "text-muted"
                  }`}>
                    {pkg.summary}
                  </p>

                  <div className="h-px bg-current opacity-10 w-full mb-6" />

                  <ul className={`space-y-2.5 text-xs ${
                    pkg.name === "Title Sponsor" || pkg.name === "Music Festival Partner"
                      ? "text-muted-light"
                      : "text-muted"
                  }`}>
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={`mailto:contact@uttarayouthsociety.org?subject=Interest%20in%20${encodeURIComponent(pkg.name)}%20-%20UDC%202026`}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-full font-bold text-xs transition-all ${
                      pkg.name === "Title Sponsor"
                        ? "bg-gradient-to-r from-gold to-gold-light text-navy hover:scale-105 shadow-md shadow-gold/20"
                        : pkg.name === "Music Festival Partner"
                        ? "bg-blue-light text-white hover:bg-blue"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    Select {pkg.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Benefits Comparison Matrix (with Mobile Horizontal Scroll hint) */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-off-white border-t border-navy/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Compare Packages
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">
              Benefits at a Glance
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
            <p className="text-xs text-muted mt-3 md:hidden">
              ← Scroll horizontally to view all columns →
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-navy/5">
            <table className="w-full text-left text-xs md:text-sm min-w-[620px]">
              <thead>
                <tr className="border-b border-navy/10 text-navy font-bold">
                  <th className="py-3 px-3">Package</th>
                  <th className="py-3 px-3">Investment</th>
                  <th className="py-3 px-3">Debate Stage</th>
                  <th className="py-3 px-3">Festival Stage</th>
                  <th className="py-3 px-3">Ceremony Role</th>
                  <th className="py-3 px-3">Social Media</th>
                  <th className="py-3 px-3">Activation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5 text-muted">
                <tr className="bg-gold/5 font-semibold text-navy">
                  <td className="py-3.5 px-3">Title Sponsor</td>
                  <td className="py-3.5 px-3 font-bold text-gold">৳2,50,000</td>
                  <td className="py-3.5 px-3">Largest</td>
                  <td className="py-3.5 px-3">Prominent</td>
                  <td className="py-3.5 px-3">Address + Trophy</td>
                  <td className="py-3.5 px-3">Dedicated Series</td>
                  <td className="py-3.5 px-3">Premium Booth</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Music Festival Partner</td>
                  <td className="py-3.5 px-3 font-bold">৳1,50,000</td>
                  <td className="py-3.5 px-3">Logo</td>
                  <td className="py-3.5 px-3">Festival Naming</td>
                  <td className="py-3.5 px-3">Stage Mentions</td>
                  <td className="py-3.5 px-3">Festival Campaign</td>
                  <td className="py-3.5 px-3">Festival Arena</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Presenting Sponsor</td>
                  <td className="py-3.5 px-3 font-bold">৳1,25,000</td>
                  <td className="py-3.5 px-3">Prominent</td>
                  <td className="py-3.5 px-3">Logo</td>
                  <td className="py-3.5 px-3">Prize Distribution</td>
                  <td className="py-3.5 px-3">Promotional Posts</td>
                  <td className="py-3.5 px-3">Booth Space</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Platinum Sponsor</td>
                  <td className="py-3.5 px-3 font-bold">৳75,000</td>
                  <td className="py-3.5 px-3">Logo</td>
                  <td className="py-3.5 px-3">Logo</td>
                  <td className="py-3.5 px-3">Announced</td>
                  <td className="py-3.5 px-3">Featured Posts</td>
                  <td className="py-3.5 px-3">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Gold Sponsor</td>
                  <td className="py-3.5 px-3 font-bold">৳50,000</td>
                  <td className="py-3.5 px-3">Stage-side</td>
                  <td className="py-3.5 px-3">LED Loop</td>
                  <td className="py-3.5 px-3">Closing Mention</td>
                  <td className="py-3.5 px-3">Recognition Post</td>
                  <td className="py-3.5 px-3">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Silver Sponsor</td>
                  <td className="py-3.5 px-3 font-bold">৳25,000</td>
                  <td className="py-3.5 px-3">Flyer Logo</td>
                  <td className="py-3.5 px-3">—</td>
                  <td className="py-3.5 px-3">Acknowledgement</td>
                  <td className="py-3.5 px-3">Mention</td>
                  <td className="py-3.5 px-3">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-navy">Associate Sponsor</td>
                  <td className="py-3.5 px-3 font-bold">৳10,000</td>
                  <td className="py-3.5 px-3">Digital</td>
                  <td className="py-3.5 px-3">—</td>
                  <td className="py-3.5 px-3">Roll-call</td>
                  <td className="py-3.5 px-3">Group Mention</td>
                  <td className="py-3.5 px-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 11: Event Budget (Where ৳10,00,000 goes) */}
      <section id="budget" className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Fiscal Transparency
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-navy">
              Where ৳10,00,000 Goes
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto mt-3 px-2">
              A comprehensive budget covering complete tournament logistics and live music festival production.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="p-4 sm:p-6 rounded-2xl bg-off-white border border-navy/5">
              <div className="text-xl sm:text-2xl font-bold text-navy mb-1">20%</div>
              <div className="text-[11px] sm:text-xs font-bold text-gold uppercase tracking-wider mb-2">৳2,00,000</div>
              <div className="text-xs sm:text-sm font-semibold text-navy">Debate Operations</div>
              <div className="text-[10px] sm:text-xs text-muted mt-1">Awards, adjudicators &amp; tabs</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-off-white border border-navy/5">
              <div className="text-xl sm:text-2xl font-bold text-navy mb-1">20%</div>
              <div className="text-[11px] sm:text-xs font-bold text-blue-light uppercase tracking-wider mb-2">৳2,00,000</div>
              <div className="text-xs sm:text-sm font-semibold text-navy">Music Festival</div>
              <div className="text-[10px] sm:text-xs text-muted mt-1">Artist honorariums &amp; rider</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-off-white border border-navy/5">
              <div className="text-xl sm:text-2xl font-bold text-navy mb-1">38%</div>
              <div className="text-[11px] sm:text-xs font-bold text-green uppercase tracking-wider mb-2">৳3,80,000</div>
              <div className="text-xs sm:text-sm font-semibold text-navy">Shared Production</div>
              <div className="text-[10px] sm:text-xs text-muted mt-1">Venue, LED, sound &amp; lighting</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-off-white border border-navy/5">
              <div className="text-xl sm:text-2xl font-bold text-navy mb-1">22%</div>
              <div className="text-[11px] sm:text-xs font-bold text-red uppercase tracking-wider mb-2">৳2,20,000</div>
              <div className="text-xs sm:text-sm font-semibold text-navy">Hospitality &amp; Safety</div>
              <div className="text-[10px] sm:text-xs text-muted mt-1">Catering, security, contingency</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Integrity & Accountability */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-off-white border-t border-navy/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Governance Standards
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">
              Fair on Stage. Transparent Off It.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-sm">
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-3">
                Competition Integrity
              </h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                <li>• Independent adjudication core separate from organizers</li>
                <li>• 3 adjudicators per match where available</li>
                <li>• Matter, Manner, Method scoring with oral adjudications</li>
                <li>• Transparent draw &amp; publicly displayed tournament tab</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-sm">
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-3">
                Sponsor Accountability
              </h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                <li>• Every deliverable bound by written sponsorship contract</li>
                <li>• Official money receipts issued for all payments</li>
                <li>• Inclusion in audited post-event financial summary</li>
                <li>• Comprehensive post-event photo and media impact report</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-navy/5 shadow-sm sm:col-span-2 md:col-span-1">
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-3">
                Safety &amp; Discipline
              </h3>
              <ul className="space-y-2 text-xs text-muted leading-relaxed">
                <li>• Full venue security and crowd flow management</li>
                <li>• Strict zero-tolerance harassment &amp; safety code</li>
                <li>• On-site first-aid response team throughout the day</li>
                <li>• Punctual schedule adherence from morning to concert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Road to the Finale Timeline */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy">
              Timeline &amp; How to Partner
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue to-green mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              { date: "Early Nov", desc: "Event plan, committees, and sponsorship proposal finalised" },
              { date: "09–15 Nov", desc: "Corporate and institutional sponsor outreach" },
              { date: "10–25 Nov", desc: "Registration open to schools, colleges, and madrasas" },
              { date: "26–30 Nov", desc: "Participating 32+ teams confirmed and verified" },
              { date: "01–05 Dec", desc: "Draw brackets, preliminary scheduling, and adjudicator panel set" },
              { date: "12–13 Dec", desc: "Days 1 & 2 indoor knockout rounds for Junior & Senior sections" },
              { date: "16 Dec", desc: "Grand Finale debates, prize-giving, and live music festival" }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-off-white border border-navy/5">
                <div className="w-20 sm:w-24 flex-shrink-0 font-display font-bold text-navy text-xs sm:text-sm">
                  {step.date}
                </div>
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <div className="text-xs sm:text-sm text-muted">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section with Demo Atmospheric Dark Palette */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-navy-light text-white overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[300px] bg-gradient-to-r from-red via-blue-light to-gold rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="relative max-w-3xl mx-auto z-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold bg-white/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block mb-4">
            Empower Tomorrow&apos;s Leaders
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Partner With Uttara Debate Championship 2026
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-muted-light mb-8 sm:mb-10 font-light leading-relaxed px-2">
            Custom deliverables, category exclusivity, and CSR alignments can be discussed directly with our Secretariat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="mailto:contact@uttarayouthsociety.org?subject=Corporate%20Partnership%20Inquiry%20-%20Uttara%20Debate%20Championship%202026"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-gold/25 text-sm sm:text-base text-center"
            >
              Email Sponsorship Team
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 glass-card text-white font-semibold rounded-full hover:bg-white/15 transition-colors text-sm sm:text-base text-center"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Logo & 4-color strip */}
      <footer className="mt-auto bg-navy text-white">
        <div className="accent-bar">
          <span style={{ backgroundColor: "#E8222E" }}></span>
          <span style={{ backgroundColor: "#14A9F0" }}></span>
          <span style={{ backgroundColor: "#5BC22B" }}></span>
          <span style={{ backgroundColor: "#FFB414" }}></span>
        </div>
        <div className="px-6 py-10 sm:py-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Uttara Youth Society"
              width={36}
              height={36}
              className="object-contain"
            />
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-white">
                Uttara Youth Society – Debate Club
              </div>
              <p className="text-xs text-muted-light">
                Bengali Asian Parliamentary Debate · Uttara, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="text-xs text-muted-light">
            © 2026 Uttara Youth Society. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
