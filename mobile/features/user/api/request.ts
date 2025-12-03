import { apiRequest } from "@/lib/api-client/client";

import { User } from "@/lib/zustand/interface";
import { UpdateUserRequest, UpdateUserResponse } from "./interface";

export const userApi = {
  getUser: () =>
    apiRequest<User>("/user", {
      method: "GET",
    }),
  getAllUsers: () =>
    apiRequest<User[]>("/user/all", {
      method: "GET",
    }),
  updateUser: (body: UpdateUserRequest) =>
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
