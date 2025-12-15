import { apiRequest } from "@/lib/api-client/client";

import { User } from "@/lib/zustand/interface";
import { UpdateUserResponse } from "@/features/user/api/interface";

export const userApi = {
  getUser: () =>
    apiRequest<User>("/user", {
      method: "GET",
    }),
  getAllUsers: () =>
    apiRequest<User[]>("/user/all", {
      method: "GET",
    }),
  updateUser: (body: Partial<User>) =>
    apiRequest<UpdateUserResponse>("/user", {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  deleteUser: (email: string) => {
    apiRequest<{ message: string }>(`/user/?email=${email}`, {
      method: "DELETE",
    });
  },
};
