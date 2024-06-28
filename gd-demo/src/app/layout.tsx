import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gıda Dedektifi",
  description: "Ne yediğinizi bilin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-full mx-auto bg-[#0F1117]" >
          <Navbar />
          <Hero />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
