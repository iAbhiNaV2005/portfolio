import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import loveRouter from "./routes/love";
import trackRouter from "./routes/track";
import contactRouter from "./routes/contact";
import statsRouter from "./routes/stats";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

/* ---------- Middleware ---------- */

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "100kb" }));

// Rate-limit POST endpoints
const postLimiter = rateLimit({
  windowMs: (Number(process.env.RATE_LIMIT_WINDOW_MIN) || 60) * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

/* ---------- Routes ---------- */

app.use("/api/love", loveRouter);
app.use("/api/track", trackRouter);
app.use("/api/contact", postLimiter, contactRouter);
app.use("/api/stats", statsRouter);

// Health check
app.get("/api/health", (_req, res) => res.json({ ok: true }));

/* ---------- Start ---------- */

app.listen(PORT, () => {
  console.log(`✓ Backend running on http://localhost:${PORT}`);
});

export default app;
