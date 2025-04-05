import type { Metadata } from "next";
import Head from "next/head";

import { Manrope, Rubik } from 'next/font/google'

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


import "./globals.css";


export const metadata: Metadata = {
  title: "Cristian Tombe - Front-end Developer",
  description: "Front-end Developer",
};

const combinedFontClasses = `${manrope.variable} ${rubik.variable} font-sans`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={combinedFontClasses}>
        {children}
      </body>
    </html>
  );
}
