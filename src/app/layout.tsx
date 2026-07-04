
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "TourWaze",
  description: "رزرو آنلاین تورهای داخلی و خارجی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
