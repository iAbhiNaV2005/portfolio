import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Abhinav Mitra",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
      {/* Big 404 display */}
      <p
        className="font-display text-[110px] sm:text-[150px] font-black leading-none select-none tracking-tighter"
        style={{
          backgroundImage: "linear-gradient(270deg, #6366f1, #a855f7, #ec4899, #6366f1)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 4s ease-in-out infinite",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </p>

      <h1 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-2 mb-3">
        Page Not Found
      </h1>
      <p className="text-text-secondary max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        The requested page does not exist or has been moved. Return back to explore the portfolio.
      </p>

      <Link
        href="/"
        className="rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
      >
        ← Back to Homepage
      </Link>
    </div>
  );
}
