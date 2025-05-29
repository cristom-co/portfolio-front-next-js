import type { Metadata } from "next";
import Script from 'next/script';
import { Viewport } from "next";
import { Manrope, Rubik } from 'next/font/google'
import "./globals.css";


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


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}


export const metadata: Metadata = {
  title: {
    default: 'Cristian Tombe - Full Stack Developer | Modern Web Solutions',
    template: '%s | Cristian Tombe'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and Node.js. I create modern, scalable web solutions for businesses and startups.',
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


const combinedFontClasses = `${manrope.variable} ${rubik.variable} font-sans`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={combinedFontClasses}>
        {children}
      </body>
    </html>
  );
}
