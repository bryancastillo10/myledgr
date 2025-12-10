export interface UpdateUserRequest {
  username?: string;
  email?: string;
  bio?: string;
  address?: string;
  theme?: string;
  currency?: string;
}

export interface UpdateUserResponse extends UpdateUserRequest {
  id: string;
}
