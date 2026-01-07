import { Pressable, Text, View } from "react-native";

import { styles } from "../styles/homeStyles";

type Pet = {
  id: string;
  name: string;
  vibe: string;
  tint: string;
};

type PetPickerProps = {
  pets: Pet[];
  onSelect: (id: string) => void;
};

export function PetPicker({ pets, onSelect }: PetPickerProps) {
  return (
    <View style={styles.petList}>
      {pets.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => onSelect(item.id)}
          style={[styles.petOption, { borderColor: item.tint }]}
        >
          <View style={[styles.petBadge, { backgroundColor: item.tint }]} />
          <View>
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petVibe}>{item.vibe}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
