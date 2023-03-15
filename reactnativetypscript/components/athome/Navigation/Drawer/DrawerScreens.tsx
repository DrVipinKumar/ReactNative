import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import Marks from '../Marks';
import Registration from '../Registration';
import Students from '../Students';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
type drawerType = {
  Marks: undefined;
  Registration: undefined;
  Students: undefined;
  TabScreens: undefined;
};
const Drawer = createDrawerNavigator<drawerType>();
const CustomDrawer = (props: DrawerContentComponentProps) => (
  <View style={{flex: 1}}>
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 10}}>
          <Text>Dr. Vipin Classes</Text>
          <Text>drvipinclasses@gmail.com</Text>
        </View>
        <Image
          source={require('../../../../assets/myimage.jpg')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <TouchableOpacity style={{left: 20, marginBottom: 20}}>
      <Text>@Copyright: Dr. Vipin Classes</Text>
    </TouchableOpacity>
  </View>
);
const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Marks"
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawer {...props} />
      )}>
      <Drawer.Screen
        name="Marks"
        component={Marks}
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Registration"
        component={Registration}
        options={{
          drawerLabel: 'Registration',
        }}
      />
      <Drawer.Screen
        name="Students"
        component={Students}
        options={{
          drawerLabel: 'Students Screen',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
