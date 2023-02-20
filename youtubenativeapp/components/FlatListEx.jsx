import React, {useState} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FlatListEx = () => {
    const [student, setStudent] = useState([
        { id: 1, name: "Ravi", rank: "15" },
        { id: 2, name: "Anil", rank: "1" },
        { id: 3, name: "Sunny", rank: "5" },
        { id: 4, name: "Rahul", rank: "4" },
        { id: 5, name: "Tiger", rank: "3" },
        { id: 6, name: "Sorabh", rank: "8" },
        { id: 7, name: "Dipansu", rank: "100" },
        { id: 8, name: "Yash", rank: "90" }, 
        { id: 9, name: "Ravi", rank: "15" },
        { id: 10, name: "Anil", rank: "1" },
        { id: 11, name: "Sunny", rank: "5" },
        { id: 12, name: "Rahul", rank: "4" },
        { id: 13, name: "Tiger", rank: "3" },
        { id: 14, name: "Sorabh", rank: "8" },
        { id: 15, name: "Dipansu", rank: "100" },
        { id: 16, name: "Yash", rank: "90" },        
      ]);
      const handlePress=(id)=>{
           //Alert.alert("","You clicke on student named="+name);
           setStudent(student.filter((item)=>item.id!=id))
      }
  return (
    <View>
        <View>
            <Text style={styles.heading}>Student Information</Text>
        </View>
        <View>
            <FlatList
            numColumns={4}
            keyExtractor={(item)=>item.id}
            data={student}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>handlePress(item.id)}>
                <Text style={styles.listItem}>{item.name}</Text>
                </TouchableOpacity>
            )}
             />
        </View>
    </View>
  )
}

export default FlatListEx

const styles =StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    listItem:{
        backgroundColor:"pink",
        margin:2,
        textAlignVertical:"center",
        textAlign:"center",
        borderRadius:5,
        padding:10,
        width: 93,
        height:70,
        fontSize:18,
    }
});