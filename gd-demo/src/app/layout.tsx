import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Gıda Dedektifi - #NeYediğiniziBilin",
    template:"%s - Gıda Dedektifi"
  },
  description: "2017'den bu yana etiket okuyoruz, tüketici bilincini geliştirmeye ve farkındalığı arttırmaya çalışıyoruz. #NeYediğiniziBilin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-full mx-auto min-h-screen" >
          <Navbar />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
