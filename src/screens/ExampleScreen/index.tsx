import React, { FC } from "react";

import { ExampleSection } from "modules/ExampleModule";
import { View } from "react-native";

import { styles } from "./styles";

export interface ExampleScreenProps {}

export const ExampleScreen: FC<ExampleScreenProps> = React.memo(() => {
  return (
    <View style={styles.root}>
      <ExampleSection />
    </View>
  );
});
