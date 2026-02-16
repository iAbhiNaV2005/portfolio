import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorParticles from "@/components/CursorParticles";

export const metadata: Metadata = {
  title: "Abhinav Mitra — Portfolio",
  description:
    "Full Stack Developer • Cloud Computing • Low Level System Design. Portfolio of Abhinav Mitra.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <CursorParticles />
        <Header />
        <main className="relative z-10 min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
