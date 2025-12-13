import type { Metadata } from "next";
import Script from "next/script";
import { VercelToolbar } from "@vercel/toolbar/next";
import JsonLd from "./components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jigeum | Best K-Beauty Products & Korean Skincare Trends 2025",
  description: "Discover the hottest K-Beauty trends and top-rated Korean skincare products. COSRX Snail Mucin, Beauty of Joseon, Anua, TIRTIR & more. Curated by experts.",
  keywords: ["K-Beauty", "Korean skincare", "COSRX", "Beauty of Joseon", "snail mucin", "glass skin", "Korean beauty products", "K-Beauty trends 2025", "best Korean skincare", "Anua", "TIRTIR", "Laneige"],
  openGraph: {
    title: "Jigeum | Best K-Beauty Products & Korean Skincare Trends 2025",
    description: "Discover the hottest K-Beauty trends and top-rated Korean skincare products. COSRX, Beauty of Joseon, Anua & more.",
    url: "https://jigeum.today",
    siteName: "Jigeum",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jigeum.today/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jigeum - K-Beauty Magazine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jigeum | Best K-Beauty Products & Korean Skincare Trends 2025",
    description: "Discover the hottest K-Beauty trends and top-rated Korean skincare products.",
    images: ["https://jigeum.today/og-image.png"],
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
  alternates: {
    canonical: "https://jigeum.today",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        <JsonLd />
        {children}
        {process.env.NODE_ENV === 'development' && <VercelToolbar />}
      </body>
    </html>
  );
}
