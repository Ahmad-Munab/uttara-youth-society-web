import type { Metadata } from "next";
import { Bricolage_Grotesque, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-body",
  subsets: ["bengali", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Uttara Youth Society (UYS) | Empowering Youth. Serving Humanity. Strengthening Communities.",
  description:
    "Uttara Youth Society is a premier youth empowerment and student development organization in Uttara, Dhaka with 12+ years of community involvement.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFD] text-[#071B3A] font-sans selection:bg-[#FFC400]/40 selection:text-[#071B3A]">
        {children}
      </body>
    </html>
  );
}
