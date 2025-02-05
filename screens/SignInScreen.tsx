import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Logo } from "../components/Logo";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { Link, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router"; // To navigate between screens

export const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error state for invalid credentials
  const router = useRouter(); // Router hook to navigate

  // Sign in handler
  const handleSignIn = async () => {
    try {
      // Fetch stored user data
      const storedUserData = await AsyncStorage.getItem("@user_name");
      const storedEmail = await AsyncStorage.getItem("@user_email");
      const storedPassword = await AsyncStorage.getItem("@user_password");
      console.log(
        "storedUserData",
        storedUserData,
        storedEmail,
        storedPassword
      );
      if (storedEmail && storedPassword) {
        // Compare entered credentials with stored data
        if (email === storedEmail && password === storedPassword) {
          // If credentials match, navigate to the home screen
          router.push("/home"); // Adjust route to your app's home screen
        } else {
          setErrorMessage("Invalid credentials. Please try again.");
        }
      } else {
        setErrorMessage("No user data found. Please sign up first.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>Let's Sign In.!</Text>
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
      {/* Show error message if credentials are incorrect */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

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
          showArrow={false}
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
          showArrow={false}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
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
