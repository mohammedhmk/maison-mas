import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from 'next/script';
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
      <body className="bg-dark text-cream antialiased">
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL48MZZF');
          `}
        </Script>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NL48MZZF"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
