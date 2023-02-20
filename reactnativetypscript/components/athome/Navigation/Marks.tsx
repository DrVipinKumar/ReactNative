import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenType} from './AllScreen';
type propsType = NativeStackScreenProps<screenType, 'Marks'>;
const Marks = (props: propsType) => {
   const {navigation} = props;
  //const navigation =useNavigation<NativeStackNavigationProp<screenType>>();
  const gotoStudents = () => {
    navigation.push('Students');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Marks</Text>
      <View>
        <Button title="Go to Students" color="brown" onPress={gotoStudents} />
      </View>
    </View>
  );
};

export default Marks;

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
