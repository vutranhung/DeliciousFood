import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image, Alert, ImageBackground,TouchableOpacity } from 'react-native';




export default class Logout extends Component {
   constructor(props){
       super(props)
      // this.ProcessLogout()
   }
   ProcessLogout=()=>{
    // xóa tokent 
    const {navigate} = this.props.navigation
    navigate('login')
}

render(){}
}

