import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ActiveLinkProvider } from "@/context/useActiveLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riskli - Digital Risk Management Platform",
  description:
    "Riskli empowers businesses to assess, manage, and mitigate digital risks with advanced analytics and intuitive tools. Secure your digital future with Riskli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        suppressHydrationWarning={true}
      >
        <ActiveLinkProvider>
          {/* Full-width Top Blue Curve Background */}
          <svg
            className="fixed top-0 left-0 w-full h-[180px] md:h-[260px] lg:h-[320px] z-0"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ pointerEvents: "none" }}
          >
            <path
              d="M0,0 Q900,0 1440,120 Q1440,0 1440,0 L0,0 Z"
              fill="#4FC3F7"
              fillOpacity="1"
            />
          </svg>
          <div className="relative z-10">{children}</div>
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
