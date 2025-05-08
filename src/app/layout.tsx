import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, inter, satoshi } from "@/styles/fonts";
import Navigation from "@/components/Navigation";
import { ReactLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://thejus.design"),
  title: "Thejus Rajendran",
  description: "Product & Experience Designer",
  openGraph: {
    images: "/og-image.png",
  },
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
        <ViewTransitions>
          <body className="subpixel-antialiased flex flex-col">
            <Navigation />
            <div className="flex-1">{children}</div>
            <Footer />
          </body>
        </ViewTransitions>
      </ReactLenis>
    </html>
  );
}
