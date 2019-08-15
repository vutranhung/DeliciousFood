import React,{Component} from 'react';
import { StyleSheet, Text, View, InputText, Button, Alert} from 'react-native';
import ListDeliciousNew from './ListDeliciousNew'
import ListDeliciousSave from './ListDeliciousSave'
import ProposeFood from './ProposeFood'
import Drawer from './Drawer'
import HeaderDrawer from './HeaderDrawer'
import { Icon } from 'react-native-elements'
import {createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export  class Home extends Component {

  render(){
      return (
    <View style={styles.container}>
     
    </View>
     //<DrawerApp/>
  );
  }

}


const ListDeliciousNew_StackNavigator =createStackNavigator({
    ListDeliciousNew: {
    screen: ListDeliciousNew,
    // navigationOptions: ({ navigation }) => ({
    //   title: 'DS món ngon mới nhất',
    //   headerLeft: <Drawer navigationProps={navigation} />,
    //   headerStyle: {
    //     backgroundColor: '#0A9E9E',
    //   },
    //   headerTintColor: '#fff',
    // }),
  },
})

const ListDeliciousSave_StackNavigator =createStackNavigator({
    ListDeliciousSave: {
    screen: ListDeliciousSave,
    navigationOptions: ({ navigation }) => ({
      title: 'DS món ngon đã lưu',
      headerLeft: <Drawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0A9E9E',
      },
      headerTintColor: '#fff',
    }),
  },
})

const ProposeFood_StackNavigator =createStackNavigator({
    ProposeFood: {
    screen: ProposeFood,
    navigationOptions: ({ navigation }) => ({
      title: 'Đề xuất món ngon',
      headerLeft: <Drawer navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0A9E9E',
      },
      headerTintColor: '#fff',
    }),
  },
})



const DrawerNatigator=createDrawerNavigator({
 listDeliciousNew:{
    screen: ListDeliciousNew_StackNavigator,
       navigationOptions: {
       drawerLabel: 'DS món ngon mới nhất',
       drawerIcon: ({ tintColor }) => <Icon name="list" color={tintColor} size={20} />
    },

  },

  listDeliciousSave:{
    screen: ListDeliciousSave_StackNavigator,
       navigationOptions: {
       drawerLabel: 'DS món ngon đã lưu',
       drawerIcon: ({ tintColor }) => <Icon name="list" color={tintColor} size={20} />
    },
  },

   proposeFood:{
    screen: ProposeFood_StackNavigator,
       navigationOptions: {
       drawerLabel: 'Đề xuất món ngon',
       drawerIcon: ({ tintColor }) => <Icon name="note" color={tintColor} size={20} />
    },

  },

} ,
{
   contentComponent: HeaderDrawer,
    hideStatusBar: true,
    drawerBackgroundColor: '#5295ae',
    overlayColor: '#374671',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#374671',
    },
}
)


const DrawerApp=createAppContainer(DrawerNatigator)

export default DrawerApp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});