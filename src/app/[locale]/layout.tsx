import type { Metadata } from "next";
import { Viewport } from "next";
import { Manrope, Rubik } from 'next/font/google'
import "./globals.css";

//*** Translations */
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


//*** Fonts */
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // elige los pesos que necesitas
  variable: '--font-manrope',   // nombre de la variable CSS
  display: 'swap',
})
const combinedFontClasses = `${manrope.variable} ${rubik.variable} font-sans`;


//*** Viewport */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

//*** Metadata */
export const metadata: Metadata = {
  
  title: {
    default: 'Cristian Tombe - Full Stack Developer | Modern Web Solutions',
    template: '%s | Cristian Tombe'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and Node.js. I create modern, scalable web solutions for businesses and startups.',
  icons: {
    icon: '/icons/programming.png',
  },
  keywords: [
    'full stack developer',
    'react developer',
    'nextjs developer',
    'web development',
    'cristian tombe',
    'javascript programmer',
    'frontend development',
    'backend development',
    'web designer',
    'software engineer'
  ],
  authors: [{ name: 'Cristian Tombe' }],
  creator: 'Cristian Tombe',
  publisher: 'Cristian Tombe',
  metadataBase: new URL('https://cristiantombe.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cristiantombe.com',
    title: 'Cristian Tombe - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js. Creating modern, scalable web solutions for businesses and startups.',
    siteName: 'Cristian Tombe Portfolio',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Cristian Tombe - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristian Tombe - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and Node.js.',
    images: ['/twitter-image.jpg'],
    creator: '@cristiantombe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  //todo: get verification codes from environment variables
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}


import Navbar from "./components/Navbar";
import WhatsappButton from "./components/oldComponents/WhatsappButton";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={combinedFontClasses}>
        <NextIntlClientProvider>
          <WhatsappButton />
          <Navbar currentLocale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
