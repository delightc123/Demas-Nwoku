import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

// Viewport configuration for proper mobile rendering
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#060608',
};

// Local font: New Culture (for headings - per Summary.md)
const newCulture = localFont({
  src: [
    {
      path: '../../public/fonts/NewCulture-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-new-culture',
  display: 'swap',
  fallback: ['Playfair Display', 'Georgia', 'serif'],
});

// Local font: Apfel Grotezk (for body text)
const apfelGrotezk = localFont({
  src: [
    {
      path: '../../public/fonts/ApfelGrotezk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApfelGrotezk-RegularBrukt.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-apfel',
  display: 'swap',
  fallback: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

// Google Fonts fallbacks
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MKPUGHE | His Roots, His Heartbeat, His Legacy',
  description: 'An exhibition honoring Demas Nwoko - vernacular as the natural language of design. A project by The Legacy Initiative.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newCulture.variable} ${apfelGrotezk.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
