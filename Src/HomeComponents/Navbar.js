import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {

  const navigation = useNavigation();
 // console.log(id,price);
  const price=0 
  const number=0
  const id=1
// { number, price, text, image }

//  console.log('Navbar:', { number, price, text, image });

  return (
    <View
      style={{
        width: wp('90%'),
        height: hp('10%')
      }}
    >
      <Image
        style={{
          top: hp('4%'),
          left: hp('3%'),
          position: 'absolute'
        }}
        source={require('../../assets/bars.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket',{price,id,number})}
      >
        <Image
          style={{
            left: hp('33%'),
            top: hp('-1.5%')
          }}
          source={require('../../assets/basket.png')}
        />
        <Text
          style={{
            top: hp('-11.7%'),
            left: hp('38%'),
            fontSize: hp('1.5%')
          }}
        >
          My basket
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
