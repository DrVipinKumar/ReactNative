import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

type propsType = {
  add: (num1: number, num2: number) => string;
};
const FEventProps: React.FC<propsType> = props => {
  const [result, setResult] = useState<string>();
  return (
    <View style={styles.container}>
      <Button
        title="Show Add Event"
        color="green"
        onPress={() => setResult(props.add(40, 40))}
      />
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

export default FEventProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
