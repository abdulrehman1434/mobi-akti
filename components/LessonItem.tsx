import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface LessonItemProps {
  number: string;
  title: string;
  duration: string;
  isLocked?: boolean;
  onPress?: () => void;
}

export const LessonItem = ({
  number,
  title,
  duration,
  isLocked = false,
  onPress,
}: LessonItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isLocked}
    >
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>

      <View style={styles.iconContainer}>
        {isLocked ? (
          <Feather name="lock" size={20} color="#666" />
        ) : (
          <Feather name="play-circle" size={20} color="#0066FF" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  numberContainer: {
    width: 32,
    alignItems: "center",
  },
  number: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#666",
  },
  content: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  iconContainer: {
    marginLeft: 12,
  },
});
