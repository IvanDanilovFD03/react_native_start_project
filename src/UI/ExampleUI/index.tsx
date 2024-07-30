import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export interface ExampleUIProps {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
}

export const ExampleUI: FC<ExampleUIProps> = React.memo(
  ({ icon, size, color, onPress }) => {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.buttonContainer}>
          <Ionicons color={color} name={icon} size={size} />
        </View>
      </Pressable>
    );
  },
);
