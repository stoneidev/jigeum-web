import type { Metadata } from "next";
import Script from "next/script";
import { VercelToolbar } from "@vercel/toolbar/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "지금 | K-Beauty 트렌드",
  description: "지금 가장 핫한 K-Beauty 트렌드와 제품을 만나보세요. 한국 화장품, 스킨케어, 메이크업 정보를 제공합니다.",
  keywords: ["K-Beauty", "한국 화장품", "스킨케어", "메이크업", "뷰티 트렌드"],
  openGraph: {
    title: "지금 | K-Beauty 트렌드",
    description: "지금 가장 핫한 K-Beauty 트렌드와 제품을 만나보세요.",
    url: "https://jigeum.today",
    siteName: "지금",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "지금 | K-Beauty 트렌드",
    description: "지금 가장 핫한 K-Beauty 트렌드와 제품을 만나보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jigeum.today",
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
        {children}
        {process.env.NODE_ENV === 'development' && <VercelToolbar />}
      </body>
    </html>
  );
}
