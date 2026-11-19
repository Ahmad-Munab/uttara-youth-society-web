import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white mt-auto border-t border-[#040F22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-white p-1 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Uttara Youth Society"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white block">
                  Uttara Youth Society
                </span>
                <span className="bangla-slogan text-xs text-[#FFC400] font-medium block">
                  যুক্তির আলোয় প্রোজ্জ্বলিত হোক তারুণ্যের পৃথিবী
                </span>
              </div>
            </div>

            <p className="text-[15px] text-[#E8EEF8]/80 leading-relaxed max-w-md">
              A community-grounded youth development and social welfare organization with more than 12 years of continuous involvement in Uttara, Dhaka. Developing youth potential and encouraging positive community action.
            </p>

            <div className="pt-2">
              <Link
                href="/events/debate-2026#register"
                className="inline-flex items-center px-4 py-2 rounded-[8px] bg-[#E31C2A] hover:bg-[#C71420] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                Debate 2026 Registration Open
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FFC400]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E8EEF8]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events/debate-2026" className="hover:text-white transition-colors">
                  Debate Championship 2026
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">
                  Past Activities Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  All Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Organization
                </Link>
              </li>
              <li>
                <Link href="/member" className="hover:text-white transition-colors">
                  Member Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FFC400]">
              Verified Contact
            </h4>
            <div className="space-y-2.5 text-sm text-[#E8EEF8]/80">
              <p className="flex items-start gap-2.5">
                <span className="text-[#FFC400] font-bold">Location</span>
                <span>House 76, Road 16, Sector 14, Uttara, Dhaka</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="text-[#FFC400] font-bold">Social</span>
                <a
                  href="https://www.facebook.com/uttara.ys"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline underline-offset-2 font-medium"
                >
                  Official Facebook Page
                </a>
              </p>
            </div>
            <div className="p-3.5 rounded-[8px] bg-white/5 border border-white/10 text-xs text-[#E8EEF8]/70 mt-3">
              Independent youth and student organization. Over 12 years of local community service in Uttara.
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EEF8]/60">
          <p>© 2026 Uttara Youth Society (UYS). All rights reserved.</p>
          <p className="bangla-slogan text-[#FFC400]/80">
            Empowering Youth. Serving Humanity. Strengthening Communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
