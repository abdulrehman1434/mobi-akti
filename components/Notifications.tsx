import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Grid, CreditCard, User, BookOpen } from "lucide-react-native";

interface NotificationProps {
  type: "course" | "payment" | "credit-card" | "account";
  title: string;
  description: string;
}

export const Notification = ({
  type,
  title,
  description,
}: NotificationProps) => {
  const getIcon = () => {
    switch (type) {
      case "course":
        return <Grid size={24} color="#0066FF" />;
      case "payment":
        return <BookOpen size={24} color="#0066FF" />;
      case "credit-card":
        return <CreditCard size={24} color="#0066FF" />;
      case "account":
        return <User size={24} color="#0066FF" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{getIcon()}</View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#F5F8FF",
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666666",
  },
});
