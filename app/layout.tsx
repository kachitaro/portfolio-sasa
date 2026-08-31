import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const btBeauSans = localFont({
  src: [
    {
      path: "../public/fonts/BTBeauSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BTBeauSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BTBeauSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bt-beau-sans",
  display: "swap",
  preload: true,
  fallback: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

const btAbsinotte = localFont({
  src: [
    {
      path: "../public/fonts/BTAbsinotte-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/BTAbsinotte-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BTAbsinotte-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BTAbsinotte-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bt-absinotte",
  display: "swap",
  preload: true,
  fallback: ["var(--font-cormorant)", "Times New Roman", "Georgia", "serif"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sa Sa Nguyen — Portfolio @2026 | Graphic Design & UI/UX",
  description:
    "Portfolio of Sa Sa Nguyen — Graphic Design, UI/UX Design, and Creative Direction 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${btBeauSans.variable} ${btAbsinotte.variable} ${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#dedede] text-[#121212] selection:bg-[#121212] selection:text-[#f0eeea] overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
