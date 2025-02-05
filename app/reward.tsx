import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { CongratsCard } from "@/components/CongratsCard";

const reward = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/home"); // Navigate to the home screen
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox"); // Navigate to the search screen
  };
  const handleNavigateToMyCourses = () => {
    router.push("/MyCourses"); // Navigate to Reward screen
  };
  const handleNavigateToProfile = () => {
    router.push("/profile"); // Navigate to Profile screen
  };
  const handleNavigateToCartificate = () => {
    router.push("/Cartificate"); // Navigate to Profile screen
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reward</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>
      {/* Main Content */}
      <View style={styles.container}>
        <CongratsCard
          message="Congratulation you rewarded with 100 points"
          onButtonPress={handleNavigateToCartificate}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleGoBack}>
          <Feather name="home" size={24} color="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToMyCourses}
        >
          <Feather name="book" size={24} color="#666" />
          <Text style={[styles.navText]}>MY COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToInbox}
        >
          <Feather name="mail" size={24} color="#666" />
          <Text style={styles.navText}>INBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="award" size={24} color="#0066FF" />
          <Text style={(styles.navText, styles.navTextActive)}>REWARD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToProfile}
        >
          <Feather name="user" size={24} color="#666" />
          <Text style={styles.navText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  backButton: {
    padding: 8,
  },
  searchButton: {
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333",
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
  navItemActive: {
    color: "#0066FF",
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

export default reward;
