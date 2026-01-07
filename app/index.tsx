import { Pressable, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { PetHeader } from "../components/PetHeader";
import { PetPicker } from "../components/PetPicker";
import { styles } from "../styles/homeStyles";

export default function Index() {
  const { pet } = useLocalSearchParams<{ pet?: string }>();
  const pets = [
    {
      id: "craggle",
      name: "Craggle",
      vibe: "Bouldering beast",
      tint: "#C66B3D",
    },
    { id: "stride", name: "Stride", vibe: "Endless walker", tint: "#2F5233" },
    { id: "dash", name: "Dash", vibe: "Night runner", tint: "#2C5F7A" },
  ];
  const selectedPet = pets.find((item) => item.id === pet);

  if (!selectedPet) {
    return (
      <View style={styles.screen}>
        <View style={styles.content}>
          <Text style={styles.title}>Pick your pet</Text>
          <Text style={styles.subtitle}>
            Each one thrives on a different kind of movement.
          </Text>
          <PetPicker
            pets={pets}
            onSelect={(id) => router.push(`/?pet=${id}`)}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <PetHeader petName={selectedPet.name} />

        <Pressable onPress={() => router.replace("/")} style={styles.resetPet}>
          <Text style={styles.resetPetText}>Change pet</Text>
        </Pressable>
      </View>
    </View>
  );
}
