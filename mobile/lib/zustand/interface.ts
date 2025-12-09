export interface User {
  id: string;
  username: string;
  email: string;
  bio?: string | null;
  address?: string | null;
  currency: string;
  theme: string;
  role: "ADMIN" | "PUBLIC" | string;

  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;

  isAuthenticated: () => boolean;
}
