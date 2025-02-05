import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface CourseCard {
  title: string;
  image: any;
  price: number;
  originalPrice?: number;
  rating: number;
  duration: string;
  category: string;
  onPress: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

export const CourseCard = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  duration,
  category,
  onPress,
  onBookmark,
  isBookmarked = false,
}: CourseCard) => {
  const router = useRouter();
  const handleNavigateToCourseContentScreen = () => {
    router.push("/CourseContentScreen"); // Navigate to the search screen
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.thumbnail} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.category}>{category}</Text>
          <TouchableOpacity onPress={onBookmark}>
            <Feather
              name={isBookmarked ? "bookmark" : "bookmark"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${price}</Text>
          {originalPrice && (
            <Text style={styles.originalPrice}>${originalPrice}</Text>
          )}
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{rating}</Text>
            <Feather name="star" size={14} color="#FFA500" />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.duration}>{duration}</Text>
          <TouchableOpacity onPress={handleNavigateToCourseContentScreen}>
            <Text style={styles.watchButton}>Watch tutorial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: "#FF6B00",
    fontFamily: "Inter-Medium",
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#666",
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
});
