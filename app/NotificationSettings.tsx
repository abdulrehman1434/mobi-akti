import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the home screen
  };
  const [settings, setSettings] = useState({
    specialOffers: true,
    sound: true,
    vibrate: false,
    generalNotification: true,
    promoDiscount: false,
    paymentOptions: true,
    appUpdate: true,
    newService: false,
    newTips: false,
  });

  const toggleSwitch = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const notificationItems = [
    { key: "specialOffers", label: "Special Offers" },
    { key: "sound", label: "Sound" },
    { key: "vibrate", label: "Vibrate" },
    { key: "generalNotification", label: "General Notification" },
    { key: "promoDiscount", label: "Promo & Discount" },
    { key: "paymentOptions", label: "Payment Options" },
    { key: "appUpdate", label: "App Update" },
    { key: "newService", label: "New Service Available" },
    { key: "newTips", label: "New Tips Available" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notification</Text>
        </View>

        <View style={styles.content}>
          {notificationItems.map(({ key, label }) => (
            <View key={key} style={styles.settingItem}>
              <Text style={styles.settingLabel}>{label}</Text>
              <Switch
                trackColor={{ false: "#E8E8E8", true: "#0066FF" }}
                ios_backgroundColor="#E8E8E8"
                onValueChange={() => toggleSwitch(key)}
                value={settings[key]}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  content: {
    paddingHorizontal: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  settingLabel: {
    fontSize: 14,
    color: "#000000",
  },
});

export default index;
