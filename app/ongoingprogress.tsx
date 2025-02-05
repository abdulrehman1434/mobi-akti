import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Home, Book, Mail, Award, User } from "react-native-feather";
import { useRouter } from "expo-router";

const ongoingprogress = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");

  const router = useRouter();

  const handleNavigateToMyCourses = () => {
    router.push("/MyCourses");
  };
  const handleNavigateToHome = () => {
    router.push("/home");
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox");
  };
  const handleNavigateToReward = () => {
    router.push("/");
  };
  const handleNavigateToProfile = () => {
    router.push("/");
  };
  const handleNavigateToCourseContentScreen = () => {
    router.push("/CourseContentScreen");
  };

  const courses = [
    {
      id: "1",
      // image: require("../../assets/images/graphic-design.jpeg"),
      category: "UI/UX Design",
      title: "Intro to UI/UX Design",
      rating: 4.4,
      time: "3 Hrs 06 Mins",
      progress: 93,
      total: 125,
    },
    {
      id: "2",
      // image: require("../../assets/images/graphic-design.jpeg"),

      category: "Web Development",
      title: "WordPress Website Dev",
      rating: 3.9,
      time: "1 Hr 58 Mins",
      progress: 12,
      total: 31,
    },
    {
      id: "3",
      // image: require("../../assets/images/graphic-design.jpeg"),

      category: "UI/UX Design",
      title: "3D Blender and UI/UX",
      rating: 4.6,
      time: "2 Hrs 46 Mins",
      progress: 56,
      total: 98,
    },
    {
      id: "4",

      category: "UX/UI Design",
      title: "Learn UX User Persona",
      rating: 3.9,
      time: "1 Hr 58 Mins",
      progress: 56,
      total: 96,
      // image: "https://via.placeholder.com/150/graphic-design.jpeg",
    },
  ];

  const duration = ""; // Example duration value

  const renderCourse = ({ item }) => (
    <View style={styles.courseCard}>
      {/* Thumbnail */}
      <View style={styles.thumbnail}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.thumbnailImage} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>

      {/* Course Info */}
      <View style={styles.courseInfo}>
        <Text style={styles.courseCategory}>{item.category}</Text>
        <Text style={styles.courseTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.courseMeta}>
          <View style={styles.ratingContainer}>
            <Feather name="star" size={14} color="#FFC107" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>

        {/* Progress Bar */}
        {item.total > 0 && (
          <View>
            <View style={styles.progressContainer}>
              <View
                style={[
                  styles.progressBar,
                  { width: `${(item.progress / item.total) * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {item.progress}/{item.total}
            </Text>
          </View>
        )}

        {/* Footer with duration and watch button */}
        <View style={styles.footer}>
          <Text style={styles.duration}>{duration}</Text>
          <TouchableOpacity onPress={handleNavigateToCourseContentScreen}>
            <Text style={styles.watchButton}>Watch tutorial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToMyCourses}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for ..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Completed" && styles.activeTab,
          ]}
          onPress={handleNavigateToMyCourses}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Ongoing" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>
      </View>

      {/* Course List */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        contentContainerStyle={styles.courseList}
      />

      {/* Footer Navigation */}
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
    backgroundColor: "#F5F8FD",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F8FD",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    color: "#000",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#000",
  },
  searchIcon: {
    backgroundColor: "#0066FF",
    padding: 12,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  activeTab: {
    backgroundColor: "#0066FF",
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
  courseList: {
    paddingHorizontal: 16,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    padding: 12,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  placeholder: {
    flex: 1,
  },
  courseInfo: {
    flex: 1,
    justifyContent: "space-around",
  },
  courseCategory: {
    fontSize: 12,
    color: "#0066FF",
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  courseMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  progressContainer: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginVertical: 4,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#0066FF",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
  },
  //   footer: {
  //     flexDirection: "row",
  //     justifyContent: "space-around",
  //     paddingVertical: 12,
  //     backgroundColor: "#fff",
  //     elevation: 5,
  //   },
  footerItem: {
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duration: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  watchButton: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    color: "#0066FF",
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
export default ongoingprogress;
