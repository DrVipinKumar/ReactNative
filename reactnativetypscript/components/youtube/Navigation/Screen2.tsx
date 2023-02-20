import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from './Stack/AllScreens';
type propsType = NativeStackScreenProps<stackScreens, 'Screen2'>;
const Screen2 = (props: propsType) => {
  const {route, navigation} = props;
  const {info} = route.params;
  const handlePress = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Screen Two</Text>
      <Text style={styles.info}>Info : {info}</Text>
      <View>
        <Button title="Go Back" color="brown" onPress={handlePress} />
      </View>
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
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
