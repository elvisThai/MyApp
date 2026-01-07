import { Text, View } from "react-native";

import { styles } from "../styles/homeStyles";

type PetHeaderProps = {
  petName: string;
};

export function PetHeader({ petName }: PetHeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{petName} is hungry</Text>
        <Text style={styles.subtitle}>
          Keep your streak alive by moving every day!
        </Text>
      </View>
      <View style={styles.levelBadge}>
        <Text style={styles.levelLabel}>LVL</Text>
        <Text style={styles.levelValue}>7</Text>
      </View>
    </View>
  );
}
