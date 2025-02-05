import React, { useState } from "react";
import { Text } from "react-native";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ChatListItem } from "../components/ChatListItem";
import { FilterTabs } from "../components/FilterTabs";
import { useRouter } from "expo-router";

const dummyChats = [
  {
    id: "1",
    name: "Patricia D. Regalado",
    status: "incoming",
    date: "Nov 03, 202X",
  },
  {
    id: "2",
    name: "Jonathan K. Nix",
    status: "incoming",
    date: "Nov 05, 202X",
  },
  {
    id: "3",
    name: "Ellen N. Cranford",
    status: "outgoing",
    date: "Nov 06, 202X",
  },
  {
    id: "4",
    name: "William W. Spicer",
    status: "missed",
    date: "Nov 15, 202X",
  },
  {
    id: "5",
    name: "Scott D. Chambers",
    status: "outgoing",
    date: "Nov 17, 202X",
  },
  {
    id: "6",
    name: "Hilda M. Hernandez",
    status: "missed",
    date: "Nov 18, 202X",
  },
  {
    id: "7",
    name: "Hilda M. Hernandez",
    status: "outgoing",
    date: "Nov 19, 202X",
  },
] as const;

const index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "calls">("calls");

  const router = useRouter();

  const handleNavigateToInbox = () => {
    router.push("/inbox");
  };
  const handleNavigateToCall = () => {
    router.push("/Call");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateToInbox}>
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Inbox</Text>
        </View>
        <TouchableOpacity>
          <Feather name="search" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Chat List */}
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            name={item.name}
            status={item.status}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
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
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    color: "#1A1A1A",
  },
});
export default index;
