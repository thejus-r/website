import localFont from "next/font/local";

const satoshi = localFont({
  src: "../fonts/satoshi.woff2",
  display: "swap",
});

const satoshiItalic = localFont({
  src: "../fonts/satoshi-italic.woff2",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter.woff2",
  display: "swap",
});

const interItalic = localFont({
  src: "../fonts/inter-italic.woff2",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/geist-mono.woff2",
  display: "swap",
});

export { satoshi, satoshiItalic, inter, interItalic, geistMono };
