export default function getAIErrorMessage(
  error: unknown
) {
  if (
    error instanceof Error
  ) {
    if (
      error.message.includes(
        "busy"
      )
    ) {
      return "AI system is currently busy. Please wait a moment.";
    }

    if (
      error.message.includes(
        "fetch"
      )
    ) {
      return "Network connection issue detected.";
    }

    return error.message;
  }

  return "Unexpected AI system error.";
}