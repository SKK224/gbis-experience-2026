import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "GBIS — Solutions numériques pour les organisations africaines",
  description:
    "GBIS conçoit des logiciels intelligents pour accompagner la transformation numérique des organisations africaines.",
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/GBIS-icon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-slate-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}