import {
  getStrategicMemory,
} from "@/lib/strategicMemory";

export function canCompleteStep(
  step: number
) {
  const memory =
    getStrategicMemory();

  switch (step) {
    case 1:
      return Boolean(
        memory.step1
      );

    case 2:
      return Boolean(
        memory.step2
      );

    case 3:
      return Boolean(
        memory.step3
      );

    case 4:
      return Boolean(
        memory.step4
      );

    default:
      return true;
  }
}