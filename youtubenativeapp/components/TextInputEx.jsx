import React, { useState } from 'react'
import { TextInput, View,StyleSheet, Text, Button } from 'react-native'

import { Component } from 'react'

class TextInputEx extends Component {
    state={
        name:"",
        display:"",
    }
    handlePress=()=>{
        this.setState({display:this.state.name});
    }
  render() {
    return (
        <View>
        <TextInput 
        // keyboardType='numeric'
        placeholderTextColor={'green'}
        placeholder='Enter name'
        style={styles.textInput}
        onChangeText={(newValue)=>this.setState({name:newValue})}
        />
        <View style={styles.button}>
            <Button title="Update Name" color="red" onPress={this.handlePress}/>
            <Text style={styles.heading}>Value:{this.state.display}</Text>
        </View>
        </View>
    )
  }
}

// const TextInputEx = () => {
//     const [name,setName]=useState("");
//     const [display, setDisplay]=useState();
//     const handlePress=()=>{
//         setDisplay(name);
//     }
//   return (
//     <View>
//         <TextInput 
//         // keyboardType='numeric'
//         placeholderTextColor={'green'}
//         placeholder='Enter name'
//         style={styles.textInput}
//         onChangeText={(newValue)=>setName(newValue)}
//         />
//         <View style={styles.button}>
//             <Button title="Update Name" color="red" onPress={handlePress}/>
//             <Text style={styles.heading}>Value:{display}</Text>
//         </View>
//         </View>
//   )
// }

export default TextInputEx

const styles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:"#777",
        width:300,
    }, 
    button:{
        marginTop:20,
    },
    heading:{
        fontWeight:'bold',
        marginTop:10,
        fontSize:20,
    }
});