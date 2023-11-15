import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rutger van Rees",
  description: 'git commit -m "Hello, world!"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-bl from-charcoal via-gray-800 to-gray-700"
    >
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
