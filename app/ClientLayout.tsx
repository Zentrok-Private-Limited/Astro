'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Analytics } from '@vercel/analytics/next';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      
      {/* Everything below stays hidden/faded out until loading is complete */}
      <div 
        className={`flex min-h-dvh flex-col transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {!loading && (
          <>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </>
        )}
      </div>

      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}