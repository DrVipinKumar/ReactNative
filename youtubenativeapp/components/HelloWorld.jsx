import React from 'react'
import {Text } from 'react-native'
import { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
        <Text style={{color:"red", fontSize:20, textAlign:"center"}}>Hello World in React Native CLI using Class Component!</Text>
    )
  }
}


// const HelloWorld = () => {
//   return (
//     <Text style={{color:"red", fontSize:20}}>Hello World in React Native CLI!</Text>
//   )
// }


export default HelloWorld