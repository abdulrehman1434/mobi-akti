import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { CategoryPill } from "../components/CategoryPill";
import { CourseCard } from "../components/CourseCard";
import { useRouter } from "expo-router";

const categories = [
  "All",
  "Graphic Design",
  "3D Design",
  "Arts & Humanities",
  "Marketing",
];

const courses = [
  {
    id: 1,
    image: require("../assets/images/graphic-design.jpeg"),
    title: "Graphic Design Advanced",
    price: 28,
    originalPrice: 42,
    rating: 4.2,
    duration: "9h 55m total",
    category: "Graphic Design",
  },
  {
    id: 2,
    image: require("../assets/images/graphic-design.jpeg"),
    title: "Graphic Design Advanced",
    price: 28,
    originalPrice: 42,
    rating: 4.2,
    duration: "9h 55m total",
    category: "Graphic Design",
  },
  {
    id: 3,
    image: require("../assets/images/graphic-design.jpeg"),
    title: "Graphic Design Advanced",
    price: 28,
    originalPrice: 42,
    rating: 4.2,
    duration: "9h 55m total",
    category: "Graphic Design",
  },
  {
    id: 4,
    image: require("../assets/images/web-development.jpeg"),
    title: "Web Developer course..",
    price: 56,
    originalPrice: 75,
    rating: 4.5,
    duration: "14h 20m total",
    category: "Web Development",
  },
  {
    id: 5,
    image: require("../assets/images/seo.jpeg"),
    title: "Digital Marketing Career..",
    price: 45,
    originalPrice: 65,
    rating: 4.1,
    duration: "10h 15m total",
    category: "SEO & Marketing",
  },
];

export const CoursesScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookmarkedCourses, setBookmarkedCourses] = useState<number[]>([]);
  const router = useRouter();

  const toggleBookmark = (courseId: number) => {
    setBookmarkedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };
  const handleGoBack = () => {
    router.push("/home"); // Navigate to the home screen
  };
  const handleNavigateToInbox = () => {
    router.push("/inbox"); // Navigate to the search screen
  };
  const handleNavigateToReward = () => {
    router.push("/reward"); // Navigate to Reward screen
  };
  const handleNavigateToProfile = () => {
    router.push("/profile"); // Navigate to Profile screen
  };
  // const handleNavigateToPaymentScreen = () => {
  //   router.push("/PaymentScreen"); // Navigate to Profile screen
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Courses</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <CategoryPill
            key={category}
            title={category}
            isActive={activeCategory === category}
            onPress={() => setActiveCategory(category)}
          />
        ))}
      </ScrollView>

      <ScrollView
        style={styles.coursesContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.coursesContentContainer}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            isBookmarked={bookmarkedCourses.includes(course.id)}
            onPress={() => router.push}
            onBookmark={() => toggleBookmark(course.id)}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={handleGoBack}>
          <Feather name="home" size={24} color="#666" />
          <Text style={styles.navText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="book" size={24} color="#0066FF" />
          <Text style={[styles.navText, styles.navTextActive]}>MY COURSES</Text>
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
          <Text style={styles.navText}>REWARD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={handleNavigateToProfile}
        >
          <Feather name="user" size={24} color="#666" />
          <Text style={styles.navText}>PROFILE</Text>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  searchButton: {
    padding: 4,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 15,
    gap: 8,
  },
  coursesContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  coursesContentContainer: {
    paddingTop: 0,
    gap: 12, // Add gap between cards for consistent spacing
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    color: "#0066FF",
  },
  navText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginTop: 4,
  },
  navTextActive: {
    color: "#0066FF",
  },
});
export default CoursesScreen;
