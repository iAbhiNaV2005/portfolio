import { Router, Request, Response } from "express";
import { incrementCounter } from "../db";

const router = Router();

/** POST /api/track/repo-click — track repo link clicks */
router.post("/repo-click", (_req: Request, res: Response) => {
  const repoClicks = incrementCounter("repo_clicks");
  res.json({ repoClicks });
});

export default router;
