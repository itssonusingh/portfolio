import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${profile.name} | CFD / Thermal-Fluid Engineer`,
  description:
    "CFD / Thermal-Fluid Engineer with an IIT M.Tech background specializing in CFD, thermal analysis, fluid mechanics, heat transfer, and numerical simulation.",
  openGraph: {
    title: `${profile.name} | CFD / Thermal-Fluid Engineer`,
    description:
      "CFD / Thermal-Fluid Engineer with an IIT M.Tech background specializing in CFD, thermal analysis, fluid mechanics, heat transfer, and numerical simulation.",
    type: "website",
    images: [profile.photo],
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
