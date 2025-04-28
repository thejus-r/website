import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, inter, satoshi } from "@/styles/fonts";
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
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} ${geistMono.variable} `}
    >
      <ReactLenis root>
        <body className="subpixel-antialiased">
          <Navigation />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
