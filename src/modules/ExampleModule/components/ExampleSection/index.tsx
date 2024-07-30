import React, { FC } from "react";
import { View } from "react-native";

import { ExampleCard } from "components/ExampleCard";

import { styles } from "./styles";

export interface ExampleSectionProps {}

export const ExampleSection: FC<ExampleSectionProps> = React.memo(() => {
  return (
    <View style={styles.root}>
      <ExampleCard id={1} title="TEST" />
    </View>
  );
});
