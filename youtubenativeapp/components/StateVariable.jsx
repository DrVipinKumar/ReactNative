import React, { useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

import { Component } from 'react'

class StateVariable extends Component {
    state ={
        name:"Dr. Vipin Classes",
        styles:StyleSheet.create({
        text:{
            marginTop:10,
            fontSize:15,
            fontWeight:'bold'
        },
        name:{
            color:"green",
        }
    })
} 
    handlePress=()=>{
        this.setState({name:"Dr. Vipin Teotia"});
        this.setState({styles:{...this.state.styles,name:{color:"red"}}});
        
    }
  render() {
    return (
        <View>
        <Button title='Change Name' color="red" 
        onPress={this.handlePress}/>
        <Text style={this.state.styles.text}>
            <Text style={this.state.styles.name}>{this.state.name} </Text>
             Welcome to React Native CLI</Text>
    </View>
    )
  }
}


// const StateVariable = () => {
//     const [name,setName]=useState("Dr. Vipin Classes");
//     const [nameColor, setNameColor]=useState("green");
//     const styles=StyleSheet.create({
//         text:{
//             marginTop:10,
//             fontSize:15,
//             fontWeight:'bold'
//         },
//         name:{
//             color:nameColor,
//         }
//     });    
//     const handlePress=()=>{
//         setName("Dr. Vipin Teotia");
//         setNameColor("red");
//     }
//   return (
//     <View>
//         <Button title='Change Name' color="red" 
//         onPress={handlePress}/>
//         <Text style={styles.text}>
//             <Text style={styles.name}>{name} </Text>
//              Welcome to React Native CLI</Text>
//     </View>
//   )
  
// }

export default StateVariable

