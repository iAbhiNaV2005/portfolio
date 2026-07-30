import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client (uses same public keys — RLS handles security)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  // ── Validate ──────────────────────────────────────────
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields (name, email, message) are required." },
      { status: 400 }
    );
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid field types." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  // ── Store in Supabase ─────────────────────────────────
  const { error: dbError } = await supabase.from("messages").insert({
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
  });

  if (dbError) {
    console.error("Supabase insert failed:", dbError);
    return NextResponse.json(
      { error: "Failed to store message." },
      { status: 500 }
    );
  }

  // ── Send SMTP email ───────────────────────────────────
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || process.env.SMTP_USER,
        subject: `New message from ${trimmedName}`,
        text: `From: ${trimmedName} <${trimmedEmail}>\n\n${trimmedMessage}`,
      });
    } catch (err) {
      console.error("SMTP send failed:", err);
      // Don't fail the request — message is already stored in Supabase
    }
  }

  return NextResponse.json({ ok: true });
}
