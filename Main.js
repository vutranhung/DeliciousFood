import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './Login'
//import Home from './Home'
import Register from './Register'

const MainNavigator = createStackNavigator({
  login: {screen: Login},
  //home: {screen: Home},
  register:{screen: Register}
}
);

const MainApp = createAppContainer(MainNavigator);

// export class Main extends Component {
//   render(){
//     return (
//     <View style={styles.container}>
//       {/* <Text>Hello1</Text>
//       <MainApp/> */}
//     </View>
//   );
//   }  
 
// }

export default MainApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
