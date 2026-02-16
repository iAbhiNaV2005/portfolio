/**
 * Simple JSON-file–based persistence.
 * Stores counters and messages in `data/db.json`.
 *
 * To swap to MongoDB:
 *   1. npm install mongodb
 *   2. Replace this module with a MongoDB client
 *   3. Use collections instead of JSON keys
 */

import fs from "fs";
import path from "path";

const DATA_DIR = path.join(__dirname, "..", "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

interface Message {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface DB {
  counters: Record<string, number>;
  messages: Message[];
}

function ensureDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function read(): DB {
  ensureDir();
  if (!fs.existsSync(DB_PATH)) {
    // Seed with initial love count of 42
    const initial: DB = {
      counters: { love_count: 42, repo_clicks: 0 },
      messages: [],
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function write(db: DB): void {
  ensureDir();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

/* ---------- Public API ---------- */

export function getCounter(key: string): number {
  const db = read();
  return db.counters[key] ?? 0;
}

export function incrementCounter(key: string): number {
  const db = read();
  db.counters[key] = (db.counters[key] ?? 0) + 1;
  write(db);
  return db.counters[key];
}

export function addMessage(msg: Omit<Message, "timestamp">): void {
  const db = read();
  db.messages.push({ ...msg, timestamp: new Date().toISOString() });
  write(db);
}

export function getStats(): { loveCount: number; repoClicks: number } {
  const db = read();
  return {
    loveCount: db.counters["love_count"] ?? 0,
    repoClicks: db.counters["repo_clicks"] ?? 0,
  };
}
