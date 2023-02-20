import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = (props) => {
    const {navigation}=props
    const handlePress=()=>{
          navigation.navigate("Profiles",{info:"Hello by Welcome"});
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Tab Naviation in React Native CLI</Text>
      <Button title="Go To Profiles" color="green" onPress={handlePress}/>
    </View>
  )
}

export default Welcome

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