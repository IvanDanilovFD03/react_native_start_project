import React, { FC } from "react";

import { ExampleCard } from "components/ExampleCard";
import { View } from "react-native";

import { styles } from "./styles";

export interface ExampleSectionProps {}

export const ExampleSection: FC<ExampleSectionProps> = React.memo(() => {
  return (
    <View style={styles.root}>
      <ExampleCard title="TEST" id={1} />
    </View>
  );
});
