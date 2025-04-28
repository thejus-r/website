import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      style: "normal",
      path: "../fonts/satoshi.woff2",
      weight: "100 900",
    },
    {
      style: "italic",
      path: "../fonts/satoshi-italic.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

const inter = localFont({
  src: [
    {
      style: "normal",
      path: "../fonts/inter.woff2",
      weight: "100 900",
    },
    {
      style: "italic",
      path: "../fonts/inter-italic.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/geist-mono.woff2",
  display: "swap",
  style: "mono",
  weight: "100 900",
  variable: "--font-geist-mono",
});

export { satoshi, inter, geistMono };
