import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  likes: number;
  timeAgo: string;
}

export const ReviewCard = ({
  name,
  review,
  rating,
  likes,
  timeAgo,
}: ReviewCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Feather name="star" size={16} color="#FFA500" />
          </View>
        </View>
      </View>
      <Text style={styles.review}>{review}</Text>
      <View style={styles.footer}>
        <View style={styles.likes}>
          <Feather name="heart" size={16} color="#FF4081" />
          <Text style={styles.likesText}>{likes}</Text>
        </View>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    marginRight: 4,
  },
  review: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
  timeAgo: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
  },
});
