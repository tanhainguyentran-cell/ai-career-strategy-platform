const CACHE_PREFIX =
  "ai-cache-";

const TTL =
  1000 * 60 * 60 * 24;
// 24 hours

type CachePayload = {
  value: string;

  timestamp: number;
};

export function getCachedAI(
  key: string
) {
  if (
    typeof window ===
    "undefined"
  )
    return null;

  const raw =
    localStorage.getItem(
      CACHE_PREFIX + key
    );

  if (!raw) return null;

  try {
    const parsed =
      JSON.parse(
        raw
      ) as CachePayload;

    const expired =
      Date.now() -
        parsed.timestamp >
      TTL;

    if (expired) {
      localStorage.removeItem(
        CACHE_PREFIX + key
      );

      return null;
    }

    return parsed.value;
  } catch {
    return null;
  }
}

export function setCachedAI(
  key: string,
  value: string
) {
  if (
    typeof window ===
    "undefined"
  )
    return;

  const payload: CachePayload =
    {
      value,

      timestamp: Date.now(),
    };

  localStorage.setItem(
    CACHE_PREFIX + key,
    JSON.stringify(payload)
  );
}