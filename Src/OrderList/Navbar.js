import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { COLORS } from '../Components/COLORS';


const Navbar = () => {

 const navigation=useNavigation();

    return (
      
     <View 
     style={{ 
        backgroundColor: '#FFA451',
         width: hp('100%'),
          height:hp('20%')
          }}>
<TouchableOpacity  onPress={()=>navigation.navigate('Home')}
style={{ 
    backgroundColor: '#fff',
     width: wp('23%'),
      height: hp('5%'),
       borderRadius: 55,
        top: hp('4'),
         left: 10 
         }}
         >
    <Icon 
     name='arrow-left' 
     size={30}
      color='#000' 
      style={{ top: hp('1') }} 
      />
    <Text  
    style=
    {{ 
        left: hp('3.8'),
         top: -14 }}
         >GO back
         
         </Text>
 
</TouchableOpacity>
        <Text
        style={{
            fontSize:24,
            left:hp('19%'),
            top:hp('-0.5%'),
            color:'#fff',
            fontWeight:600
        }}
        >My Basket</Text>
        
         
      
        
        </View>
    )
}

export default Navbar



//<Image source={image} style={{ width: 100, height: 100 }} />