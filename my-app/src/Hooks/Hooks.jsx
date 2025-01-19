import { View, Text, StyleSheet } from "react-native";
import UseLayoutEffect from "./UseLayoutEffect";

// useLayoutEffect

// useRef
// useMemo
// useCallback

const Hooks = () => {
  return (
    <View style={styles.container}>
      <Text>Hooks</Text>
      <UseLayoutEffect></UseLayoutEffect>
    </View>
  );
};

export default Hooks;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
