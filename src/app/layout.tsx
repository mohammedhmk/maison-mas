import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison MAS — The Capsule Collection",
  description:
    "An exclusive capsule collection of five meticulously crafted abayas. Experience silent luxury by Maison MAS.",
  keywords: ["abaya", "luxury", "Saudi fashion", "Maison MAS", "capsule collection"],
  openGraph: {
    title: "Maison MAS — The Capsule Collection",
    description: "Five exclusive abayas. Silent luxury, redefined.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="ltr" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-dark text-cream antialiased">{children}</body>
    </html>
  );
}
