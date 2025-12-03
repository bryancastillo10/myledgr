export interface UpdateUserRequest {
  username: string;
  email: string;
  bio: string;
}

export interface UpdateUserResponse extends UpdateUserRequest {
  id: string;
}
