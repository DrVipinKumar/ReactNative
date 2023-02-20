import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {stackScreens} from './Stack/AllScreens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<stackScreens, 'Screen1'>;
const Screen1 = (props: propsType) => {
  const {navigation, route} = props;
  const {msg} = route.params;
  const gotoScreen2 = () => {
    navigation.push('Screen2', {info: 'this information is from screen 1'});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Screen One</Text>
      <View>
        <Button title="Go to Screen Two" color="brown" onPress={gotoScreen2} />
      </View>
      <Text style={styles.message}>Message: {msg}</Text>
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
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
