import NavBar from "@/components/NavBar";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import BreadCrumbs from "@/components/BreadCrumbs";
export const metadata: Metadata = {
  title: "Thejus Rajendran | Product Designer",
  description:
    "A self taught product designer who is currently designing experiences for multiple client in an Design Agency called Flooid",
  keywords: [
    "Product Designer",
    "UI/UX Designer",
    "User Experience Designer",
    "User Interface Designer",
  ],
  creator: "Thejus Rajendran",
};

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.className}>
      <body className="bg-stone-900 text-stone-50 subpixel-antialiased">
        <NavBar />
        <BreadCrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
