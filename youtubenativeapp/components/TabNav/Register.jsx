import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register in Tab Naviation in React Native CLI</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:30,
    }
})