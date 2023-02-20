import {Text, View, Button, StyleSheet} from 'react-native';
import React, {Component} from 'react';
type propsType = {
  mul: (num1: number, num2: number) => string;
};
type stateType = {
  result: string;
};
export class CEventProps extends Component<propsType,stateType> {
  state = {
    result: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Show Multiply Event"
          color="red"
          onPress={() =>
            this.setState({
              result: this.props.mul(20, 20),
            })
          }
        />
        <Text style={styles.result}>Result: {this.state.result}</Text>
      </View>
    );
  }
}

export default CEventProps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
