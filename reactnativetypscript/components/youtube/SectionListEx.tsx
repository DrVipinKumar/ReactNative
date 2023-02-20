import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  
const SectionListEx = () => {
  return (
    <View style={styles.conainer}>
      <Text style={styles.heading}>SectionList Example</Text>
      <View>
        <SectionList
        sections={DATA}
        scrollEnabled={false}
        keyExtractor={(item,index)=> item + index}
        renderItem={({item})=>(
            <View style={styles.itemContainer}>
                <Text style={styles.item}>{item}</Text>
            </View>
        )}
        renderSectionHeader={({section:{title}})=>(
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionitem}>{title}</Text>
        </View>
        )}
        />
      </View>
    </View>
  )
}

export default SectionListEx

const styles = StyleSheet.create({
    conainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
    },
    itemContainer:{
        backgroundColor:'#f9c2ff',
        width:380,
        marginBottom:5,
        borderRadius:5,
    },
    item:{
        fontSize:20,
        padding:20,
    },
    sectionContainer:{
        backgroundColor:'#fff',
        width:380,
        marginBottom:5,
        borderRadius:5,
    },
    sectionitem:{
        fontSize:30,
        padding:20,
        fontWeight:'bold'
    }
})