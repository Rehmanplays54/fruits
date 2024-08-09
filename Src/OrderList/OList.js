import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-animatable';
import {useSelector} from  'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MyContext, usecartcontext } from '../Context/FContext';
import { useNavigation } from '@react-navigation/native';

const OList = ({ price, id, number, name, image, }) => {
  const {removeitem} = usecartcontext();

  const navigation=useNavigation();




  


  return (
  
      <TouchableOpacity    style={{
        left: hp('4'),
        top: hp('-1'),
      }} onPress={()=> navigation.navigate('Basket')}>
          <ScrollView>
      <Text
        style={{
          fontSize: hp('1.6'),
          left: hp('8'),
          top: hp('5'),
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: hp('1.6'),
          left: hp('8'),
          top: hp('6'),
        }}
      >
        {number} Packs
      </Text>

      <View
        style={{
          backgroundColor: '#FFFAEB',
          width: wp('10'),
          height: hp('5'),
          padding: hp('3'),
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image style={{ width: wp('8.5'), height: hp('4') }} source={image} />
      </View>
      <Image
        style={{
          left: hp('32'),
          top: hp('-5'),
        }}
        source={require('../../assets/curreny.png')}
      />
      <Text
        style={{
          fontSize: hp('2'),
          left: hp('35'),
          top: hp('-7.1'),
        }}
      >
        {price}
      </Text>
      <TouchableOpacity style={{ width:wp('6'),height:hp('4'),  marginLeft: hp('37'), top: hp('-6'),}} onPress={() =>removeitem(id)}>
        <Image
          style={{
            width: wp('4'),
            height: hp('3'),
         
          
          
          }}
          source={require('../../assets/delete.png')}
        />
      </TouchableOpacity>
   
        
     
      </ScrollView>
      </TouchableOpacity>

  );
};

export default OList;
