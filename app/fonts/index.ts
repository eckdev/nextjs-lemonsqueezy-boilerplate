import localFont from "next/font/local";
import { Inter as FontSans } from "next/font/google";

export const sfPro = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const inter = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
