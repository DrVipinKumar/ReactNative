import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {stackScreens} from './Stack/AllScreens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type propsType = NativeStackScreenProps<stackScreens, 'Home'>;
const Home = (props: propsType) => {
  const {navigation} = props;
  const gotoScreen1 = () => {
    navigation.push('Screen1', {msg: 'this is data from home screen'});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <View>
        <Button title="Go to Screen 1" color="brown" onPress={gotoScreen1} />
      </View>
    </View>
  );
};

export default Home;

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
