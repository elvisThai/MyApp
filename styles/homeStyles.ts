import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  petList: {
    marginTop: 24,
    gap: 14,
  },
  petOption: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#F9F4E8",
  },
  petBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  petName: {
    fontFamily: "Georgia",
    fontSize: 18,
    color: "#3C2A1E",
  },
  petVibe: {
    fontFamily: "Avenir",
    fontSize: 12,
    color: "#7A5C43",
    marginTop: 4,
  },
  resetPet: {
    marginTop: 16,
    alignSelf: "flex-start",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3C2A1E",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  resetPetText: {
    fontFamily: "Avenir",
    fontSize: 12,
    color: "#3C2A1E",
  },
});
