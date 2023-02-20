import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Views = () => {
  const [count, setCount] = useState<number>(0);
  const counter = () => {
    setCount(count + 1);
  };
  const handlePress = (msg: string) => {
    Alert.alert(msg);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heading...</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio,
        voluptatibus eaque iure illo esse magnam id culpa quisquam error ea
        quaerat sed accusamus debitis rerum adipisci exercitationem nostrum
        fuga?
      </Text>
      <View style={styles.button}>
        <Button
          title="Button in Typescript"
          color="green"
          onPress={() => handlePress('Welcome to msg')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Counter" color="green" onPress={counter} />
      </View>
      <Text>Counter: {count}</Text>
    </View>
  );
};

export default Views;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    padding: 5,
  },
  button:{
    margin:5,
  }
});
