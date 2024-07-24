import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const Navbar = () => {
  const navigation = useNavigation('Detaisl');
  return (
    <View
    style={{
        width:wp('90%'),
        height:hp('10%')
    }}
    >
      <Image
      style={{
        top:hp('4%'),
        left:hp('3%'),
        position:'absolute'
      }}
      source=
      {
        require('../../assets/bars.png')
    }
      />
      <View 
      onPress={()=>navigation.navigate('Details')}
      >
        <Image
        style={{ 
            left:hp('33%'),
            top:hp('-2.5%'),
            
         }}
        source=
        {
            require('../../assets/basket.png')
        }
        />
        <Text
        style={{
            top:hp('-12.7%'),
            left:hp('40%'),
            fontSize:hp('1.5%')
        }}
        >
            My basket
        </Text>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})