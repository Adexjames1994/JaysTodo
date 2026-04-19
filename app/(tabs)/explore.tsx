import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LightColors, DarkColors } from "@/constants/colors";

export default function AboutScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkColors : LightColors;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        JaysTodo App
      </Text>

      <Text style={[styles.subtitle, { color: theme.text }]}>
        Stay organized. Stay productive.
      </Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Features
        </Text>

        <Text style={[styles.text, { color: theme.text }]}>
          • Add and manage tasks
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          • Mark tasks as completed
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          • Clean and simple interface
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          • Works offline
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          About Developer
        </Text>

        <Text style={[styles.text, { color: theme.text }]}>
          Built by Adeola James
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Frontend Developer passionate about building useful apps.
        </Text>
      </View>

      <Text style={[styles.footer, { color: theme.text }]}>
        Version 1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 5,
  },
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    opacity: 0.6,
  },
});