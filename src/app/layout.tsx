import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
