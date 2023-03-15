import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Screen2 = props => {
  const {route, navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2: {route.params?.title}</Text>
      <Button
        title="Go to Profiles"
        onPress={() => navigation.navigate('Profiles')}
      />
    </View>
  );
};

export default Screen2;

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
