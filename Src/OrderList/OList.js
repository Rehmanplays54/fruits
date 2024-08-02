import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const OList = ({ text, image,number,price }) => {
  
  
    return (
      <View>
        <ScrollView style={{top:hp('4')}}>
          
         <View style={{backgroundColor:'#FFFAEB',padding:10,left:hp('3'),width:hp('6'),top:hp('1'),borderRadius:12}}> 
           <Image source={image} style={{width:wp('9'),left:hp('-0.3'),height:hp('4'),}}/> 
           </View>
           <Text style={{left:hp('10'),top:hp('-4.6'),fontWeight:600}}>{text}</Text>
           <Text style={{left:hp('10'),top:hp('-4')}}>{number}  Packs</Text>
           <Image source={require('../../assets/curreny.png')}  style={{left:hp('33'),top:hp('-7'),fontSize:22}}/>
           <Text style={{left:hp('36'),top:hp('-9.5'),fontSize:22}}>{price}</Text>
        </ScrollView>
       
        </View>
    );
};



export default OList;
