import localFont from "next/font/local";

const satoshi = localFont({
  src: "../fonts/satoshi.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const satoshiItalic = localFont({
  src: "../fonts/satoshi-italic.woff2",
  display: "swap",
  variable: "--font-satoshi-italic",
});

const inter = localFont({
  src: "../fonts/inter.woff2",
  display: "swap",
  variable: "--font-inter",
});

const interItalic = localFont({
  src: "../fonts/inter-italic.woff2",
  display: "swap",
  variable: "--font-inter-italic",
});

const geistMono = localFont({
  src: "../fonts/geist-mono.woff2",
  display: "swap",
  variable: "--font-geist-mono",
});

export { satoshi, satoshiItalic, inter, interItalic, geistMono };
