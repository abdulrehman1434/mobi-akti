// app/signup/page.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Function to handle SignUp
  const handleSignUp = async () => {
    if (!name || !email || !password || !agreeToTerms) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Invalid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    // Save the user data locally using AsyncStorage
    try {
      await AsyncStorage.setItem("@user_name", name);
      await AsyncStorage.setItem("@user_email", email);
      await AsyncStorage.setItem("@user_password", password); // You should store the password securely, but for simplicity, we're saving it directly here

      // Optionally store more data, e.g., user preferences, etc.

      Alert.alert("Success", "Account created successfully!");
      // Navigate to SignIn or other screen after success
    } catch (error) {
      Alert.alert("Error", "Failed to save user data locally.");
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>Getting Started.!</Text>
      <Text style={styles.subtitle}>
        Create an Account to Continue your allCourses
      </Text>

      <CustomInput placeholder="Name" value={name} onChangeText={setName} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      <TouchableOpacity
        style={styles.termsContainer}
        onPress={() => setAgreeToTerms(!agreeToTerms)}
      >
        <View style={[styles.checkbox, agreeToTerms && styles.checkedBox]}>
          {agreeToTerms && <AntDesign name="check" size={16} color="white" />}
        </View>
        <Text style={styles.termsText}>Agree to Terms & Conditions</Text>
      </TouchableOpacity>

      <CustomButton title="Sign Up" onPress={handleSignUp} />

      <Text style={styles.orText}>Or Continue With</Text>

      <View style={styles.socialButtons}>
        <CustomButton
          title="Google"
          onPress={() => {}}
          variant="social"
          icon={
            <Image
              source={{ uri: "https://www.google.com/favicon.ico" }}
              style={styles.socialIcon}
            />
          }
          style={{ width: "48%" }}
        />
        <CustomButton
          title="Apple"
          onPress={() => {}}
          variant="social"
          icon={
            <AntDesign
              name="apple1"
              size={24}
              color="black"
              style={styles.socialIcon}
            />
          }
          style={{ width: "48%" }}
        />
      </View>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an Account? </Text>
        <TouchableOpacity>
          <Link href="/signin">
            <Text style={styles.signInLink}>SIGN IN</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "Inter-SemiBold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#0066FF",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: "#0066FF",
  },
  termsText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#333",
  },
  orText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginVertical: 24,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  signInLink: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: "#0066FF",
  },
});
