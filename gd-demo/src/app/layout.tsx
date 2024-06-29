import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

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
        <main className="max-w-full mx-auto" >
          <Navbar />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
