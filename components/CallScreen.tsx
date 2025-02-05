import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface CallScreenProps {
  name: string;
  duration: string;
  avatarUrl?: string;
  onBackPress?: () => void;
  onMutePress?: () => void;
  onEndPress?: () => void;
  onMessagePress?: () => void;
}

export const CallScreen = ({
  name,
  duration,
  avatarUrl,
  onBackPress,
  onMutePress,
  onEndPress,
  onMessagePress,
}: CallScreenProps) => {
  const router = useRouter();
  const handleNavigateToHome = () => {
    router.push("/callscreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleNavigateToHome}
      >
        <Feather name="arrow-left" size={24} color="#1A1A1A" />
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={
            avatarUrl
              ? { uri: avatarUrl }
              : {
                  uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xYOnuJN2d9gYCllkXAGuKP5vl5m7gL.png",
                }
          }
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.muteButton]}
          onPress={onMutePress}
        >
          <Feather name="mic-off" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.endButton]}
          onPress={onEndPress}
        >
          <Feather name="phone-off" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.messageButton]}
          onPress={onMessagePress}
        >
          <Feather name="message-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  profileSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#000",
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  duration: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 40,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  muteButton: {
    backgroundColor: "#F5F5F5",
  },
  endButton: {
    backgroundColor: "#FF4444",
  },
  messageButton: {
    backgroundColor: "#0066FF",
  },
});
