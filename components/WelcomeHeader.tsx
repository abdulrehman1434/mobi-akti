import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Expo Icons for the bell and search icons
import { useRouter } from "expo-router"; // Import useRouter for navigation

interface WelcomeHeaderProps {
  userName: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ userName }) => {
  const router = useRouter(); // Initialize router

  const handleNavigateToNotification = () => {
    router.push("/notification"); // Navigate to Notification screen
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, {userName}</Text>
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={handleNavigateToNotification}
        >
          <Ionicons name="notifications-outline" size={22} color="#0EAD69" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for.."
          placeholderTextColor="#AFAFAF"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    width: "230%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  bellIcon: {
    backgroundColor: "#E8F8F1",
    padding: 8,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: "#1E1E1E",
  },
  searchButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeHeader;
