import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './AllScreen';
type propsType = NativeStackScreenProps<screenType, 'Registration'>;
const Registration = (props: propsType) => {
  const {navigation} = props;
  const gotoMarks = () => {
    navigation.push('Marks');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration</Text>
      <View>
        <Button title="Go to Students" color="brown" onPress={gotoMarks} />
      </View>
    </View>
  );
};

export default Registration;

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
});
