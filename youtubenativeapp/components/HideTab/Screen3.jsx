import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Screen3 = props => {
  const {route, navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3: {route.params?.title}</Text>
      <Button
        title="Go to Tab1"
        onPress={() => navigation.navigate('Tab1Screen1')}
      />
    </View>
  );
};

export default Screen3;

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
