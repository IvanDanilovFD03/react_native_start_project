import React, { FC } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export interface ExampleCardProps {
  id: number | string;
  title: string;
}

export const ExampleCard: FC<ExampleCardProps> = React.memo(({ title }) => {
  return (
    <View style={styles.root}>
      <Text>Example {title} Component</Text>
    </View>
  );
});
