import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  ArrowLeft,
  Search,
  Home,
  Book,
  Mail,
  Award,
  User,
} from "react-native-feather";
import { useRouter } from "expo-router";

const courses = [
  {
    id: 1,
    image: require("../assets/images/graphic-design.jpeg"), // Local Image
    category: "Graphic Design",
    title: "Graphic Design Advanced",
    rating: 4.2,
    duration: "2 Hrs 36 Mins",
  },
  {
    id: 2,
    image: require("../assets/images/graphic-design.jpeg"), // Local Image
    category: "Graphic Design",
    title: "Advance Diploma in Gra..",
    rating: 4.7,
    duration: "3 Hrs 28 Mins",
  },
  {
    id: 3,
    image: require("../assets/images/advertisement-design.jpeg"), // Local Image
    category: "Digital Marketing",
    title: "Setup your Graphic Des..",
    rating: 4.2,
    duration: "4 Hrs 05 Mins",
  },
  {
    id: 4,
    image: require("../assets/images/web-development.jpeg"), // Local Image
    category: "Web Development",
    title: "Web Developer conce..",
    rating: 4.0,
    duration: "3 Hrs 15 Mins",
  },
];
const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("Completed");

  const router = useRouter();

  const handleNavigateToProfile = () => {
    router.push("/profile");
  };
  const handleNavigateToHome = () => {
    router.push("/home");
  };
  const handleNavigateToReward = () => {
    router.push("/reward");
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox");
  };
  const handleNavigateToCertificate = () => {
    router.push("/Cartificate");
  };
  const handleNavigateToOngoing = () => {
    router.push("/ongoingprogress"); // Navigate to Ongoing screen
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <ArrowLeft stroke="#000" width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for ..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Search stroke="#fff" width={20} height={20} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["Completed", "Ongoing"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => {
              setActiveTab(tab);
              if (tab === "Ongoing") {
                handleNavigateToOngoing(); // Navigate to the Ongoing screen
              }
            }}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Course List */}
      <ScrollView style={styles.courseList}>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            {/* Course Image */}
            <Image
              source={course.image}
              style={styles.courseImage}
              resizeMode="cover"
            />
            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>{course.category}</Text>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <View style={styles.courseStats}>
                <Text style={styles.rating}>★ {course.rating}</Text>
                <Text style={styles.duration}>{course.duration}</Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={styles.certificateLink}
                  onPress={handleNavigateToCertificate}
                >
                  VIEW CERTIFICATE
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.circleIcon}>
              <Text style={styles.tickIcon}>✅</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToHome}>
          <Home width={24} height={24} stroke="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Book width={24} height={24} stroke="#0066FF" />
          <Text style={[styles.navText, styles.activeNavText]}>MY COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToInbox}
        >
          <Mail width={24} height={24} stroke="#666" />
          <Text style={styles.navText}>INBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToReward}
        >
          <Award width={24} height={24} stroke="#666" />
          <Text style={styles.navText}>REWARD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToProfile}
        >
          <User width={24} height={24} stroke="#666" />
          <Text style={styles.navText}>PROFILE</Text>
        </TouchableOpacity>
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
    padding: 16,
    gap: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchButton: {
    width: 44,
    height: 44,
    backgroundColor: "#0066FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    backgroundColor: "#0066FF",
  },
  tabText: {
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
  courseList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  courseCard: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 12,
  },
  courseImage: {
    width: 80,
    height: 80,
    backgroundColor: "#000",
    borderRadius: 8,
  },
  courseInfo: {
    flex: 1,
    gap: 4,
  },
  courseCategory: {
    color: "#FF6B00",
    fontSize: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  courseStats: {
    flexDirection: "row",
    gap: 8,
  },
  rating: {
    fontSize: 12,
    color: "#666",
  },
  duration: {
    fontSize: 12,
    color: "#666",
  },
  certificateLink: {
    color: "#008080",
    fontSize: 12,
    fontWeight: "500",
  },
  // circleIcon: {
  //   width: 24,
  //   height: 24,
  //   borderRadius: 12,
  //   backgroundColor: "#4CAF50",
  // },
  circleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    // backgroundColor: "#0066FF", // Background color for the circle
    justifyContent: "center",
    alignItems: "center",
  },
  tickIcon: {
    fontSize: 14,
    color: "#fff", // White tick icon
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  activeNavText: {
    color: "#0066FF",
  },
});

export default MyCourses;
