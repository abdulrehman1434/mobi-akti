import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoInner}>
        <Image
          source={require("../assets/images/logo.png")} // Use require for local images
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  gradientBorder: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    padding: 3,
  },
  logoInner: {
    backgroundColor: "#fff",
    borderRadius: 57,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "80%",
  },
});
