import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const cards = [
    { id: 1, lastFour: "", status: "Connected" },
    { id: 2, lastFour: "", status: "Connected" },
    { id: 3, lastFour: "", status: "Connected" },
    { id: 4, lastFour: "76 3054", status: "Connected" },
  ];

  const router = useRouter();
  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the home screen
  };
  const handleNavigateToAddNewCard = () => {
    router.push("/addnewcard"); // Navigate to the Profile screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Option</Text>
      </View>

      <ScrollView style={styles.content}>
        {cards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.cardNumber}>
              {card.lastFour ? `•••• •••• ••${card.lastFour}` : ""}
            </Text>
            <Text style={styles.statusText}>{card.status}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleNavigateToAddNewCard}
      >
        <Text style={styles.addButtonText}>Add New Card</Text>
        <ArrowRight size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardNumber: {
    fontSize: 16,
    color: "#000",
  },
  statusText: {
    color: "#10b981",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#0066ff",
    borderRadius: 30,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
});
export default Index;
