const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;
const CLEANUP_INTERVAL = 5 * 60_000; // 5 minutes

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();

// Periodic cleanup of expired entries
if (typeof globalThis !== "undefined") {
  const interval = setInterval(() => {
    const now = Date.now();
    store.forEach((entry, key) => {
      if (now > entry.resetAt) store.delete(key);
    });
  }, CLEANUP_INTERVAL);
  // Ensure the interval doesn't prevent process exit
  if (interval.unref) interval.unref();
}

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  entry.count++;
  return { success: true, remaining: MAX_REQUESTS - entry.count };
}
