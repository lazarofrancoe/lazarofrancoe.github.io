import "./globals.css";
import { Inter } from "next/font/google";
import React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder Landing Page",
  description: "Create your professional resume with our AI-powered tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
