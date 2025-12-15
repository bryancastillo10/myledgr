const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  const url = BASE_URL + endpoint;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || `Request failed: ${res.status}`);
    }

    const contentLength = res.headers.get("content-length");
    const contentType = res.headers.get("content-type");

    if (
      res.status === 204 ||
      contentLength === "0" ||
      !contentType?.includes("application/json")
    ) {
      return null;
    }

    const text = await res.text();
    return text ? (JSON.parse(text) as T) : null;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Network error at ${url}:`, message);
    throw new Error(message);
  }
}
