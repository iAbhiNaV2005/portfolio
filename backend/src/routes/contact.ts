import { Router, Request, Response } from "express";
import { addMessage } from "../db";
import nodemailer from "nodemailer";

const router = Router();

/** POST /api/contact — validate, store, and optionally email */
router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Validate
  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields (name, email, message) are required." });
    return;
  }
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    res.status(400).json({ error: "Invalid field types." });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  // Store
  addMessage({ name: name.trim(), email: email.trim(), message: message.trim() });

  // Optionally send email via SMTP
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
        subject: `New message from ${name.trim()}`,
        text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
      });
    } catch (err) {
      console.error("SMTP send failed:", err);
      // Don't fail the request — message is already stored
    }
  }

  res.json({ ok: true });
});

export default router;
