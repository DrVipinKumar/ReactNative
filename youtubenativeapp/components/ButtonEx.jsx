import React from 'react'
import { Button, View, Alert } from 'react-native'

import { Component } from 'react'

class ButtonEx extends Component {
    handlePress=()=>{
        Alert.alert("Information","Welcome to React Native CLI");
    }
  render() {
    return (
        <View>
        <Button title="Press ME" color="red" 
        onPress={this.handlePress}/>
    </View>
    )
  }
}

// const ButtonEx = () => {
//     const handlePress=()=>{
//         Alert.alert("Information","Welcome to React Native CLI");
//     }
//   return (
//     <View>
//         <Button title="Press ME" color="red" 
//         onPress={handlePress}/>
//     </View>
//   )
// }

export default ButtonEx