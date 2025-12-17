import { apiRequest } from "@/lib/api-client/client";

import {
  ResetPasswordRequest,
  ResetPasswordStepResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  VerifyCodeRequest,
} from "@/features/resetpassword/api/interface";

const baseUrl = "/reset-password";

export const resetPasswordApi = {
  requestReset: (body: ResetPasswordRequest) =>
    apiRequest<ResetPasswordStepResponse>(`${baseUrl}/request`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  verifyCode: (body: VerifyCodeRequest) =>
    apiRequest<ResetPasswordStepResponse>(`${baseUrl}/verify-code`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updatePassword: (body: UpdatePasswordRequest) =>
    apiRequest<UpdatePasswordResponse>(`${baseUrl}/update`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
};
