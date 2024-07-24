import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Text2 = () => {
  return (
    <View>
      <Text
      style={{
        fontSize:hp('3%'),
        fontWeight:600,
        left:hp('3%')
      }}
      >Recommended Combo</Text>
    </View>
  )
}

export default Text2