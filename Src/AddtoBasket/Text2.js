import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Text2 = () => {
  return (
    <View
     style={{
        top:hp('5%'),
        left:hp('3%'),
        width:hp('40')
        }}>
      <Text
      style={{
        fontSize:15
      }}
      >If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
    </View>
  )
}

export default Text2