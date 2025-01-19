import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UseLayoutEffect = () => {
  return (
    <View style={styles.container}>
      <Text>UseLayoutEffect</Text>
    </View>
  );
};

export default UseLayoutEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
