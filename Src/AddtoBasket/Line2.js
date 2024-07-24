import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Line2 = () => {
  return (
    <View>
       <Text style={{backgroundColor:'#000',height:hp('0.07%'),bottom:hp('-6%')}}></Text>
    </View>
  )
}

export default Line2