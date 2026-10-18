import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Mitra — Full Stack Software Engineer | Spring Boot, React, AWS",
  description:
    "Portfolio of Abhinav Mitra — Full Stack Software Engineer specializing in Java, Spring Boot, React, Next.js, and AWS Serverless systems. Delhi, India (Open to Relocate).",
  keywords: [
    "Abhinav Mitra",
    "Full Stack Software Engineer",
    "Java Spring Boot",
    "React",
    "Next.js",
    "AWS Serverless",
    "RAG",
    "Model Context Protocol",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${outfit.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-[100dvh] selection:bg-accent selection:text-white bg-bg text-text-primary relative overflow-x-hidden">
        {/* Grain Noise Overlay for Tactile Depth (Pointer events none) */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Ambient Top Mesh Glow */}
        <div className="ambient-glow-top" aria-hidden="true" />

        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="relative z-10 flex-1 flex flex-col pt-24 sm:pt-28">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
