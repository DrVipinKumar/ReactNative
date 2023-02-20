import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration</Text>
      <Button title="+" color="green" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'brown',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
  },
});
