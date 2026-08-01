import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { company } from '@/lib/company';
import ClientLayout from './ClientLayout';
import './globals.css';
import FloatingCTA from "@/components/floatingCTA";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Vedic Astrology & Puja Services`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name} offers authentic Vedic astrology, online and in-person puja services, kundali matching, planetary remedies, meditation classes and more, guided by experienced priests.`,
  generator: 'v0.app',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#241b52',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${playfair.variable} ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        <ClientLayout>{children}

        </ClientLayout>
        <FloatingCTA />
      </body>
    </html>
  );
}