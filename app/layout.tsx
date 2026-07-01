import { Geist, Geist_Mono } from "next/font/google";

import { AppShell } from "@/components/layout";
import { siteConfig } from "@/config/site";

import "./globals.css";

export { defaultMetadata as metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full font-sans antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-[length:var(--ask18-body-size)] leading-[var(--ask18-body-leading)] text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
