import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingScreen } from "@/screens/OnboardingScreen";
// import HomeScreen from "@/screens/HomeScreen";
import { SignInScreen } from "@/screens/SignInScreen";
// import HomeScreen from "../app/home";
// import { SignUpScreen } from "@/screens/SignUpScreen";
import { useRouter } from "expo-router";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
