import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryPillProps {
  title: string;
  isActive?: boolean;
  onPress: () => void;
}

export const CategoryPill = ({
  title,
  isActive,
  onPress,
}: CategoryPillProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.activeContainer]}
      onPress={onPress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 36,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  activeContainer: {
    backgroundColor: "#0066FF",
  },
  text: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#666666",
  },
  activeText: {
    color: "#FFFFFF",
  },
});
