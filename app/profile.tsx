import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { ProfileListItem } from "../components/ProfileListItem";
import { useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/home"); // Navigate to the home screen
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox"); // Navigate to the search screen
  };
  const handleNavigateToMyCourses = () => {
    router.push("/MyCourses"); // Navigate to Courses screen
  };
  const handleNavigateToHome = () => {
    router.push("/home"); // Navigate to Profile screen
  };
  const handleNavigateToReward = () => {
    router.push("/reward"); // Navigate to reward screen
  };
  const handleNavigateToEditProfile = () => {
    router.push("/editprofile"); // Navigate to Edit-Profile screen
  };
  const handleNavigateToNotificationSettings = () => {
    router.push("/NotificationSettings"); // Navigate to NotificationSettings screen
  };
  const handleNavigateToTermsAndConditions = () => {
    router.push("/TermsAndConditions"); // Navigate to NotificationSettings screen
  };
  const handleNavigateToPayment = () => {
    router.push("/payment"); // Navigate to Payment screen
  };
  const handleNavigateToSecurity = () => {
    router.push("/security"); // Navigate to Security screen
  };
  const handleNavigateToLanguage = () => {
    router.push("/language"); // Navigate to Language screen
  };
  const handleNavigateToInviteFriend = () => {
    router.push("/invitefriend"); // Navigate to Invite Friend screen
  };
  const handleNavigateToContactUsScreen = () => {
    router.push("/ContactUsScreen"); // Navigate to Invite Friend screen
  };
  const handleNavigateTologout = () => {
    router.push("/LogoutScreen"); // Navigate to Invite Friend screen
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#1A1A1A" />
            <Text style={styles.headerTitle}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image
                source={{
                  uri: "",
                }}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.imageIcon}>
              <Feather name="image" size={16} color="#00A67E" />
            </View>
          </View>
          <Text style={styles.name}>Abdul Rehman</Text>
          <Text style={styles.email}>
            5.1&nbsp;
            <Feather name="star" size={14} color="#FFA500" /> ab******.com
          </Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={handleNavigateToEditProfile}
          >
            <Feather name="user" size={20} color="#666" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Settings List */}
        <View style={styles.settingsList}>
          <ProfileListItem
            icon={<Feather name="credit-card" size={20} color="#666" />}
            title="Payment Option"
            onPress={handleNavigateToPayment}
          />
          <ProfileListItem
            icon={<Feather name="bell" size={20} color="#666" />}
            title="Notifications"
            onPress={handleNavigateToNotificationSettings}
          />
          <ProfileListItem
            icon={<Feather name="shield" size={20} color="#666" />}
            title="Security"
            onPress={handleNavigateToSecurity}
          />
          <ProfileListItem
            icon={<MaterialIcons name="language" size={20} color="#666" />}
            title="Language"
            value="English (US)"
            onPress={handleNavigateToLanguage}
          />

          <ProfileListItem
            icon={<Feather name="file-text" size={20} color="#666" />}
            title="Terms & Conditions"
            onPress={handleNavigateToTermsAndConditions}
          />

          <ProfileListItem
            icon={<Feather name="users" size={20} color="#666" />}
            title="Invite Friends"
            onPress={handleNavigateToInviteFriend}
          />
          <ProfileListItem
            icon={<Feather name="phone" size={20} color="#666" />}
            title="Contact Us"
            onPress={handleNavigateToContactUsScreen}
          />
          <ProfileListItem
            icon={<Feather name="log-out" size={20} color="#666" />}
            title="Logout"
            onPress={handleNavigateTologout}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToHome}>
          <Feather name="home" size={24} color="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToMyCourses}
        >
          <Feather name="book" size={24} color="#666" />
          <Text style={styles.navText}>My COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToInbox}
        >
          <Feather name="mail" size={24} color="#666" />
          <Text style={styles.navText}>INBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToReward}
        >
          <Feather name="award" size={24} color="#666" />
          <Text style={styles.navText}>REWARDS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={24} color="#0066FF" />
          <Text style={[styles.navText, styles.activeNavText]}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    marginLeft: 12,
  },
  profileInfo: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00A67E",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  avatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 4,
    borderWidth: 2,
    borderColor: "#00A67E",
  },
  name: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 16,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginHorizontal: 8,
  },
  settingsList: {
    flex: 1,
  },
  inviteSection: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  activeNavText: {
    color: "#0066FF",
  },
});
