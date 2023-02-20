import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Screen One</Text>
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'brown',
  },
});
