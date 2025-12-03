import { apiRequest } from "@/lib/api-client/client";

import { User } from "@/lib/zustand/interface";

export const userApi = {
  getUser: () =>
    apiRequest<User>("/user", {
      method: "GET",
    }),
};
