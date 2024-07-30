import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { ExampleScreen } from "./src/screens/ExampleScreen";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.root}>
      <ExampleScreen />

      {/* TODO: resolve that prettier problem */}
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="dark" />
    </View>
  );
};

export default App;
