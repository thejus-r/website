import type { Metadata } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import Navigation from "@/components/Navigation";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "Thejus Rajendran",
  description: "Product & Experience Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${satoshi.className} font-sans antialiased`}>
          <Navigation />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
