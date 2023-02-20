import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const MyButton = (props) => {
    const styles =StyleSheet.create({
        button:{
            backgroundColor:props.color,
            marginTop:2,
            padding:10,
            borderRadius:5,
            color:"white",
            width:props.width>0?props.width:150,
            height:props.height>0?props.height:80,
            fontSize:20,
            fontWeight:"bold",
            textAlign:"center",
            textAlignVertical:'center',
        }
    });
  return (
    <View>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.button}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MyButton