import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Screen1 = props => {
  const {route, navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1: {route.params?.title}</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
