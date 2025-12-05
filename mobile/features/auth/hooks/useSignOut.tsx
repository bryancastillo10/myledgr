import { useRouter } from "expo-router";
import { useAuthStore } from "@/lib/zustand/user";

import { authApi } from "@/features/auth/api/request";

const useSignOut = () => {
  const { clearUser } = useAuthStore();
  const router = useRouter();

  const handleSignOut = async () => {
    await authApi.signOut();

    clearUser();

    router.push("/welcome");
  };

  return {
    handleSignOut,
  };
};

export default useSignOut;
