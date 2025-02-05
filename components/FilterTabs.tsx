import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface FilterTabsProps {
  activeTab: "chat" | "calls";
  onTabChange: (tab: "chat" | "calls") => void;
}

export const FilterTabs = ({ activeTab, onTabChange }: FilterTabsProps) => {
  const router = useRouter();
  const handleNavigateToInbox = () => {
    router.push("./inbox");
  };
  const handleNavigateToCall = () => {
    router.push("/Call");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "chat" && styles.activeTab]}
        onPress={handleNavigateToInbox}
      >
        <Text
          style={[styles.tabText, activeTab === "chat" && styles.activeTabText]}
        >
          Chat
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === "calls" && styles.activeTab]}
        onPress={handleNavigateToCall}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "calls" && styles.activeTabText,
          ]}
        >
          Calls
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 20,
    marginVertical: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#00796B",
  },
  tabText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
});
