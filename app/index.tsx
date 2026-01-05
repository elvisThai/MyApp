import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>DAILY CREATURE</Text>
            <Text style={styles.title}>Craggle is hungry</Text>
            <Text style={styles.subtitle}>
              Keep your streak alive by moving every day.
            </Text>
          </View>
          <View style={styles.levelBadge}>
            <Text style={styles.levelLabel}>LVL</Text>
            <Text style={styles.levelValue}>7</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  screen: {
    flex: 1,
    backgroundColor: "#F3E9D2",
  },
  content: {
    padding: 24,
    paddingTop: 70,
    paddingBottom: 48,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  kicker: {
    fontFamily: "Courier New",
    fontSize: 12,
    letterSpacing: 2,
    color: "#76553B",
  },
  title: {
    fontFamily: "Georgia",
    fontSize: 30,
    color: "#3C2A1E",
  },
  subtitle: {
    fontFamily: "Avenir",
    fontSize: 14,
    color: "#5C4433",
    marginTop: 6,
    maxWidth: 220,
  },
  levelBadge: {
    backgroundColor: "#3C2A1E",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  levelLabel: {
    fontFamily: "Courier New",
    fontSize: 10,
    color: "#F3E9D2",
    letterSpacing: 1,
  },
  levelValue: {
    fontFamily: "Georgia",
    fontSize: 18,
    color: "#F3E9D2",
  },
} as const;
