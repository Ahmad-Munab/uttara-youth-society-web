import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-off-white selection:bg-gold/20 selection:text-navy">
      {/* 4-color Accent Bar from Demo */}
      <div className="accent-bar sticky top-0 z-50">
        <span style={{ backgroundColor: "#E8222E" }}></span>
        <span style={{ backgroundColor: "#14A9F0" }}></span>
        <span style={{ backgroundColor: "#5BC22B" }}></span>
        <span style={{ backgroundColor: "#FFB414" }}></span>
      </div>

      {/* Navigation Bar with Actual Logo */}
      <nav className="w-full px-6 py-3.5 flex items-center justify-between border-b border-navy/10 bg-white/75 backdrop-blur-md sticky top-[4px] z-40 transition-all">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-navy/10 bg-white p-0.5 group-hover:scale-105 transition-transform">
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
            <div className="font-display font-bold text-lg text-navy tracking-tight group-hover:text-gold transition-colors">
              Uttara Youth Society
            </div>
            <div className="text-[11px] text-muted font-medium tracking-wide">
              Debate Club · Est. Uttara, Dhaka
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium text-muted hover:text-navy transition-colors hidden sm:inline-block"
          >
            About Us
          </Link>
          <Link
            href="#pillars"
            className="text-sm font-medium text-muted hover:text-navy transition-colors hidden sm:inline-block"
          >
            Pillars
          </Link>
          <Link
            href="#impact"
            className="text-sm font-medium text-muted hover:text-navy transition-colors hidden md:inline-block"
          >
            Dual Impact
          </Link>
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
        </div>
      </nav>

      {/* Hero Section with Demo Atmospheric Dark Canvas */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-light text-white px-6 py-24 md:py-36">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-br from-blue-light/15 via-gold/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 right-[-50px] w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-slower" />

        {/* Geometric SVG Polygons & Concentric Rings from HTML demo */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 600"
        >
          <defs>
            <linearGradient id="hero-beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="120,0 240,0 40,600 -80,600" fill="url(#hero-beam)" />
          <polygon points="680,0 840,0 960,600 800,600" fill="url(#hero-beam)" opacity="0.6" />
          <g fill="none" stroke="#ffffff" strokeOpacity="0.08">
            <circle cx="500" cy="300" r="160" />
            <circle cx="500" cy="300" r="230" />
            <circle cx="500" cy="300" r="310" />
          </g>
        </svg>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Centered actual logo emblem with glowing glass container */}
          <div className="mx-auto mb-8 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-2xl flex items-center justify-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-blue-light to-green rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <Image
              src="/logo.png"
              alt="Uttara Youth Society"
              width={96}
              height={96}
              className="relative object-contain drop-shadow-md w-full h-full"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-xs font-semibold tracking-wider uppercase mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-ping" />
            <span>Where Ideas Meet, Voices Rise</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.08]">
            Uttara Youth <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold via-gold-light to-amber-200 bg-clip-text text-transparent">
              Society
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Nurturing leadership, articulation, and intellectual vigor through parliamentary debate and cultural synthesis across Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/debate-partnership"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-full shadow-lg shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Explore Debate Championship 2026
            </Link>
            <Link
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 glass-card text-white font-medium rounded-full hover:bg-white/15 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Quick Metrics Bar from HTML style */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                32+
              </div>
              <div className="text-xs text-muted-light uppercase tracking-wider font-semibold">
                Debate Teams
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl md:text-3xl font-display font-bold text-blue-light mb-1">
                2,000+
              </div>
              <div className="text-xs text-muted-light uppercase tracking-wider font-semibold">
                Live Attendees
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl md:text-3xl font-display font-bold text-green mb-1">
                2 Divisions
              </div>
              <div className="text-xs text-muted-light uppercase tracking-wider font-semibold">
                Junior &amp; Senior
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl md:text-3xl font-display font-bold text-gold mb-1">
                16 Dec
              </div>
              <div className="text-xs text-muted-light uppercase tracking-wider font-semibold">
                Grand Finale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy">
              Fostering Discourse in Bangladesh
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red via-blue-light to-gold mx-auto mt-4 rounded-full" />
          </div>

          <p className="text-muted text-lg md:text-xl leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            Uttara Youth Society is a premier platform dedicated to nurturing articulation, critical reasoning, and youth civic engagement. Through our competitive debate leagues, educational symposiums, and cultural festivals, we shape a vibrant community of tomorrow&apos;s changemakers.
          </p>

          <div id="pillars" className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-off-white rounded-3xl border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="w-1.5 h-12 bg-red rounded-full absolute left-0 top-8" />
              <div className="w-14 h-14 bg-red/10 rounded-2xl flex items-center justify-center mb-6 text-red text-2xl group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="font-display text-2xl text-navy mb-3 font-bold">
                Competitive Debate
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Mastering the Bengali Asian Parliamentary Debate format. Challenging the status quo on governance, ethics, technology, and culture.
              </p>
            </div>

            <div className="p-8 bg-off-white rounded-3xl border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="w-1.5 h-12 bg-blue-light rounded-full absolute left-0 top-8" />
              <div className="w-14 h-14 bg-blue-light/10 rounded-2xl flex items-center justify-center mb-6 text-blue-light text-2xl group-hover:scale-110 transition-transform">
                🎓
              </div>
              <h3 className="font-display text-2xl text-navy mb-3 font-bold">
                Youth Academics
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Workshops on rhetoric, public adjudication, research methodologies, and policy design led by seasoned national debaters.
              </p>
            </div>

            <div className="p-8 bg-off-white rounded-3xl border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="w-1.5 h-12 bg-green rounded-full absolute left-0 top-8" />
              <div className="w-14 h-14 bg-green/10 rounded-2xl flex items-center justify-center mb-6 text-green text-2xl group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="font-display text-2xl text-navy mb-3 font-bold">
                Leadership Network
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Uniting bright minds across schools, colleges, and universities in Uttara and greater Dhaka into a lasting fellowship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Impact Section: Intellect by Day, Culture by Night */}
      <section id="impact" className="px-6 py-20 bg-off-white border-y border-navy/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
              Dual-Audience Synergy
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy">
              Intellect by Day, Culture by Night
            </h2>
            <p className="text-muted text-sm md:text-base mt-2 max-w-2xl mx-auto">
              Our flagship model delivers two distinct opportunities in one landmark event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-navy/5 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue/10 text-blue font-bold flex items-center justify-center mb-4">
                01
              </div>
              <span className="text-xs font-bold text-blue tracking-wider uppercase mb-1 block">
                Part A · Daytime Programme
              </span>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                Debate Championship &amp; Prize-Giving
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Connect directly with serious academic talent, dedicated faculty, principals, coaches, and passionate youth leaders engaged in intense civic dialogue.
              </p>
              <ul className="space-y-2 text-xs text-muted font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-blue">✔</span> 32+ leading schools, colleges, and madrasas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue">✔</span> Independent adjudication &amp; national motions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue">✔</span> Formal grand auditorium finals &amp; awards
                </li>
              </ul>
            </div>

            <div className="p-8 bg-navy text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold font-bold flex items-center justify-center mb-4">
                02
              </div>
              <span className="text-xs font-bold text-gold tracking-wider uppercase mb-1 block">
                Part B · Evening Programme
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Live Music Festival
              </h3>
              <p className="text-muted-light text-sm leading-relaxed mb-6">
                A high-energy cultural evening drawing an audience of 2,000+ youth, students, and community families celebrating Victory Day together.
              </p>
              <ul className="space-y-2 text-xs text-muted-light font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✔</span> Celebrated youth bands &amp; headline artists
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✔</span> High-impact LED screens, lighting, and sound
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✔</span> Direct youth engagement &amp; lifestyle stalls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner for Championship */}
      <section className="px-6 py-16 bg-navy text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider mb-3">
              Upcoming Flagship Event
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Uttara Debate Championship <span className="text-gold">2026</span>
            </h3>
            <p className="text-muted-light text-base max-w-xl">
              Complete proposal with 7 sponsorship tiers, tournament structure, transparent budget breakdown, and competition integrity code.
            </p>
          </div>
          <Link
            href="/debate-partnership"
            className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-gold/20"
          >
            View Complete Proposal →
          </Link>
        </div>
      </section>

      {/* Footer with 4-color strip and clean copyright */}
      <footer className="mt-auto bg-navy text-white">
        <div className="accent-bar">
          <span style={{ backgroundColor: "#E8222E" }}></span>
          <span style={{ backgroundColor: "#14A9F0" }}></span>
          <span style={{ backgroundColor: "#5BC22B" }}></span>
          <span style={{ backgroundColor: "#FFB414" }}></span>
        </div>
        <div className="px-6 py-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Uttara Youth Society Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <div>
              <div className="font-display font-bold text-lg text-white">
                Uttara Youth Society
              </div>
              <p className="text-xs text-muted-light">
                Where Ideas Meet, Voices Rise. Uttara, Dhaka, Bangladesh.
              </p>
            </div>
          </div>
          <div className="text-xs text-muted-light">
            © 2026 Uttara Youth Society – Debate Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
