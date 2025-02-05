import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Check, ArrowLeft } from "lucide-react-native";

import { useRouter } from "expo-router";

type Language = {
  id: string;
  name: string;
  selected: boolean;
};

const Checkbox = ({ selected }: { selected: boolean }) => (
  <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
    {selected && <Check size={16} color="#fff" />}
  </View>
);

const language = () => {
  const [subCategories, setSubCategories] = useState<Language[]>([
    { id: "1", name: "English (US)", selected: true },
    { id: "2", name: "English (UK)", selected: false },
  ]);
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the Profile screen
  };
  const [allLanguages, setAllLanguages] = useState<Language[]>([
    { id: "1", name: "English (US)", selected: true },
    { id: "2", name: "Arabic", selected: false },
    { id: "3", name: "Hindi", selected: false },
    { id: "4", name: "Bengali", selected: false },
    { id: "5", name: "Deutsch", selected: false },
    { id: "6", name: "Italian", selected: false },
    { id: "7", name: "Korean", selected: false },
    { id: "8", name: "Francais", selected: false },
    { id: "9", name: "Russian", selected: false },
    { id: "10", name: "Polish", selected: false },
    { id: "11", name: "Spanish", selected: false },
    { id: "12", name: "Mandarin", selected: false },
  ]);

  const toggleSubCategory = (id: string) => {
    setSubCategories(
      subCategories.map((lang) =>
        lang.id === id ? { ...lang, selected: !lang.selected } : lang
      )
    );
  };

  const toggleAllLanguage = (id: string) => {
    setAllLanguages(
      allLanguages.map((lang) =>
        lang.id === id ? { ...lang, selected: !lang.selected } : lang
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SubCategories:</Text>
          {subCategories.map((lang) => (
            <TouchableOpacity
              key={lang.id}
              style={styles.languageItem}
              onPress={() => toggleSubCategory(lang.id)}
            >
              <Text style={styles.languageText}>{lang.name}</Text>
              <Checkbox selected={lang.selected} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Language</Text>
          {allLanguages.map((lang) => (
            <TouchableOpacity
              key={lang.id}
              style={styles.languageItem}
              onPress={() => toggleAllLanguage(lang.id)}
            >
              <Text style={styles.languageText}>{lang.name}</Text>
              <Checkbox selected={lang.selected} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
    // color: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    // color: "#fff",
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#111827",
  },
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  languageText: {
    fontSize: 16,
    color: "#374151",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxSelected: {
    backgroundColor: "#10B981",
    borderColor: "#10B981",
  },
});
export default language;
