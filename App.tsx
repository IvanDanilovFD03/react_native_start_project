import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ExampleScreen } from "./src/screens/ExampleScreen";
import { GlobalColors } from "./src/utils/styles";

const App = () => {
  return (
    <View style={styles.container}>
      <ExampleScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.colors.SystemWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
