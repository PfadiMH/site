import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const rockingsodaPlus = localFont({
  src: "./RockingsodaPlus-Regular.otf",
  variable: "--rockingsoda",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--poppins",
  display: "swap",
  subsets: ["latin"],
});
