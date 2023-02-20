import {Text, View, Button} from 'react-native';
import React, {Component} from 'react';
type propsType = {
  add: (n1:number,n2:number) => string;
};
type stateType = {
  result: string;
};
export class CPropsEvent extends Component<propsType, stateType> {
  state = {
    result: '',
  };
  render() {
    return (
      <View>
        <Button
          title="Add Number"
          color="green"
          onPress={() =>
            this.setState({
              result: this.props.add(40, 40),
            })
          }
        />
        <Text>Result:{this.state.result}</Text>
      </View>
    );
  }
}

export default CPropsEvent;
