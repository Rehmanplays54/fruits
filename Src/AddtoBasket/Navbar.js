import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { COLORS } from '../Components/COLORS';


const Navbar = ({image}) => {

const  {imaage}=image.params;

    return (
      
     <View 
     style={{ 
        backgroundColor: '#FFA451',
         width: '100%',
          height:hp('40%')
          }}>
<View  
style={{ 
    backgroundColor: '#fff',
     width: 100,
      height: 39,
       borderRadius: 55,
        top: 30,
         left: 10 
         }}
         >
    <Icon 
     name='arrow-left' 
     size={30}
      color='#000' 
      style={{ top: 7 }} 
      />
    <Text  
    style=
    {{ 
        left: 37,
         top: -14 }}
         >GO back
         
         </Text>
 
</View>
        <Text
        style={{
            fontSize:24,
            left:hp('19%'),
            top:hp('-0.5%'),
            color:'#fff',
            fontWeight:600
        }}
        >My Basket</Text>
        
          <Image source={ima} style={{width:'100',height:'100'}}/>
        
        
        </View>
    )
}

export default Navbar



//<Image source={image} style={{ width: 100, height: 100 }} />