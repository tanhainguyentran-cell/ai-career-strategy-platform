export type AIHistoryItem = {
  id: string;

  type: string;

  prompt: string;

  response: string;

  createdAt: number;
};

const STORAGE_KEY =
  "ai-history";

export function getAIHistory() {
  if (
    typeof window ===
    "undefined"
  )
    return [];

  const raw =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (!raw) return [];

  try {
    return JSON.parse(
      raw
    ) as AIHistoryItem[];
  } catch {
    return [];
  }
}

export function saveAIHistory(
  item: AIHistoryItem
) {
  if (
    typeof window ===
    "undefined"
  )
    return;

  const current =
    getAIHistory();

  const updated = [
    item,
    ...current,
  ].slice(0, 50);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}