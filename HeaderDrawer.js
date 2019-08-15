import React,{Component} from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { DrawerItems, DrawerNavigation } from 'react-navigation'
import {Container, Content, Header, Body } from 'native-base';
import { Avatar } from 'react-native-elements';

const HeaderDrawer = (props) => (
  <Container>
  <Header style={styles.drawerHeader}>
  <Body>
  <Avatar
  size="medium"
  rounded
  source={require('./assets/food_icon.jpg')}

/>

  {/* <Image
  style={styles.drawerImage}
  source={require('../assets/logo.png')}/> */}
  <Text style={{color:'#EC5C1C'}}>Foods Delicious </Text>
  </Body>
  </Header>
  <Content>
  <DrawerItems {...props}/>
  </Content>
  </Container>
)


export default HeaderDrawer

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ADD8E6',       
  },
  drawerImage: {
    height: 120,
    width: '100%'
  }, 
   drawerHeader: {
  	height: 120, 
    width: '100%',
  	//backgroundColor: '#ADD8E6'
  },
});


