import React, {useState} from 'react'
import { Button, StyleSheet, TextInput, View, Text, ScrollView } from 'react-native'

const ListWithScroll = () => {
    const [listValue, setListValue]=useState();
    const [list,setList]=useState([]);
    const handlePress=()=>{
        setList([...list,listValue]);
    }
  return (
    <View style={styles.container}>
        <View style={styles.inputButton}>
        <TextInput
            style={styles.input}
            placeholder="Enter list items"
            placeholderTextColor={"green"}
            onChangeText={(newValue)=>setListValue(newValue)}
        />
        <View style={styles.button}>
            <Button title='Add Item' color="green"
              onPress={handlePress}
             />
        </View>
        </View>
        <View style={styles.scrollView} >
            <ScrollView >
            {list.map((item,index)=>(
                <Text key={index} style={styles.listItem}>{index+1}. {item}</Text>
            ))}
            </ScrollView>
        </View>
        
    </View>
  )
}

export default ListWithScroll
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignSelf:"stretch"
    },
    inputButton:{
    flex: 0.1,
    flexDirection:"row",
    },
    scrollView:{
         flex:0.9,
         marginTop:20,
    },
    input:{
        borderWidth:2,
        borderColor:"green",
        width:280,
        height:40,
    }, 
    button:{
        marginTop:2,
        marginLeft:5,
        height:42,
        width:105,
    }, 
    
    listItem:{
        backgroundColor:"pink",
        marginBottom:2,
        padding:10,
        width:'100%',
    }
});