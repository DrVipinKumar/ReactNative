import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = (props) => {
    const {navigation,route}=props;
    const {name}=route.params;
    const openProfile=()=>{
           navigation.push("Profile",{info:"This is profile by Welcome",info1:"This is extra information"});
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to {name} in React Native CLI Navigation</Text>
    <View style={styles.button}>
    <Button title="Go to Profile" color="red" onPress={openProfile}/>
    </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
         textAlign:"center",
        fontSize:25,
         fontWeight:"bold"
         
    },
    button:{
        marginTop:10,
        width: 200,
        alignSelf:"center"
    }
})
    