import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { imageUri } from "./dummyData/index";

const BasicComponents = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => console.log("This is button")}
      >
        <Text style={styles.textBold}>Basic Components</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: imageUri,
        }}
        style={styles.img}
      />
    </View>
  );
};

export default BasicComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  textBold: {
    fontSize: 20,
    // fontWeight: "900",
  },
  customButton: {
    padding: 20,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  img: {
    width: 200,
    height: 240,
    resizeMode: "contain",
  },
});
