import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
const { width } = Dimensions.get("window");
export const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const slides = [
    {
      title: "",
      subtitle: "",
      image: require("../assets/images/coursescomplete.jpg"),
    },
    {
      title: "",
      subtitle: "",
      image: require("../assets/images/Professional Online Learning Banner (Landscape).jpg"),
    },
    {
      title: "",
      subtitle: "",
      image: require("../assets/images/orange modern course banner.jpg"),
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);
  return (
    <View style={styles.container}>
      {/* Slider */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      >
        {slides.map((slide, index) => (
          <ImageBackground
            key={index}
            source={slide.image}
            style={[styles.banner, { width }]}
            imageStyle={styles.imageBackground}
          >
            {/* <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>{slide.title}</Text>
              <Text style={styles.bannerSubtitle}>{slide.subtitle}</Text>
            </View> */}
          </ImageBackground>
        ))}
      </ScrollView>
      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    // width: "100%",
  },
  imageBackground: {
    resizeMode: "cover", // Ensures full image coverage
    width: "98%",
    height: "100%",
    borderRadius: 16, // Ensure centered positioning
  },
  banner: {
    borderRadius: 16,
    marginRight: 2,
    height: 200, // Slightly increased height for better image display
    overflow: "hidden",
    justifyContent: "flex-end", // Align content to bottom
  },
  // bannerContent: {
  //   // backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent overlay
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   width: "100%",
  // },
  // banner: {
  //   borderRadius: 16,
  //   height: 180, // Adjust the height of the slider here
  //   overflow: "hidden",
  //   position: "relative",
  //   justifyContent: "center",
  // },
  // imageBackground: {
  //   resizeMode: "contain", // Ensures the image fits without being cropped
  //   width: "100%", // Ensure it spans the full width of the slider
  //   height: "100%", // Ensure it spans the full height of the slider
  // },
  // bannerContent: {
  //   paddingHorizontal: 20,
  //   justifyContent: "center",
  //   alignItems: "flex-start",
  // },
  // bannerTitle: {
  //   color: "#FFF",
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 8,
  // },
  // bannerSubtitle: {
  //   color: "#FFF",
  //   fontSize: 16,
  //   fontWeight: "500",
  // },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 16,
    left: 20,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },
  dotActive: {
    width: 24,
    backgroundColor: "#FFB800",
  },
  dotInactive: {
    opacity: 0.5,
  },
});
export default SliderComponent;
