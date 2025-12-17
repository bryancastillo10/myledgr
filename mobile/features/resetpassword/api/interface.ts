export interface ResetPasswordRequest {
  email: string;
}

export interface VerifyCodeRequest extends ResetPasswordRequest {
  code: string;
}

export interface UpdatePasswordRequest extends ResetPasswordRequest {
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordStepResponse {
  message: string;
}

export interface UpdatePasswordResponse extends ResetPasswordStepResponse {
  user: string;
}
