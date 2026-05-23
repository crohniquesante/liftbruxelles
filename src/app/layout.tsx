import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  webSiteSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title =
  "Location Lift Bruxelles | Monte-Meuble & Lift Déménagement — Lift & Go";
const description =
  "Location de lift à Bruxelles dès 290€. Monte-meuble professionnel, lift déménagement dans les 19 communes. Devis gratuit sous 2h ☎ 02 808 45 60. Opérateurs certifiés.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "lift bruxelles",
    "location lift bruxelles",
    "monte meuble bruxelles",
    "lift déménagement bruxelles",
    "location lift déménagement",
    "monte-meuble bruxelles",
    "lift extérieur bruxelles",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Location lift Bruxelles — Lift & Go Bruxelles",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-verification-code",
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE" className={inter.variable}>
      <body className={`${inter.className} pb-20 lg:pb-0`}>
        <JsonLd
          data={[
            webSiteSchema(),
            localBusinessSchema(),
            faqSchema(),
            breadcrumbSchema(),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
