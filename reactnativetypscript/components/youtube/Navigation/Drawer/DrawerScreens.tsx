import {Text, View, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import myimage from '../../../../assets/myimage.jpg';
import Home from '../BottomTab/Home';
import Screen1 from '../BottomTab/Screen1';
import Screen2 from '../BottomTab/Screen2';
import TabScreens from '../BottomTab/TabScreens';

type drawerType = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
  TabScreens: undefined;
};
const Drawer = createDrawerNavigator<drawerType>();
const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabScreens"
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawer {...props} />
      )}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Screen1"
        component={Screen1}
        options={{
          drawerLabel: 'Screen One',
        }}
      />
      <Drawer.Screen
        name="Screen2"
        component={Screen2}
        options={{
          drawerLabel: 'Screen Two',
        }}
      />
      <Drawer.Screen name="TabScreens" component={TabScreens} />
    </Drawer.Navigator>
  );
};
const CustomDrawer = (props: DrawerContentComponentProps) => (
  <View style={{flex: 1}}>
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Dr. Vipin Classes
          </Text>
          <Text>drvipinclasess@gmail.com</Text>
        </View>
        <Image
          source={myimage}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <Text
      style={{padding: 10, marginBottom: 5, color: 'red', fontWeight: 'bold'}}>
      @Copyright: Dr. Vipin Classes
    </Text>
  </View>
);
export default DrawerScreens;
