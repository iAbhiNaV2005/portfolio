import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Mitra -- Full Stack Software Engineer",
  description:
    "Portfolio of Abhinav Mitra — Full Stack Software Engineer specializing in Java, Spring Boot, React, Next.js, AWS Serverless, and Autonomous AI RAG/MCP Agents.",
  keywords: [
    "Abhinav Mitra",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "AWS Serverless",
    "RAG",
    "Model Context Protocol",
  ],
  authors: [{ name: "Abhinav Mitra" }],
  openGraph: {
    title: "Abhinav Mitra -- Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building distributed backends, autonomous AI agents, and event-driven serverless cloud systems.",
    type: "website",
  },
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable} style={{ backgroundColor: "#0C0C0C" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased text-[#D7E2EA] bg-[#0C0C0C] min-h-screen selection:bg-[#B600A8] selection:text-white"
        style={{ overflowX: "clip" }}
      >
        <div id="root" style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
