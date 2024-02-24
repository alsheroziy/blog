import type { Metadata } from "next";
import { Crete_Round, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})


export const metadata: Metadata = {
  title: "Shehroz dasturlashga oid maqolalar",
  description: "Dasturlashga oid so'nggi maqolalar, maslahatlar va qo'llanmalar. Bizning blog dasturlashni o'rganish va rivojlantirish uchun mo'ljallangan.",
};

function RootLayout({children}:ChildProps) {
  return (
    <html lang="en">
      <body className={`${creteRound.variable} ${workSans.variable}`} overflow-x-hidden>{children}</body>
    </html>
  );
}

export default RootLayout;