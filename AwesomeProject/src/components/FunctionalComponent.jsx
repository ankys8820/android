import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('componentWillUnmounted: Component Unmounted');
    };
  }, []);
  useEffect(() => {
    console.log('Count Updated');
    if (count == 50) {
      Alert.alert('Count Reached 5');
      setCount(0);
    }
  }, [count]);
  return (
    <View style={{flex: 2, backgroundColor: 'purple'}}>
      <Text>FunctionalComponent : {count}</Text>
      <Button title="Increse" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
};
export default FunctionalComponent;
