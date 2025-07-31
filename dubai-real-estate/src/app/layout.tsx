import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dubai Real Estate Expert | Premium Properties & Investment Opportunities",
  description: "Your trusted Dubai real estate consultant specializing in premium properties, top developers, and investment opportunities in Dubai's most sought-after locations.",
  keywords: "Dubai real estate, property investment, Dubai properties, real estate consultant, luxury properties Dubai",
  authors: [{ name: "Dubai Real Estate Expert" }],
  openGraph: {
    title: "Dubai Real Estate Expert | Premium Properties & Investment",
    description: "Discover Dubai's finest properties with expert guidance and exclusive access to top developers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
