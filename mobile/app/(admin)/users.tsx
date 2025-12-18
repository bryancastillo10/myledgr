import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";

import { useState } from "react";
import { styles } from "@/features/user/styles/userlist";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ScreenHeader from "@/components/layout/ScreenHeader";
import PingCircles from "@/components/static/PingCircle";

import useColor from "@/lib/providers/useColor";
import useGetAllUsersList from "@/features/user/hooks/useGetAllUsersList";
import UserCard from "@/features/user/components/UserCard";
import NoUserList from "@/features/user/components/NoUserList";

export default function UsersList() {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { userList, loading } = useGetAllUsersList();
  const { COLORS } = useColor();

  const handleRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  const UserListLoading = (
    <View style={styles.loader}>
      <PingCircles size="xl" />
    </View>
  );

  return (
    <ScreenWrapper>
      <ScreenHeader text="" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, { color: COLORS.primary }]}>
            List of Users
          </Text>
          <Text style={[styles.countText, { color: COLORS.shadow }]}>
            {userList?.length || 0} users
          </Text>
        </View>

        {loading ? (
          UserListLoading
        ) : (
          <FlatList
            data={userList}
            renderItem={({ item }) => <UserCard user={item} />}
            keyExtractor={(item, index) => item.email || index.toString()}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={<NoUserList />}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </View>
    </ScreenWrapper>
  );
}
