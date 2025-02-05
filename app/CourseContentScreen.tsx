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
import { SearchBar } from "../components/SearchBar";
import { SectionHeader } from "../components/SectionHeader";
import { LessonItem } from "../components/LessonItem";
import { useRouter } from "expo-router";

const courseSections = [
  {
    id: "1",
    title: "01 - Introduction",
    duration: "25 Mins",
    lessons: [
      {
        id: "01",
        title: "Why Using Graphic De..",
        duration: "15 Mins",
        isLocked: false,
      },
      {
        id: "02",
        title: "Setup Your Graphic De..",
        duration: "10 Mins",
        isLocked: false,
      },
    ],
  },
  {
    id: "2",
    title: "02 - Graphic Design",
    duration: "55 Mins",
    lessons: [
      {
        id: "03",
        title: "Take a Look Graphic De..",
        duration: "08 Mins",
        isLocked: true,
      },
      {
        id: "04",
        title: "Working with Graphic De..",
        duration: "25 Mins",
        isLocked: true,
      },
      {
        id: "05",
        title: "Working with Frame & Lay..",
        duration: "12 Mins",
        isLocked: true,
      },
    ],
  },
];

const CourseContentScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleNavigateToMyCourses = () => {
    router.push("/ongoingprogress");
  };

  const handleNavigateToPaymentScreen = () => {
    router.push("/"); // Navigate to Profile screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToMyCourses}>
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Course Content */}
      <ScrollView style={styles.content}>
        {courseSections.map((section) => (
          <View key={section.id}>
            <SectionHeader title={section.title} duration={section.duration} />
            {section.lessons.map((lesson) => (
              <TouchableOpacity
                key={lesson.id}
                onPress={() =>
                  lesson.isLocked
                    ? handleNavigateToPaymentScreen()
                    : console.log("Lesson pressed:", lesson.id)
                }
              >
                <LessonItem
                  number={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  isLocked={lesson.isLocked}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue Courses</Text>
          <Feather name="arrow-right" size={20} color="#fff" />
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
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066FF",
    borderRadius: 30,
    padding: 16,
  },
  continueButtonText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#fff",
    marginRight: 8,
  },
});
export default CourseContentScreen;
