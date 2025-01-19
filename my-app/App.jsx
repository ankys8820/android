import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FunctionalComponent from "./src/FunctionalComponent";
import BasicComponents from "./src/BasicComponents";
import Hooks from "./src/Hooks/Hooks";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        {/* <Text>Todo Application</Text> */}
        {/* <Button title="AddTodo" />  */}
        {/* <FunctionalComponent /> */}
        {/* <BasicComponents /> */}
        <Hooks></Hooks>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "cyan",
    // color: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
