import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    textAlign:'center',
  },
});
