import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface ChatListItemProps {
  name: string;
  status: "incoming" | "outgoing" | "missed";
  date: string;
  avatarUrl?: string;
  onPress?: () => void;
}

export const ChatListItem = ({
  name,
  status,
  date,
  avatarUrl,
  onPress,
}: ChatListItemProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "incoming":
        return "arrow-down-left";
      case "outgoing":
        return "arrow-up-right";
      case "missed":
        return "x";
      default:
        return "phone";
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "missed":
        return "#FF4444";
      default:
        return "#666666";
    }
  };

  const router = useRouter();
  const handleNavigateToCall = () => {
    router.push("/callscreen");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={
          avatarUrl
            ? { uri: avatarUrl }
            : {
                uri: "",
              }
        }
        style={styles.avatar}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.statusContainer}>
          <Feather name={getStatusIcon()} size={14} color={getStatusColor()} />
          <Text style={[styles.status, { color: getStatusColor() }]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.callButton}
        onPress={handleNavigateToCall}
      >
        <Feather name="phone" size={20} color="#0066FF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    marginLeft: 4,
    marginRight: 8,
  },
  date: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666666",
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
