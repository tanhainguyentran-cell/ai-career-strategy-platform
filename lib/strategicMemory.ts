type StrategicMemory = {
  step1?: string;

  step2?: string;

  step3?: string;

  step4?: string;
};

const KEY =
  "strategic-memory";

export function getStrategicMemory() {
  if (
    typeof window ===
    "undefined"
  ) {
    return {};
  }

  const raw =
    localStorage.getItem(
      KEY
    );

  if (!raw) {
    return {};
  }

  return JSON.parse(raw);
}

export function saveStrategicMemory(
  step: keyof StrategicMemory,
  value: string
) {
  const current =
    getStrategicMemory();

  const updated = {
    ...current,
    [step]: value,
  };

  localStorage.setItem(
    KEY,
    JSON.stringify(updated)
  );
}