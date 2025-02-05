import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function index({ navigation }) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/profile"); // Navigate to the home screen
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Condition & Attending</Text>
          <Text style={styles.text}>
            At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe,
            stare movere, quadratum rotundum. At certe gravius. Nullus est
            igitur cuiusquam dies natalis. Paulum, cum regem Persem captum
            adduceret, eodem flumine invectio?
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
            Sed finge non solum callidum eum, qui aliquid improbe faciat, verum
            etiam praepotentem, ut M. Est autem officium, quod ita factum est,
            ut eius facti probabilis ratio reddi possit.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms of Use</Text>
          <Text style={styles.text}>
            Ut providentia non nulla veriora sint quam vestra dogmata. Tamen
            aberramus a proposito, et, ne longius, prorsus, inquam. Piso, si
            ista mala sunt, placet. Omnes enim iucundum motum, quo sensus
            hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici,
            verba. Quibusnam praeteritis? Fortasse hoc esse dicit, quidem
            hactenus; Si id dicis, vicimus. Qui ita affectus, beatum esse
            numquam probabis; Istam veque satisfactionem esse dici neque
            quisquam beatus neque sapientiam non beatus.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Dicam, inquam, et quidem discendi causa magis, quam quo te aut
            Epicurum reprehensum velim. Dolor ergo, id est summum malum,
            metuetur semper, etiamsi non ader.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    padding: 4,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
});
