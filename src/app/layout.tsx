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
    <html lang="en" className="relative">
      <body className={font.className}>
        <div className="absolute inset-0 bg-cover bg-center">
          <img
            src="/img.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal bg-opacity-95"></div>
        <div className="relative">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
