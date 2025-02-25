import { Inter, Roboto, Roboto_Mono } from "next/font/google";

export const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["vietnamese"],
  weight: "400",
});

export const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["vietnamese"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})
