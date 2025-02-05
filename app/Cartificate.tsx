import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { ArrowLeft } from "react-native-feather";
import { useRouter } from "expo-router";
// import index from "../TermsAndConditions";

interface CertificateProps {
  studentName: string;
  courseName: string;
  certificateId: string;
  issueDate: string;
  onDownload?: () => void;
}

const index = ({
  studentName,
  courseName,
  certificateId,
  issueDate,
  onDownload,
}: CertificateProps) => {
  const router = useRouter();

  const handleNavigateToMyCourses = () => {
    router.push("/reward");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleNavigateToMyCourses}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
          <Text style={styles.headerTitle}>Certificate</Text>
        </TouchableOpacity>
      </View>

      {/* Certificate Card */}
      <View style={styles.certificateCard}>
        {/* Top Curve */}
        <View style={styles.topCurve}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 100 100"
            style={styles.absolute}
          >
            <Path d="M 0 0 L 100 0 L 100 70 Q 50 100 0 70 Z" fill="#4834D4" />
          </Svg>
        </View>

        {/* Bottom Curve */}
        <View style={styles.bottomCurve}>
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 100 100"
            style={styles.absolute}
          >
            <Path d="M 0 30 Q 50 0 100 30 L 100 100 L 0 100 Z" fill="#FFA500" />
          </Svg>
        </View>

        {/* Certificate Content */}
        <View style={styles.iconContainer}>
          <Feather name="award" size={32} color="#4834D4" />
        </View>

        <Text style={styles.title}>Certificate of Completions</Text>
        <Text style={styles.subtitle}>This Certifies that</Text>

        <Text style={styles.name}>Calvin E. McGinnis</Text>

        <Text style={styles.description}>
          Has Successfully Completed the Wallace Training Program, Entitled.
        </Text>

        <Text style={styles.courseName}>3D Design Illustration Course</Text>

        <Text style={styles.issueDate}>Issued on November 24, 2022</Text>

        <Text style={styles.certificateId}>ID: SK24568086</Text>

        {/* Signatures */}
        <View style={styles.signatureContainer}>
          <View style={styles.signature}>
            <Text style={styles.signatureLine}>Calvin E. McGinnis</Text>
            <View style={styles.signatureDivider} />
          </View>

          <View style={styles.signature}>
            <Text style={styles.signatureLine}>Virginia M. Patterson</Text>
            <View style={styles.signatureDivider} />
            <Text style={styles.signatureTitle}>Virginia M. Patterson</Text>
            {/* <Text style={styles.issueDate}>Issued on November 24, 2022</Text> */}
          </View>
        </View>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Certificate</Text>
        {/* <Feather name="arrow-right" size={20} color="#fff" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    marginLeft: 12,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  certificateCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    margin: 16,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    minHeight: 500,
    paddingVertical: 50,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topCurve: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 110,
    zIndex: -1,
  },
  bottomCurve: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    zIndex: -1,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontFamily: "Inter-SemiBold",
    color: "#4834D4",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  courseName: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 16,
    textAlign: "center",
  },
  issueDate: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 8,
  },
  certificateId: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 24,
  },
  signatureContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 32,
  },
  signature: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  signatureLine: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  signatureDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
    marginBottom: 8,
  },
  signatureTitle: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#666",
    marginBottom: 4,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066FF",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginHorizontal: 16,
    marginTop: "auto",
    marginBottom: 16,
  },
  downloadText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    marginRight: 8,
  },
});

export default index;
