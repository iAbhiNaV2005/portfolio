import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Abhinav Mitra",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
      {/* Big 404 */}
      <p
        className="text-[120px] sm:text-[160px] font-black leading-none select-none"
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

      <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mt-2 mb-3">
        Page not found
      </h1>
      <p className="text-text-secondary max-w-sm mb-8">
        Looks like this page doesn&apos;t exist. It may have been moved or the URL is incorrect.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
