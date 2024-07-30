import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Text1 = () => {
  return (
    <View style={{
      top:-15
    }}>
      <Text
      style={{
        left:hp('3%'),
        fontSize:22,
      }}
      >One Pack Contains:</Text>
       <Text 
       style={{
        backgroundColor:'orange',
        height:hp('0.2%'),
        width:wp('40%'),
        left:hp('3%'),
        bottom:hp('-1%')}}
        ></Text>
        <Text
        style={{
            fontSize:18,
            left:hp('3'),
            top:hp('2%')
        }}
        >
        Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>
    </View>
  )
}

export default Text1