const BASE_URL = process.env.EXPO_API_BASE_URL;

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
) {
  try {
    const res = await fetch(BASE_URL + endpoint, {
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

    return res.json();
  } catch (error) {
    throw new Error(`Failed request at ${endpoint}`);
  }
}
