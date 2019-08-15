import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './Login'
import DrawerApp from './Home'
import Register from './Register'

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  home: {screen: DrawerApp},
  register:{screen: Register}
}
);

const MainApp = createAppContainer(MainNavigator);

export default MainApp;

// export default class Main extends Component {
    
//   render(){
//     return (
//     <View style={styles.container}>
//       <MainApp/>   
//     </View>
//   );
//   }  
 
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
