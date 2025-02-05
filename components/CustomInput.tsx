import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CustomInputProps {
  placeholder: string;
  isPassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  icon?: React.ReactNode;
}

export const CustomInput = ({
  placeholder,
  isPassword,
  value,
  onChangeText,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666"
        secureTextEntry={isPassword && !showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 9,
    position: "relative",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
