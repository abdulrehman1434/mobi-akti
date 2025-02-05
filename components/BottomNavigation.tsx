import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export const BottomNavigation = () => {
  const router = useRouter();

  const handleNavigateToMyCourses = () => {
    router.push("/MyCourses"); // Navigate to Courses screen
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox"); // Navigate to Inbox screen
  };
  const handleNavigateToReward = () => {
    router.push("/reward"); // Navigate to Reward screen
  };
  const handleNavigateToProfile = () => {
    router.push("/profile"); // Navigate to Profile screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Feather name="home" size={24} color="#0066FF" />
        <Text style={[styles.tabText, styles.activeTab]}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleNavigateToMyCourses}>
        <Feather name="book" size={24} color="#666" />
        <Text style={styles.tabText}>MY COURSES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleNavigateToInbox}>
        <Feather name="mail" size={24} color="#666" />
        <Text style={styles.tabText}>INBOX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleNavigateToReward}>
        <Feather name="award" size={24} color="#666" />
        <Text style={styles.tabText}>REWARD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleNavigateToProfile}>
        <Feather name="user" size={24} color="#666" />
        <Text style={styles.tabText}>PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginTop: 4,
  },
  activeTab: {
    color: "#0066FF",
  },
});
