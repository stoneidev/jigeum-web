'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window.gtag === 'undefined') return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    window.gtag('config', GA_ID, {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}

