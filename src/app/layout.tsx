import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alwin Eldhose - Portfolio",
  description: "Full-Stack Developer Portfolio of Alwin Eldhose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-black text-white`}>
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
