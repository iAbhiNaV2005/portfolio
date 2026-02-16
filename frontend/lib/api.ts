/**
 * API helpers for communicating with the Express backend.
 * Falls back to http://localhost:4000 when NEXT_PUBLIC_API_URL is not set.
 */

const API =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:4000";

/* ---------- Love ---------- */

export async function getLoveCount(): Promise<{ count: number }> {
  const res = await fetch(`${API}/api/love`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch love count");
  return res.json();
}

export async function postLove(): Promise<{ count: number }> {
  const res = await fetch(`${API}/api/love`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to post love");
  return res.json();
}

/* ---------- Repo click tracking ---------- */

export async function postRepoClick(): Promise<{ repoClicks: number }> {
  const res = await fetch(`${API}/api/track/repo-click`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to track repo click");
  return res.json();
}

/* ---------- Contact ---------- */

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function postContact(
  data: ContactPayload
): Promise<{ ok: boolean }> {
  const res = await fetch(`${API}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || "Failed to send message");
  }
  return res.json();
}
