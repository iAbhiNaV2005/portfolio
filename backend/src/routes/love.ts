import { Router, Request, Response } from "express";
import { getCounter, incrementCounter } from "../db";

const router = Router();

/** GET /api/love — fetch current love count */
router.get("/", (_req: Request, res: Response) => {
  const count = getCounter("love_count");
  res.json({ count });
});

/** POST /api/love — increment love count */
router.post("/", (_req: Request, res: Response) => {
  const count = incrementCounter("love_count");
  res.json({ count });
});

export default router;
