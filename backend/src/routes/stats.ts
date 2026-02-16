import { Router, Request, Response } from "express";
import { getStats } from "../db";

const router = Router();

/** GET /api/stats — admin endpoint for all counters */
router.get("/", (_req: Request, res: Response) => {
  res.json(getStats());
});

export default router;
