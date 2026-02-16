/**
 * Semantic color tokens for the portfolio theme.
 * Currently dark-only. To flip to light, swap values here.
 */
export const colors = {
  bg: "#0b0f14",
  surface: "#131920",
  surfaceHover: "#1a2230",
  muted: "#1e2730",
  border: "#2a3444",
  textPrimary: "#e4e8ef",
  textSecondary: "#8b98a9",
  textMuted: "#5c6b7d",
  accent: "#6366f1",
  accentHover: "#818cf8",
  accentGlow: "rgba(99, 102, 241, 0.25)",
  success: "#22c55e",
  error: "#ef4444",
  heart: "#f43f5e",
} as const;

export type ThemeColor = keyof typeof colors;
