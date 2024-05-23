import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ganna Kovchyk: Aspiring React Developer with a Passion for Building User Interfaces",
  description:
    "Enthusiastic React developer eager to leverage my recent full-stack development training and problem-solving skills to create user-friendly interfaces. Seeking opportunities to learn and grow alongside experienced developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
