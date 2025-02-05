import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Logo } from "../components/Logo";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { Link, useRouter } from "expo-router";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter(); // Use router for navigation

  const handleSignIn = () => {
    // Validate email and password (basic example)
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    // Navigate to the next page
    router.push("/home"); // Replace "/home" with your desired route
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>Let's Sign In.</Text>
      <Text style={styles.subtitle}>
        Login to Your Account to Continue your Courses
      </Text>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        icon={<Feather name="mail" size={24} color="#666" />}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
        icon={<Feather name="lock" size={24} color="#666" />}
      />

      <View style={styles.rememberContainer}>
        <TouchableOpacity
          style={styles.rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
            {rememberMe && <AntDesign name="check" size={16} color="#0066FF" />}
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Sign In" onPress={handleSignIn} />

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

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an Account? </Text>
        <TouchableOpacity>
          <Link href="/signup">
            <Text style={styles.signUpLink}>SIGN UP</Text>
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
    paddingTop: 80,
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
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#0066FF",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: "#fff",
  },
  rememberText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#333",
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#0066FF",
  },
  orText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginVertical: 24,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  signUpLink: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: "#0066FF",
  },
});
