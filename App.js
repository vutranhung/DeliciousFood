import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'
// import Login from './Login'
// import Home from './Home'
// import Register from './Register'
import MainApp from './Main'

export default function App() {
  return (
    <View style={styles.container}>
     <MainApp/>
    </View>
  );
 
}

// const MainNavigator = createStackNavigator({
//   login: {screen: Login},
//   home: {screen: Home},
//   register:{screen: Register}
// }
// );

// const MainApp = createAppContainer(MainNavigator);

// export default MainApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
