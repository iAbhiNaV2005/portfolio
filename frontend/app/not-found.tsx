import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Abhinav Mitra",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
      <p className="font-display text-7xl sm:text-9xl font-black font-mono text-text-muted/30 leading-none select-none tracking-tighter">
        404
      </p>

      <h1 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-4 mb-2">
        Page Not Found
      </h1>
      <p className="text-text-secondary max-w-md mb-8 text-xs sm:text-sm leading-relaxed">
        The requested resource does not exist. Navigate back to explore engineering projects and architecture blueprints.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-accent px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        ← Back to Homepage
      </Link>
    </div>
  );
}
