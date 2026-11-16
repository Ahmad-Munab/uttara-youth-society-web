import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "About Us | Uttara Youth Society",
  description: "Mission, vision, and strategic areas of Uttara Youth Society in Uttara, Dhaka.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Debate & Public Speaking",
      desc: "Parliamentary debate championships, public speaking forums, and critical reasoning workshops under the slogan 'যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী'.",
    },
    {
      title: "Humanitarian Assistance",
      desc: "More than a decade of seasonal winter clothing drives, emergency disaster flood relief, and community welfare for disadvantaged families.",
    },
    {
      title: "Education & Career Guidance",
      desc: "Mentorship and career guidance for SSC and HSC examinees, paired with academic felicitations honoring graduating students.",
    },
    {
      title: "Sports & Extracurriculars",
      desc: "Badminton tournaments and cricket matches fostering discipline, physical fitness, teamwork, and healthy sportsmanship.",
    },
    {
      title: "Environmental Greening",
      desc: "Tree planting campaigns across neighborhood parks and public avenues, paired with sapling distribution directly to school students.",
    },
    {
      title: "Social Awareness",
      desc: "Community discussions and youth campaigns raising awareness against drug abuse and illicit trafficking.",
    },
  ];

  const values = [
    "Humanity & Compassion",
    "Youth Leadership",
    "Volunteerism",
    "Intellectual Rigor",
    "Integrity & Transparency",
    "Environmental Responsibility",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#071B3A]">
      <Navbar />

      {/* Header */}
      <section className="bg-white border-b border-[#D6DDEA] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#071B3A] tracking-tight">
              About Uttara Youth Society
            </h1>
            <p className="text-base sm:text-lg text-[#071B3A]/80 leading-relaxed">
              Empowering Youth. Serving Humanity. Strengthening Communities. A community-grounded organization active in Uttara, Dhaka for more than 12 years.
            </p>
          </div>
        </div>
      </section>

      {/* Central Philosophy */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#071B3A]">
                Nurturing Confident, Capable &amp; Socially Responsible Youth
              </h2>
              <p className="text-base text-[#071B3A]/80 leading-relaxed max-prose-measure">
                Uttara Youth Society (UYS) is primarily a youth and student development organization. Our central purpose is to create opportunities for students and young people to develop their intellectual abilities, communication skills, confidence, creativity, and capacity to contribute to society.
              </p>
              <p className="text-base text-[#071B3A]/80 leading-relaxed max-prose-measure">
                Education extends far beyond textbooks and examinations. Students need platforms to think critically, express themselves with courage, participate in constructive debate, work collectively in teams, and take active responsibility for their community.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[8px] border border-[#D6DDEA] space-y-5">
              <h3 className="font-heading font-bold text-lg text-[#071B3A] border-b border-[#D6DDEA] pb-3">
                Two Complementary Commitments
              </h3>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#E31C2A] uppercase tracking-wider block">
                  1. Developing Youth Potential
                </span>
                <p className="text-sm text-[#071B3A]/80 leading-relaxed">
                  Platforms for debate competitions, public speaking, quiz bowls, leadership, and career guidance.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#071B3A] uppercase tracking-wider block">
                  2. Encouraging Positive Social Contribution
                </span>
                <p className="text-sm text-[#071B3A]/80 leading-relaxed">
                  Involving students in humanitarian relief, winter clothing distribution, tree plantation, and community welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E31C2A] block">
                Our Vision
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#071B3A]">
                An Empowered, Educated Generation
              </h3>
              <p className="text-sm sm:text-base text-[#071B3A]/80 leading-relaxed">
                To develop a generation of confident, knowledgeable, intellectually capable, skilled, and socially conscious young people who can lead, innovate, and contribute meaningfully to building a progressive and compassionate society.
              </p>
            </div>

            <div className="p-8 rounded-[8px] bg-[#F8FAFD] border border-[#D6DDEA] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#071B3A] block">
                Our Mission
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#071B3A]">
                Practical Empowerment Through Action
              </h3>
              <p className="text-sm sm:text-base text-[#071B3A]/80 leading-relaxed">
                To empower students and young people through educational, intellectual, extracurricular, and leadership development activities that strengthen their confidence, skills, and ability to serve their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-[#D6DDEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#071B3A]">
              Areas of Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <div key={idx} className="p-6 rounded-[8px] bg-white border border-[#D6DDEA] space-y-2">
                <h3 className="font-heading font-bold text-lg text-[#071B3A]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#071B3A]/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-6">
            <h2 className="font-heading font-bold text-2xl text-[#071B3A]">
              Our Guiding Principles
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {values.map((v, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-[8px] bg-[#E8EEF8] text-[#071B3A] text-xs font-semibold border border-[#D6DDEA]"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#D6DDEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#071B3A]/70">
              Interested in collaborating or participating in our student initiatives?
            </p>
            <Link
              href="/volunteer"
              className="inline-flex items-center px-6 py-2.5 rounded-[8px] bg-[#071B3A] hover:bg-[#0E2A59] text-white text-xs font-semibold transition-colors"
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
