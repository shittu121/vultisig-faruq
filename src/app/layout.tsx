import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const myFont = localFont({
  src: '../../public/fonts/Brockmann-Regular.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-myfont',
});

export const metadata: Metadata = {
  title: "Vultisig",
  description: "Created By Faruq for Vultisig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
