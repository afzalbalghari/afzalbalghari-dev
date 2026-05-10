import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Developer & DevOps Engineer",
  description:
    "Full-Stack Developer and DevOps Engineer specializing in React, Node.js, and AWS. Currently at Netzing Technology.",
  keywords: [
    "Full-Stack Developer",
    "DevOps Engineer",
    "React",
    "Next.js",
    "AWS",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Developer",
    description: "Full-Stack Developer & DevOps Engineer",
    type: "website",
    url: "https://yourname.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Developer",
    description: "Full-Stack Developer & DevOps Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} dark`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
