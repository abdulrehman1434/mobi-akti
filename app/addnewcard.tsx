// import React from "react";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ArrowLeft, Grid3x3, MoreHorizontal } from "lucide-react-native";
import { useRouter, useSegments } from "expo-router";

const index = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  interface FormatCardNumber {
    (text: string): string;
  }

  const formatCardNumber: FormatCardNumber = (text) => {
    const cleaned = text.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = cleaned.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts: string[] = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : text;
  };

  const router = useRouter();
  const segments = useSegments();

  const handleGoBack = () => {
    router.push("/payment"); // Navigate to the home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Card</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.cardPreview}>
        <View style={styles.cardIcons}>
          <Grid3x3 color="#fff" size={24} />
        </View>
        <Text style={styles.cardNumber}>
          {cardNumber || "1234 5678 8765 0876"}
        </Text>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardLabel}>VALID THRU</Text>
            <Text style={styles.cardText}>{expiryDate || "12/28"}</Text>
          </View>
          <View>
            <Text style={styles.cardText}>
              {cardName || "TIMMY C. HERNANDEZ"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Card Name*</Text>
          <TextInput
            style={styles.input}
            value={cardName}
            onChangeText={setCardName}
            placeholder="Belinda C. Cullen"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Card Number*</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            placeholder="**** **65 8765 3456"
            keyboardType="numeric"
            maxLength={19}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
            <Text style={styles.label}>Expiry Date*</Text>
            <TextInput
              style={styles.input}
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholder="12/28"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>CVV*</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              placeholder="***"
              keyboardType="numeric"
              maxLength={3}
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
        {/* <ArrowLeft
          size={20}
          color="#fff"
          style={{ transform: [{ rotate: "180deg" }] }}
        /> */}
      </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardPreview: {
    backgroundColor: "#0066FF",
    borderRadius: 16,
    padding: 24,
    margin: 16,
    marginTop: 8,
  },
  cardIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 24,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLabel: {
    color: "#ffffff80",
    fontSize: 12,
    marginBottom: 4,
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0066FF",
    borderRadius: 30,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});

export default index;
