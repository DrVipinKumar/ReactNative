import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {screenType} from './AllScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<screenType, 'Students'>;
const Students = (props: propsType) => {
  const {navigation} = props;
  const gotoBack = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Students</Text>
      <View>
        <Button title="Go Back" color="brown" onPress={gotoBack} />
      </View>
    </View>
  );
};

export default Students;

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
