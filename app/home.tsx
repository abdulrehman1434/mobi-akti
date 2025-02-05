import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import { SliderComponent } from "../components/SliderComponent";
import { CongratsCard } from "@/components/CongratsCard";
import { CourseCategories } from "@/components/CourseCategories";
import { BottomNavigation } from "@/components/BottomNavigation";
import { ReviewCard } from "@/components/ReviewCard";
import { useRouter } from "expo-router";

const home = () => {
  const router = useRouter();
  const handleNavigateToCartificate = () => {
    router.push("/Cartificate");
  };
  const userName = ""; // Define userName variable
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <WelcomeHeader userName={userName} />
        </SafeAreaView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <SearchBar /> */}
        <SliderComponent />
        <CourseCategories />
        <View style={styles.courseCards}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
          >
            <CongratsCard
              message="Congratulation you completed your course successfully"
              onButtonPress={handleNavigateToCartificate}
            />
            <CongratsCard
              message="Congratulation you completed your course successfully"
              onButtonPress={handleNavigateToCartificate}
            />
          </ScrollView>
        </View>
        <View style={styles.reviewCards}>
          <View style={{ padding: 16 }}>
            <ReviewCard
              name="Heather S. McMullen"
              rating={4.2}
              review="The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse.."
              likes={760}
              timeAgo="2 Weeks Agos"
              // icon={<Feather name="star" size={24} color="gold" />}
            />
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {},
  courseCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  reviewCards: {
    padding: 10,
  },
});
