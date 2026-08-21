"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { postContact } from "@/lib/api";
import type { ContactPayload } from "@/lib/api";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      await postContact(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to deliver message.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border/80 bg-surface/60 px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:bg-surface focus:outline-none transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
          placeholder="e.g. Alex Mercer"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="alex@company.com"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          Project Details / Inquiry
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your goals, timelines, or role opportunities..."
          disabled={status === "sending"}
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:bg-accent-hover disabled:opacity-50 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          <CheckCircleIcon className="h-5 w-5 shrink-0" />
          <span>Message sent successfully! I will reply to you as soon as possible.</span>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm font-medium text-rose-600 dark:text-rose-400"
        >
          <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
          <span>{errorMsg}</span>
        </motion.div>
      )}
    </form>
  );
}
