import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useRouter } from "expo-router";

const index = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [biometricId, setBiometricId] = useState(true);
  const [faceId, setFaceId] = useState(false);

  const router = useRouter();
  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the home screen
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      {/* Settings List */}
      <View style={styles.content}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Remember Me</Text>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: "#E8E8E8", true: "#0066FF" }}
            ios_backgroundColor="#E8E8E8"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Biometric ID</Text>
          <Switch
            value={biometricId}
            onValueChange={setBiometricId}
            trackColor={{ false: "#E8E8E8", true: "#0066FF" }}
            ios_backgroundColor="#E8E8E8"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Face ID</Text>
          <Switch
            value={faceId}
            onValueChange={setFaceId}
            trackColor={{ false: "#E8E8E8", true: "#0066FF" }}
            ios_backgroundColor="#E8E8E8"
          />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Google Authenticator</Text>
          <ChevronRight size={20} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.changePin}>
          <Text style={styles.changePinText}>Change PIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.changePassword}>
          <Text style={styles.changePasswordText}>Change Password</Text>
          <ChevronRight size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingText: {
    fontSize: 16,
    color: "#000",
  },
  bottomButtons: {
    position: "absolute",
    bottom: 32,
    left: 16,
    right: 16,
    gap: 12,
  },
  changePin: {
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  changePinText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  changePassword: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#0066FF",
    alignItems: "center",
    justifyContent: "center",
  },
  changePasswordText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500",
    marginRight: 8,
  },
});
export default index;
