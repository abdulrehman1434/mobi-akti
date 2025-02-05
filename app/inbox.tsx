import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  avatar: string;
}

const messages: Message[] = [
  {
    id: "1",
    name: "Virginia M. Patterson",
    message: "Hi, Good Evening Bro.!",
    time: "14:59",
    unreadCount: 3,
    avatar: "",
  },
  // More messages...
];
export const index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "calls">("chat");

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/MyCourses"); // Navigate to the home screen
  };
  const handleNavigateToHome = () => {
    router.push("/home"); // Navigate to the search screen
  };
  const handleNavigateToReward = () => {
    router.push("/reward"); // Navigate to the search screen
  };
  const handleNavigateToMyCourses = () => {
    router.push("/MyCourses"); // Navigate to Reward screen
  };
  const handleNavigateToProfile = () => {
    router.push("/profile"); // Navigate to Profile screen
  };
  const handleNavigateToCallScreen = () => {
    router.push("/CallScreen"); // Navigate to Profile screen
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inbox</Text>
        </View>
        <TouchableOpacity>
          <Feather name="search" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "chat" && styles.activeTab]}
          onPress={() => setActiveTab("chat")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "chat" && styles.activeTabText,
            ]}
          >
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "calls" && styles.activeTab]}
          onPress={() => {
            setActiveTab("calls");
            if ("calls" === "calls") {
              handleNavigateToCallScreen(); // Navigate to the Ongoing screen
            }
          }}
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

      {/* Messages List */}
      <ScrollView style={styles.messagesList}>
        {messages.map((message) => (
          <TouchableOpacity key={message.id} style={styles.messageItem}>
            <Image source={{ uri: message.avatar }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.userName}>{message.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <View style={styles.messageFooter}>
                <Text style={styles.messageText} numberOfLines={1}>
                  {message.message}
                </Text>
                {message.unreadCount && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>
                      {message.unreadCount < 10
                        ? `0${message.unreadCount}`
                        : message.unreadCount}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToHome}>
          <Feather name="home" size={24} color="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToMyCourses}
        >
          <Feather name="book" size={24} color="#666" />
          <Text style={styles.navText}>My COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="mail" size={24} color="#0066FF" />
          <Text style={[styles.navText, styles.navTextActive]}>INBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToReward}
        >
          <Feather name="award" size={24} color="#666" />
          <Text style={styles.navText}>REWARDS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToProfile}
        >
          <Feather name="user" size={24} color="#666" />
          <Text style={styles.navText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 130,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    backgroundColor: "#00875A",
  },
  tabText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
  messagesList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: "#F5F5F5",
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  messageTime: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: "#0066FF",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 24,
    alignItems: "center",
  },
  unreadCount: {
    fontSize: 12,
    fontFamily: "Inter-SemiBold",
    color: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginTop: 4,
  },
  navTextActive: {
    color: "#0066FF",
  },
});

export default index;
