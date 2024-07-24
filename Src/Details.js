import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from './AddtoBasket/Navbar'
import { useNavigation } from '@react-navigation/native'

const Details = ({route}) => {
    const { image } = route.params;
  return (
    <View>
   
      <Navbar image={route.params}/>
      
    </View>
  )
}

export default Details