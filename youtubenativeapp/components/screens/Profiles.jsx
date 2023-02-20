import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Profiles = (props) => {
    const {route,navigation}=props;
    const {info,info1}=route.params;
    const handlePress=()=>{
            //navigation.goBack();
            //navigation.pop(2);
            navigation.popToTop();
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info1}</Text>
      <View style={styles.button}>
    <Button title="Go Back" color="red" onPress={handlePress}/>
    </View>
    </View>
  )
}

export default Profiles

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
    },
})