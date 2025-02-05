import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

// Sample data for the contacts list
const contacts = [
  {
    id: "1",
    name: "Virginia M. Patterson",
    phone: "(+1) 702-897-7965",
    invited: false,
  },
  {
    id: "2",
    name: "Dominick S. Jenkins",
    phone: "(+1) 702-897-7965",
    invited: false,
  },
  {
    id: "3",
    name: "Duncan E. Hoffman",
    phone: "(+1b)727-688-4052",
    invited: true,
  },
  {
    id: "4",
    name: "Roy R. McCraney",
    phone: "(+1) 601-897-1714",
    invited: false,
  },
  {
    id: "5",
    name: "Janice R. Norris",
    phone: "(+1) 802-312-3206",
    invited: true,
  },
];
const invitefriend = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the home screen
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite Friends</Text>
      </View>

      {/* Contacts List */}
      <ScrollView style={styles.contactsList}>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.contactItem}>
            <View style={styles.avatar} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactPhone}>{contact.phone}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.inviteButton,
                contact.invited && styles.inviteButtonGray,
              ]}
            >
              <Text
                style={[
                  styles.inviteButtonText,
                  contact.invited && styles.inviteButtonTextGray,
                ]}
              >
                Invite
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Share Section */}
      <View style={styles.shareSection}>
        <Text style={styles.shareText}>Share Invite Via</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>t</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>W</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  contactsList: {
    flex: 1,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
  },
  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "500",
  },
  contactPhone: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  inviteButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  inviteButtonGray: {
    backgroundColor: "#F0F0F0",
  },
  inviteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  inviteButtonTextGray: {
    color: "#666",
  },
  shareSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  shareText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    fontSize: 16,
    color: "#666",
  },
});
export default invitefriend;
