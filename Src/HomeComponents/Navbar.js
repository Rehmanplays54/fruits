import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = ({price,number,id,name,image}) => {

  const navigation = useNavigation();
 // console.log(id,price);

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
      style={{left: hp('33%'),
        top: hp('-1.5%')}}
        onPress={() => navigation.navigate('Basket',{price,id,number,name,image})}
      >
        <Image
          source={require('../../assets/basket.png')}
        />
        <Text
          style={{
            top: hp('-10%'),
            left: hp('5%'),
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
