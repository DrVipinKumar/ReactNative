import {StyleSheet} from 'react-native';
import React from 'react';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Students from './Students';
import Marks from './Marks';
import Registration from './Registration';
//import Header from './Header';
export type screenType = {
  Marks: undefined;
  Students: undefined;
  Registration: undefined;
};
//const<Tab = createNativeStackNavigator<screenType>();
const Tab = createBottomTabNavigator<screenType>();
const AllScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Students"
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'yellow',
        tabBarInactiveBackgroundColor: 'red',
        tabBarLabelStyle: {
          fontSize: 20,
        },
      }}>
      <Tab.Screen
        name="Students"
        component={Students}
        options={{
          tabBarLabel: 'Students',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Pro name="studiovinari" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Marks" component={Marks}  options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="bookmarks" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Registration" component={Registration}  options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person-add" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
};
// const AllScreen = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Registration"
//       screenOptions={
//         {
//           // headerShown: false,
//         }
//       }>
//       <Tab.Screen name="Students" component={Students} options={{
//           title: 'Students Information',
//           headerTitleStyle: {
//             fontSize: 25,
//             color: 'yellow',
//           },
//           headerStyle: {
//             backgroundColor: '#AD40AF',
//           },
//         }} />
//       <Tab.Screen name="Marks" component={Marks} />
//       <Tab.Screen
//         name="Registration"
//         component={Registration}
//         options={{
//           headerTitle:(props)=><Header {...props}/>
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default AllScreen;

const styles = StyleSheet.create({});
