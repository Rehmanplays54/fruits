import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Line = () => {
  return (
    <Text style={{backgroundColor:'#000',height:hp('0.07%'),bottom:hp('3%')}}></Text>
  )
}

export default Line