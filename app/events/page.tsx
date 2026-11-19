import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Events & Competitions | Uttara Youth Society",
  description: "Official student championships, debate tournaments, and educational forums in Uttara, Dhaka.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              Events &amp; Tournaments
            </h1>
            <p className="text-base sm:text-lg text-[#071B3A]/80 leading-relaxed">
              Student competitions, intellectual championships, and youth forums organized by Uttara Youth Society.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Active Tournament Index */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31C2A]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#071B3A]">
                Active Championship
              </h2>
            </div>

            {/* Large Featured Event Card */}
            <div className="bg-white rounded-[16px] border border-[#D6DDEA] p-8 sm:p-10 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-[8px] bg-[#E31C2A] text-white text-xs font-bold uppercase tracking-wider">
                  Registration Open
                </span>
                <span className="text-xs font-semibold text-[#071B3A]/60">
                  Uttara, Dhaka · All Recognized Institutions
                </span>
              </div>

              <div>
                <p className="bangla-slogan text-base sm:text-lg font-bold text-[#E31C2A] mb-1">
                  “যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী”
                </p>
                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#071B3A] tracking-tight leading-tight">
                  Uttara Inter-School, College &amp; Madrasa Debate Championship 2026
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#071B3A]/80 leading-relaxed max-w-2xl">
                The flagship Bengali Asian Parliamentary Debate (3v3) tournament uniting school, college, and madrasa debaters. Featuring independent national adjudication, awards, trophies, and participation certificates for all registered speakers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-[#D6DDEA] text-xs text-[#071B3A]">
                <div>
                  <span className="block text-[#071B3A]/60 font-semibold uppercase tracking-wider">Format</span>
                  <span className="font-bold text-sm">Asian Parliamentary</span>
                </div>
                <div>
                  <span className="block text-[#071B3A]/60 font-semibold uppercase tracking-wider">Language</span>
                  <span className="font-bold text-sm">Bengali (বাংলা)</span>
                </div>
                <div>
                  <span className="block text-[#071B3A]/60 font-semibold uppercase tracking-wider">Divisions</span>
                  <span className="font-bold text-sm">Junior &amp; Senior</span>
                </div>
                <div>
                  <span className="block text-[#071B3A]/60 font-semibold uppercase tracking-wider">Venue</span>
                  <span className="font-bold text-sm">Uttara Central Hall</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/events/debate-2026#register"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white font-semibold text-sm transition-colors text-center"
                >
                  Register Team Online
                </Link>
                <Link
                  href="/events/debate-2026"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[8px] border border-[#071B3A] hover:bg-[#E8EEF8] text-[#071B3A] font-semibold text-sm transition-colors text-center"
                >
                  View Tournament Guide
                </Link>
              </div>
            </div>

            {/* Other Documented Events & Community Screenings */}
            <div className="pt-10 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#071B3A]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#071B3A]">
                  Community Screenings &amp; Tournaments
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event 1: FIFA World Cup Live Screening */}
                <div className="bg-white rounded-[16px] border border-[#D6DDEA] overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-[#071B3A]">
                      <Image
                        src="/images/activities/hero-screening.jpg"
                        alt="FIFA World Cup 2026 Live Screening"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/85 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#071B3A]/90 backdrop-blur-xs px-2.5 py-1 rounded-[6px] border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                        Public Community Festival
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <p className="bangla-slogan text-xs font-bold text-[#E31C2A]">
                        “ফিফা ওয়ার্ল্ড কাপ ২০২৬ মুগ্ধ মঞ্চ — সকলের জন্য উন্মুক্ত”
                      </p>
                      <h3 className="font-heading font-bold text-xl text-[#071B3A]">
                        FIFA World Cup 2026 Live Screening
                      </h3>
                      <p className="text-xs text-[#071B3A]/60 font-medium">
                        📍 Uttara Public Venue · Open to All Residents
                      </p>
                      <p className="text-sm text-[#071B3A]/80 leading-relaxed pt-1">
                        Massive open-air live match screening festival bringing football enthusiasts and youth together in an electric, respectful community celebration.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/activities"
                      className="inline-flex items-center text-xs font-semibold text-[#071B3A] hover:text-[#E31C2A] transition-colors"
                    >
                      View in Activities Gallery →
                    </Link>
                  </div>
                </div>

                {/* Event 2: Cricket Tournament */}
                <div className="bg-white rounded-[16px] border border-[#D6DDEA] overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-[#071B3A]">
                      <Image
                        src="/images/activities/cricket-tournament.jpg"
                        alt="Independence Day Cricket Tournament"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/85 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#071B3A]/90 backdrop-blur-xs px-2.5 py-1 rounded-[6px] border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                        Youth Sports Tournament
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#071B3A]/60">
                        Annual Athletics Meet
                      </p>
                      <h3 className="font-heading font-bold text-xl text-[#071B3A]">
                        Independence Day Cricket Championship
                      </h3>
                      <p className="text-xs text-[#071B3A]/60 font-medium">
                        📍 Uttara Sector Grounds · Student Teams
                      </p>
                      <p className="text-sm text-[#071B3A]/80 leading-relaxed pt-1">
                        Inter-ward cricket tournament arranged by Uttara Youth Society promoting physical fitness, discipline, and sportsmanship among youth.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/activities"
                      className="inline-flex items-center text-xs font-semibold text-[#071B3A] hover:text-[#E31C2A] transition-colors"
                    >
                      View in Activities Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
