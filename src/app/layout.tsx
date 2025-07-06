
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AuthSessionProvider from "./session-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Agent Catalog",
  description: "Discover Your Ai Agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore a catalog of AI agents with filtering, search, and detailed views."
        />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Agent Catalog" />
        <meta
          property="og:description"
          content="Browse and discover AI agents with powerful capabilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >

        <AuthSessionProvider>
          <Providers>{children}</Providers>
        </AuthSessionProvider>


      </body>
    </html>
  );
}
