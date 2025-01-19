import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  //   effectCallBack // Component did Mount
  useEffect(() => {
    console.log("Use Effect called");

    // component Will Unmount
    return () => {
      console.log(`Component Will Unmount`);
    };
  }, []);

  //   Component did Update
  useEffect(() => {
    if (count == 5) {
      Alert.alert("Count Reached five");
    }
  }, [count]);

  return (
    <View style={styles.funCont}>
      <Text style={styles.textBold}>FunctionalComponent = {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
};

export default FunctionalComponent;

const styles = StyleSheet.create({
  funCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    fontSize: 25,
    fontWeight: "900",
  },
});
