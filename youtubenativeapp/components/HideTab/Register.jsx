import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Register = props => {
  const {route} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2: {route.params?.title}</Text>
    </View>
  );
};

export default Register;

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
