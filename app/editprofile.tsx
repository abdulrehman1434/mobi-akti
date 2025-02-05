import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const editprofile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    gender: "",
    countryCode: "+92",
  });
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const genderOptions = ["Male", "Female", "Other"];

  const countryCodes = [
    { code: "+92", name: "Pakistan", flag: "https://flagcdn.com/w20/pk.png" },
    {
      code: "+1",
      name: "United States",
      flag: "https://flagcdn.com/w20/us.png",
    },
    { code: "+91", name: "India", flag: "https://flagcdn.com/w20/in.png" },
    {
      code: "+44",
      name: "United Kingdom",
      flag: "https://flagcdn.com/w20/gb.png",
    },
    { code: "+61", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
  ];

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/profile");
  };
  const handleNavigateToHome = () => {
    router.push("/home");
  };
  const handleNavigateToReward = () => {
    router.push("/reward");
  };
  const handleNavigateToCourses = () => {
    router.push("/MyCourses");
  };
  const handleNavigateToProfile = () => {
    router.push("/profile");
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({ ...formData, gender });
    setGenderModalVisible(false);
  };

  const handleCountryCodeSelect = (countryCode: string) => {
    setFormData({ ...formData, countryCode });
    setCountryCodeModalVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      setFormData({ ...formData, dateOfBirth: formattedDate });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fill Your Profile</Text>
        </View>

        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <Image source={{}} style={styles.avatar} />
            <TouchableOpacity style={styles.cameraButton}>
              <Feather name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              placeholder="Enter your full name"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nick Name</Text>
            <TextInput
              style={styles.input}
              value={formData.nickName}
              onChangeText={(text) =>
                setFormData({ ...formData, nickName: text })
              }
              placeholder="Enter your nickname"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.inputText}>
                {formData.dateOfBirth || "Select date"}
              </Text>
              <Feather name="calendar" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneInput}>
              <TouchableOpacity
                style={styles.countryCode}
                onPress={() => setCountryCodeModalVisible(true)}
              >
                <Image
                  source={{
                    uri: countryCodes.find(
                      (country) => country.code === formData.countryCode
                    )?.flag,
                  }}
                  style={styles.flag}
                />
                <Text style={styles.countryCodeText}>
                  {formData.countryCode}
                </Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
              <TextInput
                style={[styles.input, styles.phoneNumber]}
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
                placeholder="724-848-1225"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setGenderModalVisible(true)}
            >
              <Text style={styles.inputText}>
                {formData.gender || "Select gender"}
              </Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Gender Modal */}
        <Modal
          visible={genderModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setGenderModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={genderOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleGenderSelect(item)}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setGenderModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Country Code Modal */}
        <Modal
          visible={countryCodeModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setCountryCodeModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={countryCodes}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleCountryCodeSelect(item.code)}
                  >
                    <View style={styles.optionRow}>
                      <Image source={{ uri: item.flag }} style={styles.flag} />
                      <Text style={styles.optionText}>
                        {item.name} ({item.code})
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setCountryCodeModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Submit</Text>
        {/* <Feather name="arrow-right" size={24} color="#fff" /> */}
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToHome}>
          <Feather name="home" size={24} color="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToCourses}
        >
          <Feather name="book" size={24} color="#666" />
          <Text style={styles.navText}>COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToProfile}
        >
          <Feather name="user" size={24} color="#0066FF" />
          <Text style={[styles.navText, styles.activeNavText]}>PROFILE</Text>
        </TouchableOpacity>
      </View>
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
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 24,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F5F5F5",
  },
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#0066FF",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  form: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: "Inter-Regular",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  phoneInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  countryCode: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flag: {
    width: 20,
    height: 15,
  },
  countryCodeText: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#1A1A1A",
  },
  phoneNumber: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    padding: 20,
    alignItems: "center",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#0066FF",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    marginRight: 8,
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

export default editprofile;
