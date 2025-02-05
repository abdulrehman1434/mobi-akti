import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "social";
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  icon,
  style,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "social" ? styles.socialButton : styles.primaryButton,
        style,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[
          styles.buttonText,
          variant === "social"
            ? styles.socialButtonText
            : styles.primaryButtonText,
        ]}
      >
        {title}
      </Text>
      {variant === "primary" && (
        <AntDesign name="arrowright" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    padding: 16,
    width: "100%",
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: "#0066FF",
  },
  socialButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    marginRight: 8,
  },
  primaryButtonText: {
    color: "#fff",
  },
  socialButtonText: {
    color: "#333",
  },
});
