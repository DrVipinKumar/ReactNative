import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {screenType} from './TabScreens';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
type screen1Type = BottomTabScreenProps<screenType, 'Screen1', 'Register'>;
const Screen1 = (props: screen1Type) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Screen One</Text>
      <Button
        title="Go to Register"
        color="brown"
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'brown',
  },
});
