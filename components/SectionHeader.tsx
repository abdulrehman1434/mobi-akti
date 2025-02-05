import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface SectionHeaderProps {
  title: string;
  duration: string;
}

export const SectionHeader = ({ title, duration }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Section {title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F8F9FA",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  duration: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#0066FF",
  },
});
