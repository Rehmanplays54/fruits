import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Text1 = () => {
  return (
    <View
    style={{
        width:wp('100%'),
        height:hp('8%')
    }}
    >
      <Text
      style={{
        fontSize:hp('2.5%'),
        top:hp('1%'),
        width:wp('72%'),
        height:hp('10%'),
        left:hp('3%'),
        fontWeight:800
      }}
      >Hello Tony, What fruit salad combo do you want today?</Text>
    </View>
  )
}

export default Text1