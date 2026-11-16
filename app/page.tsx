import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      {/* 1. HERO SECTION with the "Light of Reason" Yellow Disc Motif */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:py-24 border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Big Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[8px] bg-[#E8EEF8] border border-[#D6DDEA] text-[#071B3A] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                <span>Uttara, Dhaka · 12+ Years of Community Involvement</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#071B3A] animate-hero-text">
                Empowering Youth.<br />
                Serving Humanity.<br />
                Strengthening Communities.
              </h1>

              <p className="text-lg sm:text-xl text-[#071B3A]/85 max-w-xl leading-relaxed font-normal">
                Uttara Youth Society creates meaningful platforms for students and young people to debate, lead, and contribute through intellectual competitions, student guidance, and humanitarian service.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/events/debate-2026#register"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-base shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071B3A]"
                >
                  Register for Debate 2026
                </Link>
                <Link
                  href="/activities"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-[8px] text-[#071B3A] hover:text-[#E31C2A] font-semibold text-base transition-colors"
                >
                  See our past work →
                </Link>
              </div>
            </div>

            {/* Right Column: Yellow Disc Motif & Editorial Media Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                {/* The "Light of Reason" Warm Yellow Disc */}
                <div
                  className="absolute w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full bg-[#FFC400] animate-disc -z-0 opacity-95 shadow-sm"
                  aria-hidden="true"
                />

                {/* Layered Composition in front of the disc */}
                <div className="relative z-10 w-full p-4 sm:p-6">
                  <div className="bg-white rounded-[24px] border border-[#D6DDEA] p-6 shadow-xl space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#D6DDEA] pb-4">
                      <div className="w-12 h-12 rounded-[8px] bg-[#E8EEF8] p-1.5 border border-[#D6DDEA] flex-shrink-0">
                        <Image
                          src="/logo.png"
                          alt="UYS Emblem"
                          width={44}
                          height={44}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-base text-[#071B3A] block">
                          Uttara Youth Society
                        </span>
                        <span className="bangla-slogan text-xs text-[#E31C2A] font-semibold block">
                          যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-[#071B3A]/80 leading-relaxed">
                      <p className="font-medium text-[#071B3A]">
                        A youth and student development organization dedicated to nurturing confident, knowledgeable, and socially responsible citizens.
                      </p>
                      <p className="text-xs text-[#071B3A]/60 pt-1">
                        Active programs across Debate, Humanitarian Relief, Education Mentorship, Sports, and Environmental Greening.
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#071B3A]">
                      <span className="px-2.5 py-1 rounded-[8px] bg-[#E8EEF8] border border-[#D6DDEA]">
                        Registration Active
                      </span>
                      <Link
                        href="/events/debate-2026"
                        className="text-[#E31C2A] hover:underline"
                      >
                        Debate 2026 Portal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEBATE 2026 FEATURE BAND (Full-Bleed Navy Contrast Rhythm) */}
      <section className="bg-[#071B3A] text-white py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-[8px] bg-[#E31C2A] text-white text-xs font-bold uppercase tracking-wider">
                  Live Event
                </span>
                <span className="bangla-slogan text-sm sm:text-base text-[#FFC400] font-semibold">
                  “যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী”
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white tracking-tight">
                Uttara Inter-School, College &amp; Madrasa Debate Championship 2026
              </h2>

              <p className="text-sm sm:text-base text-[#E8EEF8]/80 leading-relaxed max-w-2xl">
                The premier Bengali Asian Parliamentary Debate (3v3) championship in Uttara. Open to all recognized schools, colleges, and madrasas across Junior and Senior divisions.
              </p>

              {/* Event Data Meta Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs text-[#E8EEF8]/80">
                <div>
                  <span className="block text-[#FFC400] font-semibold uppercase tracking-wider">Format</span>
                  <span className="font-medium text-white text-sm">Asian Parliamentary</span>
                </div>
                <div>
                  <span className="block text-[#FFC400] font-semibold uppercase tracking-wider">Language</span>
                  <span className="font-medium text-white text-sm">Bengali (বাংলা)</span>
                </div>
                <div>
                  <span className="block text-[#FFC400] font-semibold uppercase tracking-wider">Divisions</span>
                  <span className="font-medium text-white text-sm">Junior &amp; Senior</span>
                </div>
                <div>
                  <span className="block text-[#FFC400] font-semibold uppercase tracking-wider">Venue</span>
                  <span className="font-medium text-white text-sm">Uttara, Dhaka</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <Link
                href="/events/debate-2026#register"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-sm shadow-sm transition-colors text-center"
              >
                Register Your Team
              </Link>
              <Link
                href="/events/debate-2026"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[8px] border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-colors text-center"
              >
                Tournament Guide &amp; Rules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO: Alternating Photo-Led Editorial Rows (No SaaS Cards) */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-[#071B3A]/80 mt-3 leading-relaxed">
              We operate across two complementary commitments: nurturing youth potential through intellectual platforms, and encouraging young people to contribute positively to their community.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Row 1: Debate & Public Speaking (Frame Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                {/* 24px photo frame with neutral editorial archive treatment */}
                <div className="relative rounded-[24px] border border-[#D6DDEA] bg-white p-6 shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] rounded-[16px] bg-[#E8EEF8] border border-[#D6DDEA] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-[8px] bg-white text-xs font-semibold text-[#071B3A] border border-[#D6DDEA]">
                        Speech &amp; Debate
                      </span>
                      <span className="text-xs text-[#071B3A]/60 font-medium">Archival Focus</span>
                    </div>
                    <div>
                      <p className="bangla-slogan text-lg font-bold text-[#071B3A] mb-1">
                        যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী
                      </p>
                      <p className="text-xs text-[#071B3A]/70">
                        Inter-School, College &amp; Madrasa Parliamentary Debate Series
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60">
                  Intellectual Development
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
                  Debate, Public Speaking &amp; Critical Reasoning
                </h3>
                <p className="text-base text-[#071B3A]/80 leading-relaxed max-prose-measure">
                  Confidence in expressing ideas is an essential skill for students and future leaders. UYS organizes inter-school and college debate tournaments under the Bengali Asian Parliamentary format, teaching young debaters to research rigorous motions, construct logical arguments, and express disagreement with mutual respect.
                </p>
                <div className="pt-2">
                  <Link
                    href="/events/debate-2026"
                    className="inline-flex items-center text-sm font-semibold text-[#E31C2A] hover:underline underline-offset-4"
                  >
                    Explore Debate Championship 2026 details
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Humanitarian Assistance & Disaster Relief (Text Left, Frame Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60">
                  Humanitarian Service
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
                  Winter Clothing Drives, Flood Relief &amp; Emergency Welfare
                </h3>
                <p className="text-base text-[#071B3A]/80 leading-relaxed max-prose-measure">
                  Alongside youth empowerment, UYS maintains a longstanding commitment to helping disadvantaged communities. During severe winters, student volunteers collect and distribute warm garments to vulnerable families. During flood emergencies, our volunteers mobilize dry rations and clean water for displaced households.
                </p>
                <div className="pt-2">
                  <Link
                    href="/activities"
                    className="inline-flex items-center text-sm font-semibold text-[#071B3A] hover:text-[#E31C2A] underline underline-offset-4"
                  >
                    View documented relief initiatives in the archive
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-[24px] border border-[#D6DDEA] bg-white p-6 shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] rounded-[16px] bg-[#E8EEF8] border border-[#D6DDEA] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-[8px] bg-white text-xs font-semibold text-[#071B3A] border border-[#D6DDEA]">
                        Community Relief
                      </span>
                      <span className="text-xs text-[#071B3A]/60 font-medium">Field Archive</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg text-[#071B3A] mb-1">
                        Grassroots Volunteer Action
                      </p>
                      <p className="text-xs text-[#071B3A]/70">
                        Seasonal winter drives, disaster flood parcels &amp; COVID-19 health support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Education, Sports & Environmental Sustainability (Frame Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-[24px] border border-[#D6DDEA] bg-white p-6 shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] rounded-[16px] bg-[#E8EEF8] border border-[#D6DDEA] p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-[8px] bg-white text-xs font-semibold text-[#071B3A] border border-[#D6DDEA]">
                        Youth &amp; Environment
                      </span>
                      <span className="text-xs text-[#071B3A]/60 font-medium">Uttara Programs</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg text-[#071B3A] mb-1">
                        Badminton, Cricket &amp; Tree Planting
                      </p>
                      <p className="text-xs text-[#071B3A]/70">
                        Inter-ward tournaments &amp; direct student sapling distributions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60">
                  Extracurricular Growth
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
                  Sports Tournaments, Career Guidance &amp; Urban Greening
                </h3>
                <p className="text-base text-[#071B3A]/80 leading-relaxed max-prose-measure">
                  Holistic student development requires activities beyond textbooks. We organize badminton and cricket tournaments that build camaraderie and fitness. We provide board examination guidance for SSC and HSC candidates, and lead tree plantation campaigns distributing saplings directly to school students.
                </p>
                <div className="pt-2">
                  <Link
                    href="/activities"
                    className="inline-flex items-center text-sm font-semibold text-[#071B3A] hover:text-[#E31C2A] underline underline-offset-4"
                  >
                    See sports tournaments and tree plantation records
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPACT 12+ YEARS TIMELINE STRIP */}
      <section className="py-16 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#071B3A]">
                12+ Years of Community Involvement
              </h2>
            </div>
            <Link
              href="/activities"
              className="text-sm font-semibold text-[#071B3A] hover:text-[#E31C2A] transition-colors"
            >
              Browse full archival gallery →
            </Link>
          </div>

          {/* Compact Timeline Strip with verified milestones only */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="text-xs font-bold text-[#E31C2A] block mb-1">Humanitarian Anchor</span>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Winter Clothing Distribution
              </h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Over a decade of seasonal drives providing warm garments and blankets to vulnerable community members in winter.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="text-xs font-bold text-[#071B3A] block mb-1">Emergency Service</span>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Flood Relief &amp; Health Support
              </h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Disaster relief packages for flood-affected families and handwashing/mask distribution during COVID-19.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="text-xs font-bold text-[#071B3A] block mb-1">Documented 2024</span>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Inter-Ward Badminton Tournament
              </h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Nearly 50 student participants from across Uttara wards competed in singles and doubles brackets.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA]">
              <span className="text-xs font-bold text-[#E31C2A] block mb-1">Flagship 2026</span>
              <h3 className="font-heading font-bold text-base text-[#071B3A] mb-1">
                Inter-School Debate Championship
              </h3>
              <p className="text-xs text-[#071B3A]/70 leading-relaxed">
                Bengali Asian Parliamentary tournament bringing together students from schools, colleges, and madrasas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHORT VOLUNTEER CALL-TO-ACTION */}
      <section className="py-16 bg-[#E8EEF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#071B3A] tracking-tight">
            Ready to lead or volunteer in your community?
          </h2>
          <p className="text-base text-[#071B3A]/80 max-w-xl mx-auto leading-relaxed">
            Students and young people in Uttara are invited to join our event committees, tournament teams, and community relief drives.
          </p>
          <div className="pt-2">
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white font-semibold text-sm transition-colors"
            >
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
