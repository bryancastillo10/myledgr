import { apiRequest } from "@/lib/api-client/client";
import {
  SignInRequest,
  SignUpRequest,
  AuthResponse,
} from "@/features/auth/api/interface";

export const authApi = {
  signUp: (body: SignUpRequest) =>
    apiRequest<AuthResponse>("/auth/signup", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  signIn: (body: SignInRequest) =>
    apiRequest<AuthResponse>("/auth/signin", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  signOut: () =>
    apiRequest<{ message: string }>("/auth/signout", {
      method: "POST",
    }),
};
