import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Profiles = props => {
  const {navigation, route} = props;
  const handlePress = () => {
    navigation.navigate('Welcome');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profiles: {route.props?.info}</Text>
      <Button title="Go Back" color="green" onPress={handlePress} />
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
  },
});
