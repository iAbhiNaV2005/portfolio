/**
 * API helpers — Supabase for counters/tracking, Next.js API route for contact.
 */

import { supabase } from "./supabase";

/* ---------- Love ---------- */

export async function getLoveCount(): Promise<{ count: number }> {
  const { data, error } = await supabase
    .from("counters")
    .select("value")
    .eq("key", "love_count")
    .single();

  if (error || !data) throw new Error("Failed to fetch love count");
  return { count: data.value };
}

export async function postLove(): Promise<{ count: number }> {
  const { data, error } = await supabase.rpc("increment_counter", {
    counter_key: "love_count",
  });

  if (error) throw new Error("Failed to post love");
  return { count: data as number };
}

/* ---------- Repo click tracking ---------- */

export async function postRepoClick(): Promise<{ repoClicks: number }> {
  const { data, error } = await supabase.rpc("increment_counter", {
    counter_key: "repo_clicks",
  });

  if (error) throw new Error("Failed to track repo click");
  return { repoClicks: data as number };
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
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error || "Failed to send message"
    );
  }
  return res.json();
}
