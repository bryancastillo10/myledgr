import { useState, useCallback, useEffect } from "react";
import { userApi } from "@/features/user/api/request";

import { User } from "@/lib/zustand/interface";

const useGetAllUsersList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserList = useCallback(async () => {
    try {
      setLoading(true);

      const users = await userApi.getAllUsers();

      if (users) {
        setUserList(users);
      }
    } catch (err) {
      console.error("Failed to get users list");
    } finally {
      setLoading(false);
    }
  }, [userList]);

  useEffect(() => {
    fetchUserList();
  }, []);

  return {
    userList,
    loading,
    fetchUserList,
  };
};

export default useGetAllUsersList;
