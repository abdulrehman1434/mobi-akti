import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { Notification } from "@/components/Notifications";
import { useRouter } from "expo-router";

interface NotificationGroup {
  date: string;
  notifications: {
    type: "course" | "payment" | "credit-card" | "account";
    title: string;
    description: string;
  }[];
}

const notificationData: NotificationGroup[] = [
  {
    date: "Today",
    notifications: [
      {
        type: "course",
        title: "New Category Course.!",
        description: "New the 3D Design Course is Availa..",
      },
      {
        type: "course",
        title: "New Category Course.!",
        description: "New the 3D Design Course is Availa..",
      },
      {
        type: "payment",
        title: "Today's Special Offers",
        description: "You Have made a Course Payment.",
      },
    ],
  },
  {
    date: "Yesterday",
    notifications: [
      {
        type: "credit-card",
        title: "Credit Card Connected.!",
        description: "Credit Card has been Linked.!",
      },
    ],
  },
  {
    date: "Nov 20, 2024",
    notifications: [
      {
        type: "account",
        title: "Account Setup Successful.!",
        description: "Your Account has been Created.",
      },
    ],
  },
];
const index = () => {
  const router = useRouter();
  // Handle the back button press
  const handleGoBack = () => {
    router.push("/home"); // Navigate to the home screen
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notificationData.map((group, index) => (
          <View key={index} style={styles.group}>
            <Text style={styles.dateHeader}>{group.date}</Text>
            {group.notifications.map((notification, nIndex) => (
              <Notification
                key={nIndex}
                type={notification.type}
                title={notification.title}
                description={notification.description}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  content: {
    flex: 1,
  },
  group: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginLeft: 20,
    marginBottom: 12,
  },
});
export default index;
