import {StyleSheet, Button, View, Text} from 'react-native';
import React, {useState} from 'react';

type propsType = {
  add: (n1: number, n2: number) => string;
};
const FEventProps = (props: propsType) => {
  const [result, setResult] = useState<string>();
  return (
    <View>
      <Button
        title="Add Number"
        color="green"
        onPress={() => setResult(props.add(40, 40))}
      />
      <Text>Result:{result}</Text>
    </View>
  );
};

export default FEventProps;

const styles = StyleSheet.create({});
