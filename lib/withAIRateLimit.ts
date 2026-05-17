let activeRequests = 0;

const MAX_REQUESTS = 2;

export async function withAIRateLimit<T>(
  callback: () => Promise<T>
): Promise<T> {
  if (
    activeRequests >=
    MAX_REQUESTS
  ) {
    throw new Error(
      "AI system busy. Please wait."
    );
  }

  activeRequests++;

  try {
    return await callback();
  } finally {
    activeRequests--;
  }
}