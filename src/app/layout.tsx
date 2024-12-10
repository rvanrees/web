import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "I'm Rutger!",
  description: 'git commit -m "Goei\'n dag!" /wave',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative bg-charcoal">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
