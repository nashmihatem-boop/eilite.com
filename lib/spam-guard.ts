const MIN_HUMAN_FILL_TIME_MS = 2000;

export function isLikelySpam({ honeypot, elapsedMs }: { honeypot?: unknown; elapsedMs?: unknown }): boolean {
  const honeypotFilled = typeof honeypot === "string" && honeypot.trim().length > 0;
  const tooFast = typeof elapsedMs === "number" && elapsedMs >= 0 && elapsedMs < MIN_HUMAN_FILL_TIME_MS;
  return honeypotFilled || tooFast;
}
