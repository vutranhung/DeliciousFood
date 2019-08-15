//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import Drawer from './Drawer'
import HeaderDrawer from './HeaderDrawer'

export default class ListDeliciousNew extends Component {
    
   static navigationOptions= ({ navigation }) => ({
     title: 'DS món ngon mới nhất',
   headerLeft: <Drawer navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#ADD8E6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
          fontWeight: 'bold',
           //Sets Header text style
       },
  })

  render() {
    return (
      <View style={styles.Container}>
        <Text> Danh sách món ngon mới nhất </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
