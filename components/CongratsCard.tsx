import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CongratsCardProps {
  title?: string;
  message: string;
  onButtonPress: () => void;
}

export const CongratsCard = ({
  title = "Congratulations",
  message,
  onButtonPress,
}: CongratsCardProps) => {
  return (
    <View style={styles.container}>
      {/* Decorative Elements */}
      <View style={styles.decorations}>
        <View style={[styles.line, styles.line1]} />
        <View style={[styles.line, styles.line2]} />
        <View style={[styles.dot, styles.dot1]} />
        <View style={[styles.dot, styles.dot2]} />
        <View style={[styles.triangle, styles.triangle1]} />
        <View style={[styles.triangle, styles.triangle2]} />
      </View>

      {/* Stars */}
      <View style={styles.starsContainer}>
        {[1, 2, 3].map((star) => (
          <Feather key={star} name="star" size={24} color="#FFA500" />
        ))}
      </View>

      {/* Shield with Checkmark */}
      <View style={styles.shieldContainer}>
        <View style={styles.shield}>
          <Feather name="check" size={20} color="#fff" />
        </View>
      </View>

      {/* Content */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Feather name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: 280,
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: "relative",
    overflow: "hidden",
  },
  decorations: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line: {
    position: "absolute",
    width: 20,
    height: 2,
    backgroundColor: "#333",
    transform: [{ rotate: "45deg" }],
  },
  line1: {
    top: "20%",
    left: "10%",
  },
  line2: {
    top: "30%",
    right: "10%",
  },
  dot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dot1: {
    top: "15%",
    left: "15%",
    backgroundColor: "#FF4081",
  },
  dot2: {
    top: "25%",
    right: "15%",
    backgroundColor: "#FFA500",
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  triangle1: {
    top: "40%",
    left: "20%",
    borderBottomColor: "#4CAF50",
  },
  triangle2: {
    top: "20%",
    right: "20%",
    borderBottomColor: "#2196F3",
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  shieldContainer: {
    marginBottom: 16,
  },
  shield: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-SemiBold",
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#0066FF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
