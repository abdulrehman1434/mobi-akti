import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ProfileListItemProps {
  icon: React.ReactNode;
  title: string;
  value?: string;
  onPress: () => void;
}

export const ProfileListItem = ({
  icon,
  title,
  value,
  onPress,
}: ProfileListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContent}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContent}>
        {value && <Text style={styles.value}>{value}</Text>}
        <Feather name="chevron-right" size={20} color="#666" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#1A1A1A",
    marginLeft: 12,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#0066FF",
    marginRight: 8,
  },
});
